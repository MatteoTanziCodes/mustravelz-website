export class ValidationError extends Error {
	constructor(
		message: string,
		readonly details?: unknown,
	) {
		super(message);
		this.name = "ValidationError";
	}
}

export function assertObject(value: unknown): Record<string, unknown> {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new ValidationError("Request body must be a JSON object.");
	}

	return value as Record<string, unknown>;
}

export function requiredString(body: Record<string, unknown>, field: string, maxLength: number): string {
	const value = body[field];

	if (typeof value !== "string" || value.trim().length === 0) {
		throw new ValidationError(`Field '${field}' is required.`);
	}

	const trimmed = value.trim();

	if (trimmed.length > maxLength) {
		throw new ValidationError(`Field '${field}' must be ${maxLength} characters or fewer.`);
	}

	return trimmed;
}

export function optionalString(body: Record<string, unknown>, field: string, maxLength: number): string | null {
	const value = body[field];

	if (value === undefined || value === null || value === "") {
		return null;
	}

	if (typeof value !== "string") {
		throw new ValidationError(`Field '${field}' must be a string.`);
	}

	const trimmed = value.trim();

	if (trimmed.length > maxLength) {
		throw new ValidationError(`Field '${field}' must be ${maxLength} characters or fewer.`);
	}

	return trimmed.length > 0 ? trimmed : null;
}

export function optionalStringArray(body: Record<string, unknown>, field: string, maxItems: number): string[] | null {
	const value = body[field];

	if (value === undefined || value === null) {
		return null;
	}

	if (!Array.isArray(value)) {
		throw new ValidationError(`Field '${field}' must be an array.`);
	}

	if (value.length > maxItems) {
		throw new ValidationError(`Field '${field}' must contain ${maxItems} items or fewer.`);
	}

	return value.map((item, index) => {
		if (typeof item !== "string" || item.trim().length === 0) {
			throw new ValidationError(`Field '${field}[${index}]' must be a non-empty string.`);
		}

		return item.trim();
	});
}

export function validateEmail(email: string): string {
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		throw new ValidationError("Field 'email' must be a valid email address.");
	}

	return email.toLowerCase();
}
