import Link from "next/link";

import { LocaleSwitcher } from "@/components/home/locale-switcher";
import { Reveal } from "@/components/home/reveal";
import {
	ArchFrame,
	CompassMotif,
	CornerOrnament,
	LanternIcon,
	RouteLine,
	ScrapbookTape,
	SectionDivider,
} from "@/components/ui/decor";
import { getHomePageContent } from "@/lib/content/home-page";
import { getLocaleDirection, isSupportedLocale, type SiteLocale } from "@/lib/i18n/config";

const heroPhotos = [
	"https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
];

const tripPhotos = [
	"https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
	"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
];

const tripPrices = ["$1290", "$1490", "$1390", "$1190"];

const journalPhotos = [
	"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=80",
	"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
	"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
	"https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80",
];

function SearchIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
			<circle cx="11" cy="11" r="6.5" />
			<path d="m16 16 4 4" />
		</svg>
	);
}

function BrandSeal({ locale }: Readonly<{ locale: SiteLocale }>) {
	const isRtl = getLocaleDirection(locale) === "rtl";

	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
			<path d={isRtl ? "M6 6c2.3 0 4.1 1.4 5 3.6H18" : "M18 6c-2.3 0-4.1 1.4-5 3.6H6"} />
			<path d={isRtl ? "M6 18c2.3 0 4.1-1.4 5-3.6H18" : "M18 18c-2.3 0-4.1-1.4-5-3.6H6"} />
			<path d="M8.5 12h7" />
		</svg>
	);
}

