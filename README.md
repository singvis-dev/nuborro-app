# 🏠 Nuborro

> India's neighbourhood rent-anything marketplace. Borrow from people around you.

**Live**: [nuborro.com](https://nuborro.com) | **Status**: Pre-MVP

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + Tailwind CSS |
| Backend | Next.js API Routes (modular monolith) |
| Database | Supabase (Postgres + RLS) |
| Auth | Supabase Auth + Google OAuth |
| Storage | Supabase Storage → Cloudflare R2 |
| Payments | Razorpay |
| Email | Resend |
| SMS | MSG91 |
| Hosting | Vercel |
| Security | Cloudflare + Upstash |

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Supabase CLI (`npm install -g supabase`)

### Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/nuborro-app.git
cd nuborro-app

# 2. Install dependencies
npm install

# 3. Copy env template
cp .env.local.example .env.local
# Fill in your local Supabase credentials

# 4. Start local Supabase
supabase start

# 5. Run migrations
supabase db push

# 6. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Branch Strategy

| Branch | Purpose | Deploys to |
|--------|---------|-----------|
| `main` | Production — always deployable | nuborro.com (Vercel prod) |
| `staging` | Pre-production integration | staging.nuborro.com (Vercel preview) |
| `feature/*` | New features | PR preview |
| `fix/*` | Bug fixes | PR preview |
| `hotfix/*` | P0 production emergencies | Straight to main |
| `chore/*` | Deps, config, docs | PR preview |

**Full branching strategy**: See [Notion Wiki → 07 Git Branching Strategy](https://app.notion.com/p/3843dd2369ef81f88343ffd308a35ceb)

### Daily Workflow

```bash
# Start from staging
git checkout staging && git pull origin staging

# Create your feature branch (use backlog ID)
git checkout -b feature/P1-006-google-oauth

# Work, commit with conventional commits
git commit -m "feat: add Google OAuth signup"

# Push and open PR to staging
git push origin feature/P1-006-google-oauth
```

---

## Project Structure

```
nuborro-app/
├── .github/workflows/      # CI/CD pipelines
├── src/
│   ├── app/                # Next.js App Router (pages + API routes)
│   ├── modules/            # Business logic modules
│   │   ├── users/
│   │   ├── listings/
│   │   ├── bookings/
│   │   ├── chat/
│   │   ├── payments/
│   │   ├── notifications/
│   │   ├── disputes/
│   │   └── trust/
│   ├── adapters/           # Vendor abstraction (IDatabase, IMessaging...)
│   ├── lib/                # Shared utilities (logger, errors, config)
│   └── types/              # Shared domain types
├── supabase/
│   └── migrations/         # SQL migrations (timestamped)
├── public/
├── .env.local.example      # Template for local env vars
└── .env.staging            # Staging non-secret config
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # Server-side only, never expose to client

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Resend (email)
RESEND_API_KEY=

# MSG91 (SMS)
MSG91_AUTH_KEY=
MSG91_SENDER_ID=

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=

# Sentry
SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# Upstash (rate limiting)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Posthog (analytics)
NEXT_PUBLIC_POSTHOG_KEY=
```

> ⚠️ **Never commit `.env.local` or `.env.production` to git.**

---

## GitHub Secrets Required

Add these in **Settings → Secrets and Variables → Actions**:

```
STAGING_SUPABASE_URL
STAGING_SUPABASE_ANON_KEY
PROD_SUPABASE_URL
PROD_SUPABASE_ANON_KEY
PROD_SUPABASE_DB_URL
SUPABASE_ACCESS_TOKEN
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
SENTRY_AUTH_TOKEN
SENTRY_ORG
SENTRY_PROJECT
```

---

## Engineering Wiki

All architecture decisions, security risks, feature backlog, and infrastructure plans live in Notion:

📖 [Nuborro Engineering Wiki](https://app.notion.com/p/3843dd2369ef812d8b2ec64e9fb2a97a)

| Document | Link |
|---------|------|
| Architecture Decision Log | [01 — ADRs](https://app.notion.com/p/3843dd2369ef81a08988e73b12d0ffea) |
| Security & Risk Register | [02 — Security](https://app.notion.com/p/3843dd2369ef81ce8f75c214d918b1cb) |
| Feature Backlog | [03 — Backlog](https://app.notion.com/p/3843dd2369ef814384a4f26a17934f6c) |
| Infrastructure Status | [04 — Infra](https://app.notion.com/p/3843dd2369ef81768694e6c2ed046135) |
| DB Schema Reference | [05 — Schema](https://app.notion.com/p/3843dd2369ef810eaaa0cc189dd894b7) |
| Dispute Framework | [06 — Trust Layer v1](https://app.notion.com/p/3843dd2369ef81c299bedfcf80049dab) |
| Git Branching Strategy | [07 — Git & CI/CD](https://app.notion.com/p/3843dd2369ef81f88343ffd308a35ceb) |

---

## License

MIT © Nuborro 2026
