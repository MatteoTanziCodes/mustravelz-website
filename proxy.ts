import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, getLocaleDirection, isSupportedLocale, resolveLocale } from "@/lib/i18n/config";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.startsWith("/studio") ||
		PUBLIC_FILE_PATTERN.test(pathname)
	) {
		return NextResponse.next();
	}

	if (pathname === "/") {
		const requestHeaders = new Headers(request.headers);
		requestHeaders.set("x-mustravelz-locale", defaultLocale);
		requestHeaders.set("x-mustravelz-dir", getLocaleDirection(defaultLocale));

		return NextResponse.next({
			request: {
				headers: requestHeaders,
			},
		});
	}

	const [, localeSegment] = pathname.split("/");

	if (!isSupportedLocale(localeSegment)) {
		const redirectUrl = request.nextUrl.clone();
		const normalizedPath = pathname === "/" ? "" : pathname;
		redirectUrl.pathname = `/${defaultLocale}${normalizedPath}`;

		return NextResponse.redirect(redirectUrl);
	}

	const requestHeaders = new Headers(request.headers);
	const locale = resolveLocale(localeSegment);
	requestHeaders.set("x-mustravelz-locale", locale);
	requestHeaders.set("x-mustravelz-dir", getLocaleDirection(locale));

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
