# Content Model

## Core rule

Use this split consistently:

- published content goes to Sanity
- workflow and payment-linked records go to D1

This keeps editorial management clean and keeps operational data in the right system.

## Localization strategy

Supported languages:

- `en`
- `fr`
- `ar`

Requirements:

- all major public-facing content types support localization
- Arabic supports RTL in the frontend
- content may be launched in one language first, but schemas should support all three

Recommended Sanity approach:

- use localized fields rather than separate documents where practical
- localize titles, excerpts, CTAs, rich text, and SEO fields

Conceptual examples:

- `title.en`
- `title.fr`
- `title.ar`

## Sanity content model

Sanity is the source of truth for published public content.

### Singleton documents

These should exist once.

### `siteSettings`

Fields:

- `siteTitle`
- `siteDescription`
- `defaultSeoTitle`
- `defaultSeoDescription`
- `logo`
- `navigationItems`
- `footerLinks`
- `socialLinks`
- `contactEmail`
- `primaryCta`
- `announcementBar`
- `defaultOgImage`

### `homePage`

Fields:

- `hero`
- `featuredDestinations`
- `valuePropositionSection`
- `journalPreview`
- `communityBlock`
- `testimonials`
- `emailSignupSection`
- `endOfPageCta`
- `seo`

### `aboutPage`

Fields:

- `hero`
- `intro`
- `mission`
- `values`
- `storySections`
- `teamTeaser`
- `cta`
- `seo`

### `workWithUsPage`

Fields:

- `hero`
- `introCopy`
- `partnershipsSection`
- `collaborationsSection`
- `creatorCommunitySection`
- `applicationCtaSection`
- `openRolesIntro`
- `seo`

### `faqPage`

Fields:

- `pageIntro`
- `faqGroups`
- `seo`

### `privacyPolicyPage`

Fields:

- `title`
- `body`
- `seo`

### `termsAndConditionsPage`

Fields:

- `title`
- `body`
- `seo`

### `communityLandingPage`

Fields:

- `hero`
- `intro`
- `featuredCommunityPosts`
- `submissionCtaCopy`
- `seo`

### `journalLandingPage`

Fields:

- `hero`
- `intro`
- `featuredEntries`
- `premiumSectionIntro`
- `freeSectionIntro`
- `seo`

### `destinationsLandingPage`

Fields:

- `hero`
- `intro`
- `featuredDestinations`
- `sectionCopy`
- `seo`

## Collection documents

### `destination`

Purpose:
Destination editorial page.

Fields:

- `title`
- `slug`
- `localizedTitle`
- `heroImage`
- `coverImage`
- `excerpt`
- `intro`
- `body`
- `gallery`
- `culturalHighlights`
- `travelTips`
- `halalFriendlyNotes`
- `bestTimeToVisit`
- `relatedJournals`
- `relatedCommunityPosts`
- `featured`
- `seo`

### `journalEntry`

Purpose:
Travel guide, premium guide, or editorial entry.

Fields:

- `title`
- `slug`
- `excerpt`
- `coverImage`
- `destination`
- `body`
- `entryType`
- `premium`
- `previewContent`
- `featured`
- `tags`
- `seo`

Allowed `entryType` values:

- `free_guide`
- `premium_guide`
- `editorial_story`

### `communityPost`

Purpose:
Approved and published community content only.

Fields:

- `title`
- `slug`
- `excerpt`
- `coverImage`
- `gallery`
- `body`
- `authorDisplayName`
- `authorImage`
- `destination`
- `featured`
- `submissionSourceId`
- `seo`

### `faqItem`

Purpose:
Reusable structured FAQs.

Fields:

- `question`
- `answer`
- `category`
- `sortOrder`
- `featured`

### `testimonial`

Purpose:
Reusable testimonials.

Fields:

- `name`
- `role`
- `quote`
- `image`
- `destination`
- `journalEntry`
- `featured`

## D1 operational data model

D1 is the source of truth for workflow and transactional records.

### `community_submission`

Stores raw community submissions before approval.

Suggested fields:

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

### `community_publication`

Tracks linkage between a submission and the published Sanity document.

Suggested fields:

- `id`
- `submission_id`
- `sanity_document_id`
- `published_at`

### `journal_purchase`

Tracks premium journal purchases.

Suggested fields:

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

Tracks secure premium access.

Suggested fields:

- `id`
- `purchase_id`
- `token`
- `expires_at`
- `last_used_at`
- `created_at`

### `contact_submission`

Suggested fields:

- `id`
- `name`
- `email`
- `subject`
- `message`
- `created_at`

### `work_with_us_application`

Suggested fields:

- `id`
- `name`
- `email`
- `type`
- `message`
- `links`
- `attachment_url`
- `created_at`

## Current implemented schema note

The current repo only implements the `homePage` Sanity document and a localized homepage fetch path. The models above are the intended full schema blueprint for expansion.

## Modeling rules

- keep public text editable through Sanity where practical
- keep raw submissions out of Sanity until approved
- keep payment state in Stripe and mirrored operationally in D1
- keep field names code-friendly and consistent
- keep SEO available on all major public content types
