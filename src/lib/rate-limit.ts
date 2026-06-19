import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Only initialise when env vars are available
function createRateLimiter(requests: number, window: string) {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    // Return a passthrough in development when Upstash isn't configured
    return {
      limit: async () => ({ success: true, limit: requests, remaining: requests, reset: 0 }),
    }
  }

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window as `${number} ${'s' | 'm' | 'h' | 'd'}`),
  })
}

// Different limits per route type
export const rateLimiters = {
  auth:     createRateLimiter(5,   '15 m'), // 5 login attempts per 15 min
  listings: createRateLimiter(10,  '1 h'),  // 10 listings created per hour
  messages: createRateLimiter(60,  '1 m'),  // 60 messages per minute
  api:      createRateLimiter(100, '1 m'),  // 100 general API calls per minute
  search:   createRateLimiter(30,  '1 m'),  // 30 searches per minute
}

export async function checkRateLimit(
  limiter: keyof typeof rateLimiters,
  identifier: string
): Promise<{ success: boolean; remaining: number }> {
  const result = await rateLimiters[limiter].limit(identifier)
  return { success: result.success, remaining: result.remaining }
}
