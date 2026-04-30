import { healthRoute } from "./routes/health";
import {
	approveCommunitySubmissionRoute,
	createCommunitySubmissionRoute,
	listCommunitySubmissionsRoute,
	rejectCommunitySubmissionRoute,
} from "./routes/community-submissions";
import { createContactSubmissionRoute } from "./routes/contact";
import { createWorkWithUsApplicationRoute } from "./routes/work-with-us";
import { corsHeaders, preflightResponse } from "./lib/cors";
import { methodNotAllowed, notFound } from "./lib/http";
import type { Env } from "./types/env";

const worker: ExportedHandler<Env> = {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (request.method === "OPTIONS") {
			return preflightResponse();
		}

		let response: Response;

		if (url.pathname === "/health") {
			response = request.method === "GET" ? healthRoute(env) : methodNotAllowed(["GET"]);
		} else if (url.pathname === "/contact") {
			response = request.method === "POST" ? await createContactSubmissionRoute(request, env) : methodNotAllowed(["POST"]);
		} else if (url.pathname === "/work-with-us") {
			response = request.method === "POST" ? await createWorkWithUsApplicationRoute(request, env) : methodNotAllowed(["POST"]);
		} else if (url.pathname === "/community-submissions") {
			response = request.method === "POST" ? await createCommunitySubmissionRoute(request, env) : methodNotAllowed(["POST"]);
		} else if (url.pathname === "/admin/community-submissions") {
			response = request.method === "GET" ? await listCommunitySubmissionsRoute(request, env) : methodNotAllowed(["GET"]);
		} else {
			const adminActionMatch = url.pathname.match(/^\/admin\/community-submissions\/([^/]+)\/(approve|reject)$/);

			if (adminActionMatch) {
				const [, id, action] = adminActionMatch;
				if (request.method !== "POST") {
					response = methodNotAllowed(["POST"]);
				} else if (action === "approve") {
					response = await approveCommunitySubmissionRoute(request, env, id);
				} else {
					response = await rejectCommunitySubmissionRoute(request, env, id);
				}
			} else {
				response = notFound();
			}
		}

		const headers = new Headers(response.headers);
		for (const [key, value] of Object.entries(corsHeaders)) {
			headers.set(key, value);
		}

		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers,
		});
	},
};

export default worker;
