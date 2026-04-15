export const supportedLocales = ["en", "fr", "ar"] as const;

export type SiteLocale = (typeof supportedLocales)[number];

export const defaultLocale: SiteLocale = "en";

const rtlLocales = new Set<SiteLocale>(["ar"]);

export function isSupportedLocale(value: string): value is SiteLocale {
	return supportedLocales.includes(value as SiteLocale);
}

export function resolveLocale(value: string | null | undefined): SiteLocale {
	if (value && isSupportedLocale(value)) {
		return value;
	}

	return defaultLocale;
}

export function getLocaleDirection(locale: SiteLocale): "ltr" | "rtl" {
	return rtlLocales.has(locale) ? "rtl" : "ltr";
}

export const localeLabels: Record<SiteLocale, string> = {
	en: "English",
	fr: "Francais",
	ar: "العربية",
};
