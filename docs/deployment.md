# Deployment

## Overview

Mustravelz should stay aligned with Cloudflare for hosting and backend infrastructure where practical.

The deployment model has two parts:

- the public Next.js site deployed to Cloudflare through OpenNext
- Cloudflare-backed backend services for Workers, D1, R2, and Access

## Current repo deployment

This repository is already configured for:

- Next.js application build
- OpenNext Cloudflare output
- Wrangler-based preview and deploy
- embedded Sanity Studio route inside the site
- separate production and development Worker environments

Relevant files:

- `open-next.config.ts`
- `wrangler.jsonc`
- `custom-worker.ts`
- `cloudflare-env.d.ts`

## Target platform setup

### Frontend

- deploy Next.js on Cloudflare
- keep localized routes and Sanity-backed pages in the same frontend app

### CMS

- Sanity remains the editorial content system
- embedded Studio can continue at `/studio`
- optionally protect Studio access separately depending on editorial workflow needs

### Backend

- Cloudflare Workers handle form endpoints, purchase endpoints, webhook handling, token verification, and internal admin APIs

### Database

- Cloudflare D1 stores workflow and transactional records
- production database name: `mustravelz-production`
- development database name: `mustravelz-development`
- D1 is bound to the API Worker, not the public Next/OpenNext site Worker

### File uploads

- Cloudflare R2 stores raw uploads and optional downloadable files

### Internal admin protection

- Cloudflare Access protects internal admin surfaces and operational endpoints

## Suggested deployment units

### Public app

Responsibilities:

- render localized pages
- fetch Sanity content
- render premium journal previews
- surface CTA and submission flows

### Worker APIs

Responsibilities:

- contact submission
- work-with-us application submission
- community submission
- Stripe Checkout session creation
- Stripe webhook handling
- premium access verification
- admin operations

### D1 database

Tables should cover:

- `community_submission`
- `community_publication`
- `journal_purchase`
- `paywall_access_token`
- `contact_submission`
- `work_with_us_application`

## Environment variables

Current repo variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-04-04
```

Recommended additional variables:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_PREMIUM_JOURNAL=
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_D1_DATABASE_ID=
CLOUDFLARE_R2_BUCKET=
CLOUDFLARE_ACCESS_AUD=
```

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run deploy
npm run deploy:development
npm run upload
npm run upload:development
npm run cf-typegen
```

## GitHub Deployment

GitHub Actions connects this repo to Cloudflare:

- pushes to `development` deploy the API Worker to `https://api-dev.mustravelz.com` and the public site Worker to `https://dev.mustravelz.com`
- pushes to `main` deploy the public site Worker to `https://mustravelz.com`

Required GitHub repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Workflow files:

- `.github/workflows/deploy-development.yml`
- `.github/workflows/deploy-production.yml`

## Development deployment URL

The root `wrangler.jsonc` now defines a development environment:

- Worker name: `mustravelz-development`
- URL: `https://dev.mustravelz.com`
- `workers_dev`: disabled
- production custom domain remains on `mustravelz.com`
- no D1 binding on the public site Worker, so frontend deployments are not blocked by backend database setup

Deploy the development branch for remote end-to-end testing with:

```bash
npm run deploy:development
```

That will publish the Next/OpenNext site to the development Worker instead of the production `mustravelz` Worker. The development route is already configured on the `mustravelz.com` zone.

The API Worker development environment uses:

- Worker name: `mustravelz-api-development`
- URL: `https://api-dev.mustravelz.com`
- D1 database: `mustravelz-development`

## Production checklist

- Sanity environment variables are configured
- localized routes work for `en`, `fr`, and `ar`
- Arabic RTL layouts are verified
- `/studio` behavior is verified
- worker routes are deployed and reachable
- D1 bindings are configured
- R2 bindings are configured if uploads are enabled
- Stripe webhook secret is configured
- Cloudflare Access protects internal admin routes
- SEO metadata and social previews are verified by locale
- premium journal access flow is tested end-to-end

## Current implementation note

The current repo already has the Cloudflare frontend deployment foundation. The API Worker scaffold and initial D1 schema are in place. R2 upload handling and Access-protected admin routes are still planned implementation work.
