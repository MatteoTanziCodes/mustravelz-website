import { createId } from "../lib/ids";
import { badRequest, created, handleRouteError, jsonResponse, notFound } from "../lib/http";
import { assertObject, optionalString, optionalStringArray, requiredString, validateEmail } from "../lib/validation";
import type { Env } from "../types/env";

type CommunityStatus = "pending" | "approved" | "rejected";

interface CommunitySubmissionRow {
	id: string;
	name: string;
	email: string;
	title: string;
	body: string;
	media_urls: string | null;
	destination_slug: string | null;
	status: CommunityStatus;
	created_at: string;
	reviewed_at: string | null;
	reviewer_note: string | null;
}

const validStatuses = new Set<CommunityStatus>(["pending", "approved", "rejected"]);

export async function createCommunitySubmissionRoute(request: Request, env: Env): Promise<Response> {
	try {
		const body = assertObject(await request.json());
		const id = createId("community");
		const name = requiredString(body, "name", 120);
		const email = validateEmail(requiredString(body, "email", 254));
		const title = requiredString(body, "title", 180);
		const submissionBody = requiredString(body, "body", 20000);
		const mediaUrls = optionalStringArray(body, "mediaUrls", 12);
		const destinationSlug = optionalString(body, "destinationSlug", 160);

		await env.DB.prepare(
			`INSERT INTO community_submission (id, name, email, title, body, media_urls, destination_slug)
			 VALUES (?, ?, ?, ?, ?, ?, ?)`,
		)
			.bind(id, name, email, title, submissionBody, mediaUrls ? JSON.stringify(mediaUrls) : null, destinationSlug)
			.run();

		return created({
			ok: true,
			submissionId: id,
			status: "pending",
		});
	} catch (error) {
		return handleRouteError(error);
	}
}

export async function listCommunitySubmissionsRoute(request: Request, env: Env): Promise<Response> {
	const url = new URL(request.url);
	const status = url.searchParams.get("status") as CommunityStatus | null;
	const limitParam = url.searchParams.get("limit");
	const limit = limitParam ? Number(limitParam) : 50;

	if (status && !validStatuses.has(status)) {
		return badRequest("Query parameter 'status' must be pending, approved, or rejected.");
	}

	if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
		return badRequest("Query parameter 'limit' must be an integer between 1 and 100.");
	}

	const query = status
		? env.DB.prepare(
				`SELECT id, name, email, title, body, media_urls, destination_slug, status, created_at, reviewed_at, reviewer_note
				 FROM community_submission
				 WHERE status = ?
				 ORDER BY created_at DESC
				 LIMIT ?`,
			).bind(status, limit)
		: env.DB.prepare(
				`SELECT id, name, email, title, body, media_urls, destination_slug, status, created_at, reviewed_at, reviewer_note
				 FROM community_submission
				 ORDER BY created_at DESC
				 LIMIT ?`,
			).bind(limit);

	const { results } = await query.all<CommunitySubmissionRow>();

	return jsonResponse({
		ok: true,
		submissions: results.map(serializeCommunitySubmission),
	});
}

export async function approveCommunitySubmissionRoute(request: Request, env: Env, id: string): Promise<Response> {
	return reviewCommunitySubmission(request, env, id, "approved");
}

export async function rejectCommunitySubmissionRoute(request: Request, env: Env, id: string): Promise<Response> {
	return reviewCommunitySubmission(request, env, id, "rejected");
}

async function reviewCommunitySubmission(
	request: Request,
	env: Env,
	id: string,
	status: Exclude<CommunityStatus, "pending">,
): Promise<Response> {
	try {
		const body = request.headers.get("Content-Type")?.includes("application/json")
			? assertObject(await request.json())
			: {};
		const reviewerNote = optionalString(body, "reviewerNote", 2000);
		const existing = await env.DB.prepare("SELECT id FROM community_submission WHERE id = ?").bind(id).first<{ id: string }>();

		if (!existing) {
			return notFound();
		}

		await env.DB.prepare(
			`UPDATE community_submission
			 SET status = ?, reviewed_at = datetime('now'), reviewer_note = ?
			 WHERE id = ?`,
		)
			.bind(status, reviewerNote, id)
			.run();

		return jsonResponse({
			ok: true,
			submissionId: id,
			status,
		});
	} catch (error) {
		return handleRouteError(error);
	}
}

function serializeCommunitySubmission(row: CommunitySubmissionRow) {
	return {
		id: row.id,
		name: row.name,
		email: row.email,
		title: row.title,
		body: row.body,
		mediaUrls: row.media_urls ? (JSON.parse(row.media_urls) as string[]) : [],
		destinationSlug: row.destination_slug,
		status: row.status,
		createdAt: row.created_at,
		reviewedAt: row.reviewed_at,
		reviewerNote: row.reviewer_note,
	};
}
