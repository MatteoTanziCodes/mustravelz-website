import type { Metadata } from "next";
import { Alex_Brush, Cormorant_Garamond, IBM_Plex_Mono, Marcellus, Noto_Naskh_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import { getLocaleDirection, resolveLocale } from "@/lib/i18n/config";

const editorialFont = Cormorant_Garamond({
	variable: "--font-editorial",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const annotationFont = IBM_Plex_Mono({
	variable: "--font-annotation",
	subsets: ["latin"],
	weight: ["400", "500"],
});

const interfaceFont = Marcellus({
	variable: "--font-interface",
	subsets: ["latin"],
	weight: "400",
});

const scriptFont = Alex_Brush({
	variable: "--font-script",
	subsets: ["latin"],
	weight: "400",
});

const arabicFont = Noto_Naskh_Arabic({
	variable: "--font-arabic",
	subsets: ["arabic"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "Mustravelz",
		template: "%s | Mustravelz",
	},
	description: "Travel commerce and editorial content shaped like a tactile journal.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headerStore = await headers();
	const locale = resolveLocale(headerStore.get("x-mustravelz-locale"));
	const direction = getLocaleDirection(locale);

	return (
		<html
			lang={locale}
			dir={direction}
			className={`${editorialFont.variable} ${annotationFont.variable} ${interfaceFont.variable} ${scriptFont.variable} ${arabicFont.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
