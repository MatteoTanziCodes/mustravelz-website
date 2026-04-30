# API

## Step 1 Scope

The first Worker API milestone is intentionally narrow.

Goal:

- receive public submissions
- validate request bodies
- store submissions in D1
- let admin list, approve, and reject community submissions
- support CORS preflight when the frontend calls the Worker from another domain

Out of scope for Step 1:

- Stripe
- premium journals
- R2 uploads
- contact admin review
- work-with-us admin review
- Sanity publishing

## Endpoints

```http
GET     /health
POST    /contact
POST    /work-with-us
POST    /community-submissions
GET     /admin/community-submissions
POST    /admin/community-submissions/:id/approve
POST    /admin/community-submissions/:id/reject
OPTIONS /*
```

## Public Endpoints

### `GET /health`

Returns Worker health and environment.

Response:

```json
{
  "ok": true,
  "service": "mustravelz-api",
  "environment": "development"
}
```

### `POST /contact`

Stores a contact submission in D1.

Request:

```json
{
  "name": "Amina Rahman",
  "email": "amina@example.com",
  "subject": "Partnership inquiry",
  "message": "We would like to collaborate on a destination feature."
}
```

Response:

```json
{
  "ok": true,
  "submissionId": "contact_123"
}
```

### `POST /work-with-us`

Stores a collaboration or opportunity application in D1.

Request:

```json
{
  "name": "Layla Noor",
  "email": "layla@example.com",
  "type": "creator",
  "message": "I would like to collaborate on travel storytelling.",
  "links": [
    "https://example.com/portfolio"
  ],
  "attachmentUrl": "https://example.com/application.pdf"
}
```

Response:

```json
{
  "ok": true,
  "applicationId": "work_123"
}
```

### `POST /community-submissions`

Stores a raw community submission in D1 with `pending` status.

Request:

```json
{
  "name": "Sara",
  "email": "sara@example.com",
  "title": "Weekend in Chefchaouen",
  "body": "Story content...",
  "mediaUrls": [
    "https://example.com/photo.jpg"
  ],
  "destinationSlug": "chefchaouen"
}
```

Response:

```json
{
  "ok": true,
  "submissionId": "community_123",
  "status": "pending"
}
```

## Admin Endpoints

These routes are admin-only by product intent. Step 1 implements the route behavior; Cloudflare Access should protect them before production use.

### `GET /admin/community-submissions`

Returns community submissions.

Query parameters:

- `status`: optional, one of `pending`, `approved`, `rejected`
- `limit`: optional integer from `1` to `100`, defaults to `50`

Response:

```json
{
  "ok": true,
  "submissions": []
}
```

### `POST /admin/community-submissions/:id/approve`

Marks a community submission as approved in D1.

Request:

```json
{
  "reviewerNote": "Looks good."
}
```

Response:

```json
{
  "ok": true,
  "submissionId": "community_123",
  "status": "approved"
}
```

### `POST /admin/community-submissions/:id/reject`

Marks a community submission as rejected in D1.

Request:

```json
{
  "reviewerNote": "Not a fit for publishing."
}
```

Response:

```json
{
  "ok": true,
  "submissionId": "community_123",
  "status": "rejected"
}
```

## CORS

`OPTIONS /*` returns preflight headers:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`

This is permissive for Step 1 testing. Tighten the allowed origin before production if the Worker should only accept browser calls from known domains.

## Validation Rules

- request bodies must be JSON objects
- required strings must be present and non-empty
- email values must look like valid email addresses
- `links` and `mediaUrls` must be arrays when present
- community `status` filters must be `pending`, `approved`, or `rejected`
