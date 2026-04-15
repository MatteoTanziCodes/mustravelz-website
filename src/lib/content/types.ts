import type { SiteLocale } from "@/lib/i18n/config";

export interface CtaLink {
	label: string;
	href: string;
}

export type NavLink = CtaLink;

export interface HeroStat {
	label: string;
	value: string;
}

export interface NotebookCard {
	kicker: string;
	title: string;
	description: string;
}

export interface CollectionCard {
	eyebrow: string;
	title: string;
	description: string;
}

export interface StoryCard {
	access: string;
	title: string;
	description: string;
}

export interface SubmissionStep {
	title: string;
	description: string;
}

export interface HomePageContent {
	locale: SiteLocale;
	seoTitle: string;
	seoDescription: string;
	announcement: string;
	nav: NavLink[];
	hero: {
		eyebrow: string;
		title: string;
		summary: string;
		primaryCta: CtaLink;
		secondaryCta: CtaLink;
		stats: HeroStat[];
	};
	notebookCards: NotebookCard[];
	collections: {
		eyebrow: string;
		title: string;
		description: string;
		cards: CollectionCard[];
	};
	journal: {
		eyebrow: string;
		title: string;
		description: string;
		stories: StoryCard[];
	};
	community: {
		eyebrow: string;
		title: string;
		description: string;
		approvalNote: string;
		steps: SubmissionStep[];
		cta: CtaLink;
	};
	footerNote: string;
}
