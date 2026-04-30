# Architecture

## Summary

Mustravelz is a multilingual editorial travel platform built on Next.js, Sanity, Stripe, and Cloudflare. The public site is content-heavy and brand-led, while operational workflows remain intentionally lightweight and infrastructure-aligned.

The core architectural rule is simple:

- published public content lives in Sanity
- payment truth lives in Stripe
- operational and transactional workflow records live in D1

## Product architecture

### 1. Presentation layer

The presentation layer is the multilingual Next.js application.

Responsibilities:

- locale-aware routing
- RTL handling for Arabic
- page rendering for editorial and commerce surfaces
- premium journal preview and unlock UI
- community submission flows
- internal admin route shells

Current repo implementation already includes:

- Next.js App Router
- localized routes for `en`, `fr`, and `ar`
- RTL support
- embedded Sanity Studio route
- typed homepage content fetch + fallback path

### 2. CMS layer

Sanity is the source of truth for published editorial content.

Sanity should manage:

- singleton pages
- destinations
- journal entries
- approved community posts
- FAQs
- testimonials
- site settings
- SEO metadata
- multilingual public content

Sanity should not be used as the transactional database.

### 3. Commerce layer

Stripe is the source of truth for payments.

Stripe should manage:

- hosted checkout sessions
- payment confirmation
- receipts
- refunds
- pricing metadata
- promo and coupon logic

The v1 commerce model is a no-login premium journal unlock flow rather than a full user-account commerce platform.

### 4. Workflow layer

Cloudflare Workers provide backend logic for operational workflows.

Primary worker responsibilities:

- contact form submission
- work-with-us application submission
- community content submission
- Stripe checkout session creation
- Stripe webhook handling
- premium access token generation and verification
- moderation actions
- internal admin APIs

### 5. Data layer

Cloudflare D1 stores operational and transactional data.

D1 should hold:

- pending community submissions
- moderation states
- premium journal purchases
- paywall access tokens
- contact submissions
- work-with-us applications
- internal workflow logs where needed

### 6. Upload and asset layer

Cloudflare R2 stores uploaded files where needed.

Typical R2 use cases:

- community submission media
- optional premium downloadable assets
- work-with-us attachments

Editorial published media can continue to live in Sanity where that is the better content management fit.

### 7. Security layer

Cloudflare Access protects internal admin routes and operational tooling.

This avoids introducing a public account system in v1 and avoids building a custom internal auth system too early.

## Responsibility split

### Sanity

Published public content:

- home
- destinations
- about
- journal entries
- approved community posts
- work-with-us page content
- FAQ
- privacy policy
- terms and conditions
- global settings
- SEO
- multilingual editorial text

### Stripe

Payment truth:

- checkout
- receipts
- refunds
- promo metadata
- payment status

### D1

Operational workflow truth:

- pending submissions
- approvals and rejections
- purchase records
- access links and tokens
- contact and application records

### R2

Uploaded files:

- raw submission media
- attachments
- optional downloadable assets

## Page architecture

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
- premium unlock page
- purchase success page
- purchase access page
- internal admin routes
- 404 page

## Information architecture

### Home

Purpose:

- establish brand
- communicate taste and trust
- route users into destinations, journals, community, and collaboration

Expected sections:

- hero
- featured destinations
- value proposition
- journal preview
- community / fundraising block
- testimonials
- email signup
- final CTA

### Destinations

Purpose:

- editorial destination discovery
- connect destination story to journal and community content

### About

Purpose:

- brand story
- mission
- values
- trust-building narrative

### Journal

Purpose:

- free travel guides
- premium paywalled guides
- future monetization surface

### Community

Purpose:

- display approved community stories
- create brand depth
- provide submission entry point

### Work With Us

Purpose:

- partnerships
- collaboration
- creator opportunities
- hiring or general applications

## Localization architecture

Supported languages:

- English
- French
- Arabic

Requirements:

- locale-aware routing
- direction switching for Arabic
- RTL-safe UI decisions
- localized SEO
- major public content types modeled for all three languages

Recommended content strategy:

- use localized fields in Sanity where practical
- keep frontend locale handling centralized
- make direction a layout-level concern, not a component-level patch

## Accessibility and performance guardrails

### Accessibility

- semantic HTML
- accessible menus and accordions
- keyboard support
- screen-reader-safe forms
- reduced motion support
- readable contrast
- RTL-safe patterns

### Performance

- prefer server components where sensible
- keep CMS queries structured and minimal
- avoid unnecessary client components
- optimize images and fonts
- keep decorative effects lightweight
- lazy-load non-critical media

## Suggested repo shape

Current repo structure is still front-end-heavy. The target separation should be:

- `src/app/` for routes and layouts
- `src/components/` for UI and page sections
- `src/lib/` for localization, content, Stripe helpers, admin utilities
- `src/sanity/` for schemas and query helpers
- `worker/` for backend entry points and route handlers
- `db/` for D1 schema and migrations
- `styles/` for system tokens and shared styling concerns

## What not to do

- do not use Sanity as the transactional database
- do not replace Stripe admin with custom payment admin
- do not introduce public user auth in v1 unless requirements change
- do not mix raw workflow records and published editorial content in the same system without a clear reason
- do not overengineer stateful backend infrastructure before it is needed
