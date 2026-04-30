PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS contact_submission (
	id TEXT PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	subject TEXT,
	message TEXT NOT NULL,
	created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contact_submission_created_at
	ON contact_submission (created_at);

CREATE INDEX IF NOT EXISTS idx_contact_submission_email
	ON contact_submission (email);

CREATE TABLE IF NOT EXISTS work_with_us_application (
	id TEXT PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	type TEXT NOT NULL,
	message TEXT NOT NULL,
	links TEXT,
	attachment_url TEXT,
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	CHECK (links IS NULL OR json_valid(links))
);

CREATE INDEX IF NOT EXISTS idx_work_with_us_application_created_at
	ON work_with_us_application (created_at);

CREATE INDEX IF NOT EXISTS idx_work_with_us_application_type
	ON work_with_us_application (type);

CREATE TABLE IF NOT EXISTS community_submission (
	id TEXT PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	title TEXT NOT NULL,
	body TEXT NOT NULL,
	media_urls TEXT,
	destination_slug TEXT,
	status TEXT NOT NULL DEFAULT 'pending',
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	reviewed_at TEXT,
	reviewer_note TEXT,
	CHECK (status IN ('pending', 'approved', 'rejected')),
	CHECK (media_urls IS NULL OR json_valid(media_urls))
);

CREATE INDEX IF NOT EXISTS idx_community_submission_status
	ON community_submission (status);

CREATE INDEX IF NOT EXISTS idx_community_submission_created_at
	ON community_submission (created_at);

CREATE INDEX IF NOT EXISTS idx_community_submission_destination_slug
	ON community_submission (destination_slug);

CREATE TABLE IF NOT EXISTS community_publication (
	id TEXT PRIMARY KEY,
	submission_id TEXT NOT NULL,
	sanity_document_id TEXT NOT NULL,
	published_at TEXT NOT NULL DEFAULT (datetime('now')),
	FOREIGN KEY (submission_id) REFERENCES community_submission(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_community_publication_submission_id
	ON community_publication (submission_id);

CREATE UNIQUE INDEX IF NOT EXISTS idx_community_publication_sanity_document_id
	ON community_publication (sanity_document_id);

CREATE TABLE IF NOT EXISTS journal_purchase (
	id TEXT PRIMARY KEY,
	email TEXT NOT NULL,
	journal_slug TEXT NOT NULL,
	stripe_checkout_session_id TEXT NOT NULL,
	stripe_payment_intent_id TEXT,
	status TEXT NOT NULL DEFAULT 'pending',
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	CHECK (status IN ('pending', 'paid', 'refunded', 'expired'))
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_journal_purchase_checkout_session_id
	ON journal_purchase (stripe_checkout_session_id);

CREATE INDEX IF NOT EXISTS idx_journal_purchase_email
	ON journal_purchase (email);

CREATE INDEX IF NOT EXISTS idx_journal_purchase_journal_slug
	ON journal_purchase (journal_slug);

CREATE INDEX IF NOT EXISTS idx_journal_purchase_status
	ON journal_purchase (status);

CREATE TABLE IF NOT EXISTS paywall_access_token (
	id TEXT PRIMARY KEY,
	purchase_id TEXT NOT NULL,
	token_hash TEXT NOT NULL,
	expires_at TEXT NOT NULL,
	last_used_at TEXT,
	created_at TEXT NOT NULL DEFAULT (datetime('now')),
	FOREIGN KEY (purchase_id) REFERENCES journal_purchase(id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_paywall_access_token_token_hash
	ON paywall_access_token (token_hash);

CREATE INDEX IF NOT EXISTS idx_paywall_access_token_purchase_id
	ON paywall_access_token (purchase_id);

CREATE INDEX IF NOT EXISTS idx_paywall_access_token_expires_at
	ON paywall_access_token (expires_at);
