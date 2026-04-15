import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getHomePageContent } from "@/lib/content/home-page";
import { isSupportedLocale, supportedLocales } from "@/lib/i18n/config";

export async function generateStaticParams() {
	return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	if (!isSupportedLocale(locale)) {
		return {};
	}

	const content = await getHomePageContent(locale);

	return {
		title: content.seoTitle,
		description: content.seoDescription,
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!isSupportedLocale(locale)) {
		notFound();
	}

	return children;
}
