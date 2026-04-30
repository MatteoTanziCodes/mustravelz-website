# Booking Flow

## Scope

This document describes the v1 commerce flow for premium journal access. The key constraint is that Mustravelz does not introduce a public login or account system in v1.

The recommended model is a no-login premium access flow backed by Stripe, Cloudflare Workers, and D1.

## Why this flow

This approach is the best MVP because it:

- avoids user account complexity
- keeps payment handling in Stripe
- keeps access logic simple
- works well with a content-heavy editorial site
- leaves room to evolve into accounts later if needed

## Visitor journey

1. User visits a premium journal page
2. The page shows preview content and an unlock CTA
3. The user starts Stripe Checkout
4. Stripe handles payment
5. A Stripe webhook is processed by a Cloudflare Worker
6. A purchase record is stored or updated in D1
7. A secure access token or link is generated
8. The user receives access through email or the success page
9. Premium content is served only after token verification

## Responsibility split

### Sanity

Sanity stores:

- premium journal metadata
- preview content
- public journal presentation content
- full premium content if render-time gating is used

### Stripe

Stripe stores:

- checkout session
- payment confirmation
- receipts
- refunds

### D1

D1 stores:

- purchase record
- purchaser email
- journal slug or id
- Stripe session id
- payment intent id
- token records
- token usage metadata if needed

## Detailed flow

### Step 1: premium journal page render

- the public page renders journal metadata from Sanity
- if the entry is premium, only preview content is shown by default
- the page includes an unlock CTA

### Step 2: checkout session creation

- the frontend calls a worker endpoint
- the request includes journal identifier, locale, and purchaser email
- the worker validates the journal and creates a Stripe Checkout session
- the worker stores an initial `journal_purchase` record in D1 with status `pending`

### Step 3: checkout completion

- the user completes Stripe Checkout
- the browser may redirect to a success page
- the redirect alone must not be treated as payment confirmation

### Step 4: webhook processing

- Stripe sends a webhook to the worker
- the worker verifies the webhook signature
- the worker updates the purchase record in D1
- the worker generates a secure access token
- the worker stores the token in `paywall_access_token`

### Step 5: access delivery

Access can be delivered through:

- a success page link
- email
- both

The success page can display:

- confirmation message
- journal title
- secure access link
- fallback support instructions

### Step 6: token verification

- the premium journal access route receives a token
- the worker verifies token validity
- the worker checks expiry and purchase state
- the premium content is returned or access is denied

## Suggested statuses

### `journal_purchase.status`

- `pending`
- `paid`
- `refunded`
- `expired`

### `community_submission.status`

- `pending`
- `approved`
- `rejected`

## Failure cases to handle

- user abandons checkout
- checkout succeeds but redirect fails
- webhook arrives late
- email delivery fails
- token expires
- token is malformed or reused unexpectedly
- journal slug does not match purchase

## Security rules

- trust Stripe webhooks, not browser redirects
- keep token generation server-side
- store tokens in D1
- apply expiry where appropriate
- protect internal resend-access operations behind Cloudflare Access

## Future evolution

This flow can later evolve into:

- account-based access
- purchase history
- multi-product premium bundles
- subscription access

The v1 design should not block those paths, but it should not implement them preemptively.
