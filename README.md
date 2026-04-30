# Mustravelz

Mustravelz is a multilingual travel brand website built around a premium editorial, scrapbook, travel-journal aesthetic. The product combines brand storytelling, destination discovery, journal content, premium paid guides, community storytelling, collaboration flows, Stripe-based commerce, and a lightweight operational backend.

This repository currently contains the front-end and CMS foundation for that platform. The documentation in this repo reflects the target architecture and the implementation direction that should guide future build work.

## Vision

Mustravelz is not a brochure site. It is meant to combine:

- brand storytelling
- destination discovery
- travel guides and journals
- premium paid journal content
- community storytelling
- work-with-us and collaboration flows
- Stripe-based commerce
- lightweight operational backend workflows

The goal is to keep public-facing content polished and easily editable while keeping backend workflows narrow, maintainable, and production-safe.

## Product goals

Primary goals:

- build a high-quality, conversion-friendly travel website
- keep visible editorial text editable through a CMS
- support English, French, and Arabic
- support free and paywalled journals
- support community submissions with admin approval
- avoid public login and account complexity in v1
- use Stripe for payments
- use Cloudflare for hosting and backend infrastructure where practical

MVP principles:

- no public login or account system
- no custom payment processing UI unless necessary
- keep backend responsibilities narrow and clean
- use a CMS for public content, not a raw database
- use the database for operational and transactional workflows only

## Locked architecture

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Cloudflare deployment

### CMS

- Sanity
- source of truth for multilingual editorial and public content

### Payments

- Stripe
- hosted Checkout preferred in v1

### Backend and infrastructure

- Cloudflare Workers for API and workflow logic
- Cloudflare D1 for operational and transactional records
- Cloudflare R2 for uploaded files where needed
- Cloudflare KV for lightweight state, cache, or rate limits where needed
- Cloudflare Queues for async tasks later if needed
- Cloudflare Access for protecting internal admin routes

## Responsibility split

### Sanity manages

Published editorial and public content:

- home page
- destinations
- about
- journal entries and guides
- approved community posts
- work-with-us page content
- FAQ
- privacy policy
- terms and conditions
- global site settings
- shared CTA text
- SEO fields
- multilingual content

### Stripe manages

Payment truth:

- checkout sessions
- successful payments
- refunds
- receipts
- pricing and payment metadata
- coupons
- payment status

### Cloudflare D1 manages

Operational and transactional records:

- community submissions before approval
- moderation status
- premium journal purchases
- access tokens and unlock links
- contact submissions
- work-with-us applications
- internal workflow logging

### R2 manages

Uploaded files when needed:

- community submission images
- optional downloadable premium assets
- optional application attachments

## Site structure

Required public pages:

- Home
- Destinations
- About
- Journal
- Community
- Work With Us
- FAQ
- Privacy Policy
- Terms & Conditions

Recommended system routes:

- community submission flow
- journal premium unlock page
- purchase success page
- purchase access page
- 404 page
- minimal internal admin routes

## Localization

Supported languages:

- English
- French
- Arabic

Requirements:

- all major public-facing content types support localization
- Arabic supports RTL
- locale-aware routing stays consistent
- forms, nav, cards, and buttons respect direction

The current repo already includes locale-aware routing and RTL support. The planned content model moves major public text into Sanity with field-level localization where practical.

## Design direction

The intended visual system is:

- editorial
- scrapbook
- travel journal
- textured but premium
- expressive but not messy

UI principles:

- warm paper-like backgrounds
- collage and photo layering
- refined typography
- subtle motion
- minimal but distinctive CTAs
- premium editorial spacing
- image-led storytelling

## Repo structure

Current repo structure:

```text
mustravelz-website/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   │   ├── content/
│   │   ├── i18n/
│   │   └── sanity/
│   └── sanity/
│       └── schemaTypes/
├── docs/
│   ├── architecture.md
│   ├── backend.md
│   ├── content-model.md
│   ├── d1-schema.md
│   ├── api.md
│   ├── booking-flow.md
│   └── deployment.md
├── db/
│   ├── migrations/
│   └── seed.sql
├── worker/
│   ├── src/
│   ├── wrangler.jsonc
│   └── package.json
├── custom-worker.ts
├── open-next.config.ts
└── wrangler.jsonc
```

Target architectural separation:

- `app/` or `src/app/` for routes
- `components/` for shared UI
- `lib/` for content queries, Stripe helpers, localization, admin utilities
- `sanity/` for schemas and CMS helpers
- `worker/` for backend worker logic
- `db/` for D1 schema and migrations
- `styles/` for design tokens and styling primitives

## Local development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`.

3. Set the current Sanity environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-04
```

4. Start development:

```bash
npm run dev
```

5. Open the localized site at `http://localhost:3000/en`

6. Open the embedded studio at `http://localhost:3000/studio`

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run preview
npm run deploy
npm run deploy:development
npm run upload
npm run upload:development
npm run cf-typegen
```

## Environment variables

Currently used in this repo:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-04
```

Planned infrastructure and commerce variables:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_PREMIUM_JOURNAL=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_D1_DATABASE_ID=
CLOUDFLARE_R2_BUCKET=
CLOUDFLARE_ACCESS_AUD=
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
```

## Current implementation note

The repo currently implements:

- a localized homepage experience
- embedded Sanity Studio at `/studio`
- a typed homepage content contract
- local fallback content when Sanity is not configured
- Cloudflare deployment wiring through OpenNext

The broader destination, journal, premium access, submission, and internal admin workflows are documented here as the target build plan rather than completed features.

## D1-first backend

The first backend milestone is the operational D1 schema. The initial migration creates:

- `contact_submission`
- `work_with_us_application`
- `community_submission`
- `community_publication`
- `journal_purchase`
- `paywall_access_token`

The migration lives in `db/migrations/0001_operational_tables.sql`. Remote D1 database creation is currently blocked by the Cloudflare API token permissions, but the intended database names are `mustravelz-development` and `mustravelz-production`.

## Documentation

- [docs/architecture.md](./docs/architecture.md)
- [docs/backend.md](./docs/backend.md)
- [docs/content-model.md](./docs/content-model.md)
- [docs/d1-schema.md](./docs/d1-schema.md)
- [docs/api.md](./docs/api.md)
- [docs/booking-flow.md](./docs/booking-flow.md)
- [docs/deployment.md](./docs/deployment.md)

## Best next step

The next concrete step is to lock:

1. the exact Sanity schema blueprint
2. the exact D1 table schema
3. the exact premium journal access flow
4. the exact repo scaffold
5. the exact localized routing plan

## License

Private project.