function FeatureIcon({ index }: Readonly<{ index: number }>) {
	if (index === 0) {
		return (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
				<path d="M14.5 3.5a6.5 6.5 0 1 0 0 13a7 7 0 1 1 0-13Z" />
				<path d="M15 8.5h5M17.5 6v5" />
			</svg>
		);
	}

	if (index === 1) {
		return (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
				<path d="M7.5 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6ZM16.5 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z" />
				<path d="M3.5 18.5a4 4 0 0 1 8 0M13.5 18.5a3.5 3.5 0 0 1 7 0" />
			</svg>
		);
	}

	if (index === 2) {
		return (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
				<path d="M12 20s6-4.4 6-10a6 6 0 1 0-12 0c0 5.6 6 10 6 10Z" />
				<circle cx="12" cy="10" r="2" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
			<path d="M12 19c4-2.6 6-6 6-10a6 6 0 1 0-12 0c0 4 2 7.4 6 10Z" />
			<path d="M12 7v6M9 10h6" />
		</svg>
	);
}

function getLocalizedUi(locale: SiteLocale) {
	if (locale === "fr") {
		return {
			login: "Connexion",
			join: "Rejoindre",
			watch: "Voir la video",
			upcomingTrips: "Voyages a venir",
			whyTitle: "Pourquoi voyager avec nous",
			journalTitle: "Depuis notre journal de voyage",
			updatesTitle: "Recevoir les prochaines dates",
			subscribe: "Souscrire",
			emailPlaceholder: "Votre email",
			smallGroup: "Petit groupe",
		};
	}

	if (locale === "ar") {
		return {
			login: "دخول",
			join: "انضم",
			watch: "شاهد الفيديو",
			upcomingTrips: "الرحلات القادمة",
			whyTitle: "لماذا تسافر معنا",
			journalTitle: "من مجلة السفر",
			updatesTitle: "احصل على تحديثات الرحلات",
			subscribe: "اشترك",
			emailPlaceholder: "بريدك الالكتروني",
			smallGroup: "مجموعة صغيرة",
		};
	}

	return {
		login: "Log in",
		join: "Join the Journey",
		watch: "Watch Video",
		upcomingTrips: "Upcoming Trips",
		whyTitle: "Why Travel With Us",
		journalTitle: "From Our Travel Journal",
		updatesTitle: "Get Trip updates",
		subscribe: "Subscribe",
		emailPlaceholder: "Your email",
		smallGroup: "Small group",
	};
}

export default async function LocaleHomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!isSupportedLocale(locale)) {
		return null;
	}

	const content = await getHomePageContent(locale);
	const ui = getLocalizedUi(locale);
	const features = content.notebookCards.slice(0, 4);

	return (
		<div className="page-shell px-2 py-2 sm:px-4 sm:py-4 lg:px-8">
			<div className="travel-board texture-stack mx-auto max-w-[96rem] overflow-hidden">
				<div className="texture-layer texture-layer--parchment" />
				<div className="texture-layer texture-layer--paper-overlay texture-opacity-soft" />
				<div
					className="texture-layer texture-layer--pattern texture-repeat texture-opacity-soft"
					style={{ backgroundSize: "18px 18px" }}
				/>
				<div className="texture-content">
					<div className="ornate-strip h-6 sm:h-8" />
					<div className="board-decor">
						<LanternIcon className="lantern lantern-top-left" size={88} tone="gold" />
						<LanternIcon className="lantern lantern-top-right" size={88} tone="gold" />
						<LanternIcon className="lantern lantern-bottom-middle" size={88} tone="gold" />
						<LanternIcon className="lantern lantern-bottom-right" size={88} tone="gold" />
					</div>

					<div className="px-4 pb-6 pt-3 sm:px-8 sm:pb-8 lg:px-10">
					<header className="interface-text relative z-10 flex flex-col gap-5 border-b border-[var(--line)] pb-5 pt-1 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(111,67,21,0.24)] bg-[rgba(255,248,234,0.75)] text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
								<BrandSeal locale={locale} />
							</div>
							<div>
								<p className="text-[2.35rem] font-semibold tracking-[-0.05em] sm:text-[2.8rem] lg:text-[3.2rem]">Mustravelz</p>
								<p className="smallcaps mt-0.5 !text-[0.58rem] text-[var(--ink-soft)]">Group travel</p>
							</div>
						</div>

						<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
							<nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] font-semibold text-[var(--ink-soft)] sm:gap-x-5 sm:text-[1rem] lg:gap-x-7 lg:text-[1.12rem]">
								{content.nav.map((link) => (
									<a key={link.label} href={link.href} className="transition hover:text-[var(--accent-strong)]">
										{link.label}
									</a>
								))}
							</nav>

							<div className="flex flex-wrap items-center gap-3 text-[var(--ink-soft)] sm:gap-4">
								<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,247,232,0.8)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
									<SearchIcon />
								</button>
								<Link href="#community" className="text-[0.95rem] font-semibold hover:text-[var(--accent-strong)] sm:text-[1rem]">
									{ui.login}
								</Link>
								<LocaleSwitcher currentLocale={locale} />
								<Link
									href={content.hero.primaryCta.href}
									className="ticket-button rounded-full px-5 py-2.5 text-[0.92rem] font-semibold text-[#fff6df] transition hover:brightness-110 sm:px-7 sm:py-3 sm:text-[1.05rem]"
								>
									{ui.join}
								</Link>
							</div>
						</div>
					</header>

					<main className="relative pb-4 pt-5 sm:pt-8">
						<section className="hero-stage grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
							<Reveal className="relative z-10 pt-1 sm:pt-4">
								<CornerOrnament placement="top-left" size={52} tone="gold" className="-left-3 -top-2 opacity-35" />
								<p className="smallcaps text-[var(--accent-strong)]">{content.announcement}</p>
								<h1 className="script-title hero-title mt-5 max-w-[52rem] text-[3.4rem] text-[var(--ink)] sm:text-[5rem] lg:text-[8.2rem]">
									{content.hero.title}
								</h1>
								<p className="section-note hero-subtitle mt-2 text-[2rem] sm:text-[3rem] lg:text-[4rem]">{content.hero.eyebrow}</p>
								<p className="interface-text mt-5 max-w-2xl text-[0.98rem] leading-8 text-[var(--ink-soft)] sm:text-[1.12rem] sm:leading-9 lg:text-[1.26rem]">
									{content.hero.summary}
								</p>

								<div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
									<a
										href={content.hero.primaryCta.href}
										className="ticket-button interface-text rounded-full px-5 py-3 text-[0.95rem] font-bold text-[#fff6df] transition hover:brightness-110 sm:px-8 sm:py-4 sm:text-[1.14rem]"
									>
										{content.hero.primaryCta.label}
									</a>
									<Link
										href={content.hero.secondaryCta.href}
										className="ticket-button-light interface-text rounded-full px-5 py-3 text-[0.95rem] font-semibold text-[var(--ink-soft)] transition hover:border-[rgba(111,67,21,0.52)] sm:px-8 sm:py-4 sm:text-[1.12rem]"
									>
										{ui.watch}
									</Link>
								</div>
							</Reveal>

							<Reveal className="relative lg:min-h-[37rem]" delay={0.08}>
								<div className="relative pb-8 pt-2 lg:hidden">
									<div
										className="map-scrap texture-surface texture-surface-map absolute inset-[10%_3%_8%_8%] rotate-[-3deg]"
										style={{
											backgroundImage:
												"linear-gradient(rgba(255,247,232,0.24), rgba(255,247,232,0.12)), url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1200&q=80)",
										}}
									/>
									<RouteLine className="absolute right-[6%] top-[12%] h-28 w-32 rotate-[8deg] opacity-30 sm:h-36 sm:w-44" tone="brown" />
									<div className="relative z-10 grid grid-cols-2 items-start gap-4 sm:gap-5">
										<div className="postcard w-[88%] rotate-[-8deg] rounded-[0.5rem] p-3 sm:w-[82%] sm:p-4">
											<div className="photo-fill relative aspect-[0.9] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[0]})` }} />
										</div>
										<div className="postcard ml-auto mt-6 w-[88%] rotate-[7deg] rounded-[0.5rem] p-3 sm:mt-8 sm:w-[82%] sm:p-4">
											<div className="photo-fill relative aspect-[0.88] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[1]})` }} />
										</div>
										<div className="postcard col-span-2 mx-auto -mt-4 w-[58%] rotate-[4deg] rounded-[0.5rem] p-3 sm:-mt-6 sm:w-[48%] sm:p-4">
											<div className="photo-fill relative aspect-[1.02] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[2]})` }} />
										</div>
									</div>
									<div className="relative z-20 mt-2 flex items-center gap-3 pl-4 sm:pl-10">
										<div className="compass-seal">
											<div className="compass-seal-inner">
												<CompassMotif size={52} tone="brown" />
											</div>
										</div>
										<div className="section-note rounded-[0.7rem] bg-[rgba(245,224,186,0.9)] px-3 py-1.5 text-[1.8rem] shadow-[0_8px_18px_rgba(78,45,12,0.14)] sm:px-4 sm:py-2 sm:text-[2.35rem]">
											Next stop?
										</div>
									</div>
									<ScrapbookTape className="absolute left-[16%] top-[4%] z-30 -rotate-[6deg] opacity-65" size={72} tone="cream" />
									<ScrapbookTape className="absolute right-[19%] top-[18%] z-30 rotate-[8deg] opacity-60" size={68} tone="cream" />
								</div>

								<div className="relative hidden min-h-[37rem] lg:block">
									<div
										className="map-scrap texture-surface texture-surface-map absolute inset-[6%_1%_4%_8%] rotate-[-3deg]"
										style={{
											backgroundImage:
												"linear-gradient(rgba(255,247,232,0.24), rgba(255,247,232,0.12)), url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1200&q=80)",
										}}
									/>
									<div className="postcard absolute left-[6%] top-[2%] z-10 w-[39%] rotate-[-7deg] rounded-[0.5rem] p-4">
										<div className="photo-fill relative aspect-[0.9] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[0]})` }} />
									</div>
									<div className="postcard absolute right-[0%] top-[9%] z-10 w-[38%] rotate-[7deg] rounded-[0.5rem] p-4">
										<div className="photo-fill relative aspect-[0.88] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[1]})` }} />
									</div>
									<div className="postcard absolute left-[29%] top-[35%] z-20 w-[43%] rotate-[5deg] rounded-[0.5rem] p-4">
										<div className="photo-fill relative aspect-[1.02] rounded-[0.18rem]" style={{ backgroundImage: `url(${heroPhotos[2]})` }} />
									</div>
									<div className="absolute left-[2%] top-[39%] z-0 h-56 w-56 rounded-full border-2 border-dashed border-[rgba(150,95,34,0.34)] opacity-60 [clip-path:inset(0_44%_40%_0)]" />
									<div className="compass-seal absolute bottom-[10%] left-[17%] z-30">
										<div className="compass-seal-inner">
											<CompassMotif size={64} tone="brown" />
										</div>
									</div>
									<div className="section-note absolute bottom-[20%] left-[15%] z-30 rounded-[0.7rem] bg-[rgba(245,224,186,0.9)] px-4 py-2 text-[2.6rem] shadow-[0_8px_18px_rgba(78,45,12,0.14)]">
										Next stop?
									</div>
									<RouteLine className="absolute right-[8%] top-[13%] h-[13rem] w-[15rem] rotate-[8deg] opacity-40" tone="brown" />
									<ScrapbookTape className="absolute left-[35%] top-[1.5%] z-30 -rotate-[6deg] opacity-65" size={82} tone="cream" />
									<ScrapbookTape className="absolute right-[16%] top-[13%] z-30 rotate-[8deg] opacity-60" size={78} tone="cream" />
								</div>
							</Reveal>
						</section>

						<div className="my-6 px-1">
							<SectionDivider className="h-6 w-full" tone="gold" />
						</div>

						<section className="grid gap-8 xl:grid-cols-[1.22fr_0.78fr] xl:items-start">
							<Reveal id="shop">
								<div className="relative">
									<CornerOrnament placement="top-left" size={42} tone="gold" className="-left-2 -top-2 opacity-35" />
									<h2 className="serif-section-title">{ui.upcomingTrips}</h2>
								</div>
								<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
									{content.collections.cards.slice(0, 4).map((card, index) => (
										<div key={card.title} className="trip-card texture-surface texture-surface-card rounded-[1.45rem]">
											<div className="photo-fill relative h-[18.5rem]" style={{ backgroundImage: `url(${tripPhotos[index]})` }} />
											<div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
												<h3 className="text-[2.7rem] leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.28)]">{card.title}</h3>
												<p className="interface-text mt-2 text-[1rem] font-semibold uppercase tracking-[0.05em] text-[rgba(255,241,219,0.98)]">
													{card.eyebrow}
												</p>
												<p className="interface-text mt-1 text-[1rem] font-semibold uppercase tracking-[0.05em] text-[rgba(255,241,219,0.95)]">
													{card.description}
												</p>
												<div className="mt-4 flex items-center justify-between gap-3">
													<span className="interface-text text-[0.92rem] font-semibold uppercase tracking-[0.08em] text-[rgba(255,241,219,0.9)]">
														{ui.smallGroup}
													</span>
													<span className="trip-pill interface-text rounded-full px-4 py-2 text-[1rem] font-bold text-[var(--ink)]">
														From {tripPrices[index]}
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							</Reveal>

							<Reveal id="community" className="ornate-panel texture-stack px-5 pb-5 pt-14 sm:px-8 sm:pb-6 sm:pt-16">
								<div className="texture-layer texture-layer--paper-overlay texture-opacity-soft" />
								<div className="ornate-panel-cap" />
								<ArchFrame className="ornate-panel-inner bg-[rgba(255,252,247,0.78)]" tone="gold">
									<h2 className="serif-section-title !text-[2.2rem] !leading-[1.02] text-center">{ui.whyTitle}</h2>
									<div className="mt-7 grid gap-5">
										{features.map((feature, index) => (
											<div key={feature.title} className="feature-row">
												<div className="feature-badge text-[var(--accent-strong)]">
													<FeatureIcon index={index} />
												</div>
												<p className="interface-text text-[1.22rem] font-semibold text-[var(--ink)]">{feature.title}</p>
											</div>
										))}
									</div>
								</ArchFrame>
							</Reveal>
						</section>

						<div className="my-6 px-1">
							<SectionDivider className="h-6 w-full" tone="gold" />
						</div>

						<section className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
							<Reveal id="journal">
								<div className="relative">
									<CornerOrnament placement="top-left" size={42} tone="gold" className="-left-2 -top-2 opacity-35" />
									<h2 className="serif-section-title">{ui.journalTitle}</h2>
								</div>
								<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
									{journalPhotos.map((photo) => (
										<div key={photo} className="journal-thumb texture-surface texture-surface-card rounded-[1.2rem] p-2">
											<div className="photo-fill relative aspect-[1.12] rounded-[0.85rem]" style={{ backgroundImage: `url(${photo})` }} />
										</div>
									))}
								</div>
							</Reveal>

							<Reveal className="footer-paper texture-stack px-5 pb-5 pt-5 sm:px-8">
								<div className="texture-layer texture-layer--paper-overlay texture-opacity-soft" />
								<div className="texture-layer texture-layer--pattern texture-repeat texture-opacity-soft" style={{ backgroundSize: "16px 16px" }} />
								<h2 className="serif-section-title !text-[2.25rem]">{ui.updatesTitle}</h2>
								<p className="interface-text mt-3 max-w-xl text-[1rem] leading-8 text-[var(--ink-soft)]">{content.footerNote}</p>
								<div className="mt-5 flex flex-col gap-3 sm:flex-row">
									<input
										type="email"
										placeholder={ui.emailPlaceholder}
										className="interface-text h-14 flex-1 rounded-full border border-[rgba(108,66,22,0.2)] bg-[rgba(255,250,241,0.92)] px-6 text-[1.05rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]/70"
									/>
									<button className="ticket-button interface-text h-14 rounded-full px-8 text-[1.08rem] font-semibold text-[#fff6df]">
										{ui.subscribe}
									</button>
								</div>
								<RouteLine className="absolute bottom-3 right-8 hidden h-16 w-28 opacity-30 sm:block" tone="olive" />
								<div className="mt-6 flex flex-wrap items-center gap-3">
									<div className="social-chip">IG</div>
									<div className="social-chip">YT</div>
									<div className="social-chip">TT</div>
									<div className="social-chip">M</div>
								</div>
							</Reveal>
						</section>
					</main>
				</div>
			</div>
			</div>
		</div>
	);
}
