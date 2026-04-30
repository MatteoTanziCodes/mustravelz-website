import { ValidationError } from "./validation";

export function jsonResponse(body: unknown, init: ResponseInit = {}): Response {
	return Response.json(body, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...init.headers,
		},
	});
}

export function created(body: unknown): Response {
	return jsonResponse(body, { status: 201 });
}

export function badRequest(message: string, details?: unknown): Response {
	return jsonResponse(
		{
			error: "bad_request",
			message,
			details,
		},
		{ status: 400 },
	);
}

export function notFound(): Response {
	return jsonResponse(
		{
			error: "not_found",
		},
		{ status: 404 },
	);
}

export function methodNotAllowed(allowedMethods: string[]): Response {
	return jsonResponse(
		{
			error: "method_not_allowed",
			allowedMethods,
		},
		{
			status: 405,
			headers: {
				Allow: allowedMethods.join(", "),
			},
		},
	);
}

export function handleRouteError(error: unknown): Response {
	if (error instanceof SyntaxError) {
		return badRequest("Request body must be valid JSON.");
	}

	if (error instanceof ValidationError) {
		return badRequest(error.message, error.details);
	}

	console.error(error);

	return jsonResponse(
		{
			error: "internal_server_error",
		},
		{ status: 500 },
	);
}
