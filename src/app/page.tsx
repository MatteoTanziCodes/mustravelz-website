import type { Metadata } from "next";
import Link from "next/link";

import { localeLabels, supportedLocales, type SiteLocale } from "@/lib/i18n/config";

const localeLandingCopy: Record<
	SiteLocale,
	{
		description: string;
		cta: string;
	}
> = {
	en: {
		description: "Curated group departures, field notes, and a travel journal experience built for young Muslim travelers.",
		cta: "Open English site",
	},
	fr: {
		description: "Des departs choisis, des notes de terrain et une experience editoriale pensee comme un carnet de voyage.",
		cta: "Ouvrir la version francaise",
	},
	ar: {
		description: "رحلات جماعية منسقة ومذكرات طريق وتجربة تحريرية بطابع دفتر السفر.",
		cta: "افتح النسخة العربية",
	},
};

export function generateMetadata(): Metadata {
	return {
		title: "Mustravelz",
		description: "A bilingual and Arabic-first travel landing page for curated group trips and editorial storytelling.",
	};
}

export default function IndexPage() {
	return (
		<main className="page-shell px-3 py-4 sm:px-5 lg:px-8">
			<div className="paper-panel texture-stack mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
				<div className="texture-layer texture-layer--parchment" />
				<div className="texture-layer texture-layer--paper-overlay texture-opacity-soft" />
				<div
					className="texture-layer texture-layer--pattern texture-repeat texture-opacity-soft"
					style={{ backgroundSize: "18px 18px" }}
				/>

				<div className="texture-content relative">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-3xl">
							<p className="smallcaps text-[var(--accent-strong)]">Editorial travel platform</p>
							<h1 className="hero-title mt-4 text-[3.25rem] leading-[0.92] text-[var(--ink)] sm:text-[4.8rem] lg:text-[6.6rem]">
								Mustravelz
							</h1>
							<p className="section-note mt-2 text-[1.8rem] sm:text-[2.3rem] lg:text-[2.8rem]">
								Travel. Explore. Connect.
							</p>
							<p className="interface-text mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--ink-soft)] sm:text-[1.1rem]">
								A multilingual front door for curated group departures, destination journals, and Muslim-friendly
								travel experiences shaped like a tactile editorial product instead of a generic booking funnel.
							</p>
						</div>

						<div className="flex flex-col gap-3 self-start lg:max-w-xs lg:items-end">
							<div className="ticket-button-light rounded-[1.35rem] px-4 py-3 text-left text-[var(--ink-soft)]">
								<p className="smallcaps !text-[0.6rem] text-[var(--accent-strong)]">Now live</p>
								<p className="interface-text mt-2 text-[1rem] font-semibold">mustravelz.com</p>
							</div>
							<Link
								href="/en"
								className="ticket-button interface-text inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-[1rem] font-semibold text-[#fff6df]"
							>
								Enter the English experience
							</Link>
						</div>
					</div>

					<div className="my-7">
						<div className="section-divider" />
					</div>

					<section className="grid gap-4 lg:grid-cols-3">
						{supportedLocales.map((locale) => {
							const copy = localeLandingCopy[locale];

							return (
								<Link
									key={locale}
									href={`/${locale}`}
									className="ornate-panel texture-stack rounded-[1.75rem] px-5 pb-5 pt-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(78,45,12,0.16)] sm:px-6"
								>
									<div className="texture-layer texture-layer--paper-overlay texture-opacity-soft" />
									<div className="texture-content">
										<p className="smallcaps text-[var(--accent-strong)]">{locale.toUpperCase()}</p>
										<h2 className="mt-3 text-[2rem] text-[var(--ink)] sm:text-[2.35rem]">{localeLabels[locale]}</h2>
										<p className="interface-text mt-3 min-h-24 text-[0.98rem] leading-7 text-[var(--ink-soft)]">
											{copy.description}
										</p>
										<div className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[var(--accent-strong)]">
											<span>{copy.cta}</span>
											<span aria-hidden>→</span>
										</div>
									</div>
								</Link>
							);
						})}
					</section>

					<section className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
						<div className="footer-paper rounded-[1.7rem] px-5 py-5 sm:px-6">
							<p className="smallcaps text-[var(--accent-strong)]">What this launch delivers</p>
							<div className="interface-text mt-4 grid gap-3 text-[1rem] leading-7 text-[var(--ink-soft)]">
								<p>Custom domain wiring through Cloudflare Workers.</p>
								<p>Multilingual entry into the existing English, French, and Arabic journeys.</p>
								<p>A brand-forward landing page at the root hostname instead of an immediate locale redirect.</p>
							</div>
						</div>

						<div className="travel-board rounded-[1.7rem] p-5 sm:p-6">
							<p className="smallcaps text-[rgba(255,241,219,0.78)]">Launch posture</p>
							<p className="mt-4 text-[2rem] leading-[1.05] text-[#fff6df]">
								Lead with the brand at the apex domain, then let visitors choose their language.
							</p>
							<p className="interface-text mt-4 text-[0.98rem] leading-7 text-[rgba(255,241,219,0.84)]">
								The homepage now works as a deliberate entry point for storytelling, trips, and future product expansion on
								the production hostname.
							</p>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
