# Backend

## Structure

Backend work should live under `worker/` and use Cloudflare Workers.

```text
worker/
├── src/
│   ├── index.ts
│   ├── routes/
│   ├── lib/
│   └── types/
├── wrangler.jsonc
└── package.json
```

The current Worker implements the Step 1 submission and community moderation routes documented in `docs/api.md`.

The public Next/OpenNext site has its own Worker config at the repo root. D1 is intentionally bound to this API Worker instead of the public site Worker so frontend deployments can continue independently from backend database provisioning.

## Runtime

- Cloudflare Workers for API logic
- D1 binding named `DB`
- R2 later for uploads, not part of Step 1
- Cloudflare Access later for internal admin routes

## Environments

Production:

- Worker: `mustravelz-api`
- D1 database: `mustravelz-production`

Development:

- Worker: `mustravelz-api-development`
- D1 database: `mustravelz-development`
- URL: `https://api-dev.mustravelz.com`

## D1 first

Build operational tables before adding route behavior:

- `contact_submission`
- `work_with_us_application`
- `community_submission`
- `community_publication`
- `journal_purchase`
- `paywall_access_token`

## Commands

From `worker/`:

```bash
npm run dev
npm run deploy:development
npm run d1:migrate:local
npm run d1:migrate:development
npm run d1:migrate:production
```

The development API Worker is deployed at `https://api-dev.mustravelz.com`.
