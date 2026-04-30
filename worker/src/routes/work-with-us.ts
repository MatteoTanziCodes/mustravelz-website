import { createId } from "../lib/ids";
import { created, handleRouteError } from "../lib/http";
import { assertObject, optionalString, optionalStringArray, requiredString, validateEmail } from "../lib/validation";
import type { Env } from "../types/env";

export async function createWorkWithUsApplicationRoute(request: Request, env: Env): Promise<Response> {
	try {
		const body = assertObject(await request.json());
		const id = createId("work");
		const name = requiredString(body, "name", 120);
		const email = validateEmail(requiredString(body, "email", 254));
		const type = requiredString(body, "type", 80);
		const message = requiredString(body, "message", 5000);
		const links = optionalStringArray(body, "links", 12);
		const attachmentUrl = optionalString(body, "attachmentUrl", 2000);

		await env.DB.prepare(
			`INSERT INTO work_with_us_application (id, name, email, type, message, links, attachment_url)
			 VALUES (?, ?, ?, ?, ?, ?, ?)`,
		)
			.bind(id, name, email, type, message, links ? JSON.stringify(links) : null, attachmentUrl)
			.run();

		return created({
			ok: true,
			applicationId: id,
		});
	} catch (error) {
		return handleRouteError(error);
	}
}
