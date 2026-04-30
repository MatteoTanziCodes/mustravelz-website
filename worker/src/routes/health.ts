import type { Env } from "../types/env";

export function healthRoute(env: Env): Response {
	return Response.json({
		ok: true,
		service: "mustravelz-api",
		environment: env.ENVIRONMENT,
	});
}
