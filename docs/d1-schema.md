# D1 Schema

## Scope

The first D1 build should include operational workflow tables only:

- `contact_submission`
- `work_with_us_application`
- `community_submission`
- `community_publication`
- `journal_purchase`
- `paywall_access_token`

The migration lives at `db/migrations/0001_operational_tables.sql`.

## Tables

### `contact_submission`

Stores contact form messages.

Columns:

- `id`
- `name`
- `email`
- `subject`
- `message`
- `created_at`

### `work_with_us_application`

Stores partnership, creator, collaboration, and opportunity submissions.

Columns:

- `id`
- `name`
- `email`
- `type`
- `message`
- `links`
- `attachment_url`
- `created_at`

`links` is JSON text when present.

### `community_submission`

Stores raw community submissions before approval.

Columns:

- `id`
- `name`
- `email`
- `title`
- `body`
- `media_urls`
- `destination_slug`
- `status`
- `created_at`
- `reviewed_at`
- `reviewer_note`

Allowed `status` values:

- `pending`
- `approved`
- `rejected`

`media_urls` is JSON text when present.

### `community_publication`

Links an approved D1 submission to its published Sanity document.

Columns:

- `id`
- `submission_id`
- `sanity_document_id`
- `published_at`

### `journal_purchase`

Tracks premium journal purchases.

Columns:

- `id`
- `email`
- `journal_slug`
- `stripe_checkout_session_id`
- `stripe_payment_intent_id`
- `status`
- `created_at`

Allowed `status` values:

- `pending`
- `paid`
- `refunded`
- `expired`

### `paywall_access_token`

Tracks premium access tokens.

Columns:

- `id`
- `purchase_id`
- `token_hash`
- `expires_at`
- `last_used_at`
- `created_at`

Store a token hash, not the raw token, so leaked database rows do not become valid access links.

## Remote setup

Create D1 databases once the Cloudflare token has D1 write permissions:

```bash
npx wrangler d1 create mustravelz-development --location enam
npx wrangler d1 create mustravelz-production --location enam
```

Then apply migrations:

```bash
npx wrangler d1 migrations apply mustravelz-development --remote
npx wrangler d1 migrations apply mustravelz-production --remote
```
