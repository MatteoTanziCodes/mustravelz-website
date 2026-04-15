import "server-only";

import { fallbackHomePageContent } from "@/lib/content/fallback-home-page";
import type { HomePageContent } from "@/lib/content/types";
import type { SiteLocale } from "@/lib/i18n/config";
import { sanityClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { homePageQuery } from "@/lib/sanity/queries";

export async function getHomePageContent(locale: SiteLocale): Promise<HomePageContent> {
	if (!isSanityConfigured()) {
		return fallbackHomePageContent[locale];
	}

	try {
		const content = await sanityClient.fetch<HomePageContent | null>(homePageQuery, { locale });

		return content ?? fallbackHomePageContent[locale];
	} catch {
		return fallbackHomePageContent[locale];
	}
}
