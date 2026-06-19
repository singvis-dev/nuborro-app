export const runtime = 'edge'

export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'nuborro-api',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  })
}
