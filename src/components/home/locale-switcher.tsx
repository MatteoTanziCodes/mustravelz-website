import Link from "next/link";

import { supportedLocales, type SiteLocale } from "@/lib/i18n/config";

export function LocaleSwitcher({ currentLocale }: Readonly<{ currentLocale: SiteLocale }>) {
	return (
		<div className="interface-text flex flex-wrap items-center gap-2 text-[0.78rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
			{supportedLocales.map((locale) => {
				const isActive = locale === currentLocale;

				return (
					<Link
						key={locale}
						href={`/${locale}`}
						className={[
							"rounded-full px-2 py-1 transition",
							isActive
								? "bg-[rgba(255,244,223,0.9)] text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
								: "text-[var(--ink-soft)]/80 hover:text-[var(--accent-strong)]",
						].join(" ")}
					>
						{locale}
					</Link>
				);
			})}
		</div>
	);
}
