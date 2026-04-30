import { createId } from "../lib/ids";
import { created, handleRouteError } from "../lib/http";
import { assertObject, optionalString, requiredString, validateEmail } from "../lib/validation";
import type { Env } from "../types/env";

export async function createContactSubmissionRoute(request: Request, env: Env): Promise<Response> {
	try {
		const body = assertObject(await request.json());
		const id = createId("contact");
		const name = requiredString(body, "name", 120);
		const email = validateEmail(requiredString(body, "email", 254));
		const subject = optionalString(body, "subject", 160);
		const message = requiredString(body, "message", 5000);

		await env.DB.prepare(
			`INSERT INTO contact_submission (id, name, email, subject, message)
			 VALUES (?, ?, ?, ?, ?)`,
		)
			.bind(id, name, email, subject, message)
			.run();

		return created({
			ok: true,
			submissionId: id,
		});
	} catch (error) {
		return handleRouteError(error);
	}
}
