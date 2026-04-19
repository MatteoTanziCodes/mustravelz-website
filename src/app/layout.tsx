import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Mustravelz — Coming Soon",
	description: "Curated group travel experiences for Muslim travelers. Coming soon.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={serif.variable}>
			<body>{children}</body>
		</html>
	);
}
