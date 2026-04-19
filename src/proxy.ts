import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export function proxy(_request: NextRequest) {
	return NextResponse.next();
}
