# Mustravelz

Mustravelz is a multilingual travel commerce and editorial site built on Next.js and deployed with OpenNext on Cloudflare.

## What is in place

- Locale-aware routing for `en`, `fr`, and `ar`
- RTL support for Arabic
- Scrapbook-style homepage foundation with Framer Motion reveals
- Typed content layer that reads from Sanity when configured and falls back safely in development
- Embedded Sanity Studio route at `/studio`
- Cloudflare/OpenNext deployment wiring kept intact

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and set your Sanity project values.

3. Start development:

```bash
npm run dev
```

4. Open the localized site at `http://localhost:3000/en`

5. Open the CMS route at `http://localhost:3000/studio`

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run preview
npm run deploy
```

## Content architecture

- `src/lib/content/home-page.ts` is the front-end content entry point
- `src/lib/content/fallback-home-page.ts` holds safe local fallback copy for each locale
- `src/lib/sanity/*` contains the Sanity client, environment helpers, and GROQ query
- `src/sanity/schemaTypes/home-page.ts` defines the editable homepage document schema

The current homepage is intentionally routed through one typed document shape so visible copy can move into Sanity without changing the UI contract.

## Near-term follow-up

- Add a Sanity initialization step or seed script so the three locale home documents are created automatically
- Wire Stripe hosted checkout through a server route and map purchasable items to operational data
- Add D1-backed submission intake and moderation states for community content
- Expand beyond the homepage into journal article and collection detail routes
