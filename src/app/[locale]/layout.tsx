import { supportedLocales } from "@/lib/i18n/config";

export function generateStaticParams() {
	return supportedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
