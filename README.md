# 🏠 Nuborro

> India's neighbourhood rent-anything marketplace.

**Live**: [nuborro.com](https://nuborro.com) | **Stack**: Next.js 16 + Supabase + Vercel

---

## Quick Start

```bash
# 1. Clone
git clone https://github.com/singvis-dev/nuborro-app.git
cd nuborro-app

# 2. Install
npm install

# 3. Set up env
cp .env.local.example .env.local
# Fill in your Supabase URL, publishable key, and secret key

# 4. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) ✅

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Database | Supabase (Postgres + RLS) |
| Auth | Supabase Auth + Google OAuth |
| Payments | Razorpay |
| Email | Resend |
| SMS | MSG91 |
| Hosting | Vercel |
| Security | Cloudflare + Upstash |

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — nuborro.com |
| `staging` | Pre-prod — staging environment |
| `feature/*` | All new features |
| `fix/*` | Bug fixes |
| `hotfix/*` | P0 production emergencies |

📖 [Full wiki →](https://app.notion.com/p/3843dd2369ef812d8b2ec64e9fb2a97a)
