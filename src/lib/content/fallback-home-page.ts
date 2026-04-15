import type { HomePageContent } from "@/lib/content/types";
import type { SiteLocale } from "@/lib/i18n/config";

export const fallbackHomePageContent: Record<SiteLocale, HomePageContent> = {
	en: {
		locale: "en",
		seoTitle: "Mustravelz | Group Travel Journal",
		seoDescription:
			"Mustravelz is a scrapbook-inspired travel site for curated group adventures, journal stories, and community-led exploration.",
		announcement: "Issue 01 | Curated routes, field notes, and next departures",
		nav: [
			{ label: "Destinations", href: "#shop" },
			{ label: "Trips", href: "#shop" },
			{ label: "About", href: "#community" },
			{ label: "Journal", href: "#journal" },
			{ label: "Community", href: "#community" },
		],
		hero: {
			eyebrow: "Memories start here.",
			title: "Travel. Explore. Connect.",
			summary:
				"Curated group trips for young Muslim travelers looking for adventure, culture, and community, wrapped in a travel journal experience that feels tactile instead of transactional.",
			primaryCta: { label: "Explore trips", href: "#shop" },
			secondaryCta: { label: "Open studio", href: "/studio" },
			stats: [
				{ label: "Departures", value: "12" },
				{ label: "Group size", value: "16" },
				{ label: "Countries", value: "08" },
			],
		},
		notebookCards: [
			{
				kicker: "Promise",
				title: "Halal-friendly travel",
				description:
					"Trips, dining, and pacing are framed for travelers who want confidence before they book.",
			},
			{
				kicker: "Format",
				title: "Small groups (12-16)",
				description:
					"Keeping group sizes tight makes the travel product feel more personal and easier to manage operationally.",
			},
			{
				kicker: "Approach",
				title: "Local experiences",
				description:
					"Itineraries are shaped around context, neighborhood texture, and shared moments instead of checklist tourism.",
			},
			{
				kicker: "Community",
				title: "Built-in community",
				description:
					"The product is designed for shared travel, easier bonding, and a sense of belonging before and during the trip.",
			},
		],
		collections: {
			eyebrow: "Upcoming trips",
			title: "Next departures",
			description:
				"Featured departures can later be mapped directly to Stripe products and D1 operational records without changing the front-end presentation.",
			cards: [
				{
					eyebrow: "Oct 12 - Oct 20",
					title: "Morocco",
					description: "8 days | 14 spots left",
				},
				{
					eyebrow: "Nov 05 - Nov 14",
					title: "Turkiye",
					description: "10 days | 8 spots left",
				},
				{
					eyebrow: "Dec 03 - Dec 11",
					title: "Bali",
					description: "9 days | 12 spots left",
				},
				{
					eyebrow: "Jan 08 - Jan 16",
					title: "Uzbekistan",
					description: "9 days | 10 spots left",
				},
			],
		},
		journal: {
			eyebrow: "From our journal",
			title: "Field notes and destination dispatches.",
			description:
				"Free stories and future premium guides can share the same visual language while still supporting a paywalled editorial model.",
			stories: [
				{
					access: "Free",
					title: "Where to eat after sunset in Marrakech",
					description: "Street-level notes, courtyards, and the slower corners worth lingering in.",
				},
				{
					access: "Premium",
					title: "Istanbul guide by district, prayer times, and pacing",
					description: "A richer members guide built for practical planning and deeper context.",
				},
			],
		},
		community: {
			eyebrow: "Community Desk",
			title: "Stories arrive as drafts, never instant publishing.",
			description:
				"Community submissions are welcome, but every story or tip stays in a moderation flow until an editor approves it for publication.",
			approvalNote: "Admin approval required before anything goes live.",
			steps: [
				{
					title: "Travelers submit a story or tip",
					description: "A future form can save draft submissions into D1 with uploader metadata and moderation status.",
				},
				{
					title: "Editors review and approve",
					description: "Approval stays operational data, separate from editorial presentation, which keeps the workflow auditable.",
				},
				{
					title: "Approved pieces are promoted into the journal",
					description: "Only approved entries should become visible CMS content or public listings.",
				},
			],
			cta: { label: "See moderation flow", href: "#community" },
		},
		footerNote:
			"Sign up for upcoming trips, journal drops, and carefully paced departures across the Mustravelz route map.",
	},
	fr: {
		locale: "fr",
		seoTitle: "Mustravelz | Journal de voyage en groupe",
		seoDescription:
			"Mustravelz est un site de voyage en groupe au style carnet, avec departs choisis, journal editorial et communaute moderee.",
		announcement: "Numero 01 | Routes choisies, carnets de terrain et prochains departs",
		nav: [
			{ label: "Destinations", href: "#shop" },
			{ label: "Voyages", href: "#shop" },
			{ label: "A propos", href: "#community" },
			{ label: "Journal", href: "#journal" },
			{ label: "Communaute", href: "#community" },
		],
		hero: {
			eyebrow: "Les souvenirs commencent ici.",
			title: "Voyager. Explorer. Se retrouver.",
			summary:
				"Des voyages en groupe pour de jeunes voyageurs musulmans qui cherchent aventure, culture et communaute dans une interface qui ressemble davantage a un carnet qu'a une agence standard.",
			primaryCta: { label: "Explorer les voyages", href: "#shop" },
			secondaryCta: { label: "Ouvrir le studio", href: "/studio" },
			stats: [
				{ label: "Departs", value: "12" },
				{ label: "Taille max", value: "16" },
				{ label: "Pays", value: "08" },
			],
		},
		notebookCards: [
			{
				kicker: "Promesse",
				title: "Voyage halal-friendly",
				description:
					"Le rythme, les repas et les informations de voyage sont presentes avec clarte pour ce public.",
			},
			{
				kicker: "Format",
				title: "Petits groupes (12-16)",
				description:
					"Des groupes plus restreints rendent l'experience plus conviviale et plus simple a exploiter.",
			},
			{
				kicker: "Approche",
				title: "Experiences locales",
				description:
					"Les itineraires mettent en avant les lieux, les gens et la texture locale plutot qu'une simple liste de cases a cocher.",
			},
			{
				kicker: "Communaute",
				title: "Communaute integree",
				description:
					"Le produit est pense pour favoriser le lien humain avant le depart et pendant le voyage.",
			},
		],
		collections: {
			eyebrow: "Voyages a venir",
			title: "Prochains departs",
			description:
				"Ces cartes peuvent ensuite etre reliees a Stripe et aux donnees operationnelles sans changer le design.",
			cards: [
				{
					eyebrow: "12 oct - 20 oct",
					title: "Maroc",
					description: "8 jours | 14 places restantes",
				},
				{
					eyebrow: "05 nov - 14 nov",
					title: "Turquie",
					description: "10 jours | 8 places restantes",
				},
				{
					eyebrow: "03 dec - 11 dec",
					title: "Bali",
					description: "9 jours | 12 places restantes",
				},
				{
					eyebrow: "08 jan - 16 jan",
					title: "Ouzbekistan",
					description: "9 jours | 10 places restantes",
				},
			],
		},
		journal: {
			eyebrow: "Depuis le journal",
			title: "Carnets et depêches de destination.",
			description:
				"Les recits ouverts et les futurs guides premium peuvent coexister dans la meme experience editoriale.",
			stories: [
				{
					access: "Gratuit",
					title: "Ou manger apres le coucher du soleil a Marrakech",
					description: "Notes de terrain, cours cachees et adresses a garder pour plus tard.",
				},
				{
					access: "Premium",
					title: "Guide membre : Istanbul par quartier et rythme",
					description: "Un guide plus dense pour preparer le voyage avec calme et precision.",
				},
			],
		},
		community: {
			eyebrow: "Bureau communaute",
			title: "Les soumissions arrivent comme brouillons, pas comme publications instantanees.",
			description:
				"L'interface pose clairement une etape editoriale de validation avant toute mise en ligne.",
			approvalNote: "Validation admin obligatoire avant publication.",
			steps: [
				{
					title: "Les voyageurs envoient un recit ou une adresse",
					description: "Un futur formulaire pourra enregistrer les brouillons dans D1 avec statut et metadonnees.",
				},
				{
					title: "Les editeurs valident",
					description: "La validation reste une donnee operationnelle distincte du contenu public.",
				},
				{
					title: "Les pieces approuvees rejoignent le journal",
					description: "Seuls les contenus approuves doivent etre exposes via le CMS ou les pages publiques.",
				},
			],
			cta: { label: "Voir le flux de moderation", href: "#community" },
		},
		footerNote: "Inscrivez-vous pour les prochains departs, les nouveaux recits et les mises a jour de route Mustravelz.",
	},
	ar: {
		locale: "ar",
		seoTitle: "Mustravelz | مجلة رحلات جماعية",
		seoDescription: "Mustravelz موقع رحلات جماعية بطابع دفتر السفر مع مغادرات مختارة ومجلة ومجتمع خاضع للمراجعة.",
		announcement: "العدد 01 | مسارات مختارة وملاحظات ميدانية ومغادرات قريبة",
		nav: [
			{ label: "الوجهات", href: "#shop" },
			{ label: "الرحلات", href: "#shop" },
			{ label: "من نحن", href: "#community" },
			{ label: "المجلة", href: "#journal" },
			{ label: "المجتمع", href: "#community" },
		],
		hero: {
			eyebrow: "الذكريات تبدأ من هنا.",
			title: "سافر. اكتشف. تواصل.",
			summary:
				"رحلات جماعية منسقة للمسافرين المسلمين الشباب الذين يبحثون عن المغامرة والثقافة والمجتمع داخل تجربة تشبه دفتر الرحلات اكثر من منصة حجز عادية.",
			primaryCta: { label: "استكشف الرحلات", href: "#shop" },
			secondaryCta: { label: "افتح الاستوديو", href: "/studio" },
			stats: [
				{ label: "المغادرات", value: "12" },
				{ label: "حجم المجموعة", value: "16" },
				{ label: "البلدان", value: "08" },
			],
		},
		notebookCards: [
			{
				kicker: "الوعد",
				title: "سفر مناسب للمسافر المسلم",
				description: "يتم عرض الايقاع والطعام والتخطيط بطريقة تمنح الثقة قبل الحجز.",
			},
			{
				kicker: "الصيغة",
				title: "مجموعات صغيرة (12-16)",
				description: "العدد المحدود يجعل التجربة اكثر دفئا واسهل من ناحية التشغيل والتنظيم.",
			},
			{
				kicker: "النهج",
				title: "تجارب محلية",
				description: "البرنامج يركز على الناس والاحياء والملمس المحلي بدلا من سياحة القوائم السريعة.",
			},
			{
				kicker: "المجتمع",
				title: "مجتمع مدمج",
				description: "الرحلة مصممة لتشجيع الترابط الانساني قبل السفر واثناءه.",
			},
		],
		collections: {
			eyebrow: "الرحلات القادمة",
			title: "المغادرات التالية",
			description:
				"يمكن ربط هذه البطاقات لاحقا بStripe وبيانات D1 التشغيلية من دون تغيير واجهة العرض.",
			cards: [
				{
					eyebrow: "12 اكتوبر - 20 اكتوبر",
					title: "المغرب",
					description: "8 ايام | 14 مكانا متبقيا",
				},
				{
					eyebrow: "05 نوفمبر - 14 نوفمبر",
					title: "تركيا",
					description: "10 ايام | 8 اماكن متبقية",
				},
				{
					eyebrow: "03 ديسمبر - 11 ديسمبر",
					title: "بالي",
					description: "9 ايام | 12 مكانا متبقيا",
				},
				{
					eyebrow: "08 يناير - 16 يناير",
					title: "اوزبكستان",
					description: "9 ايام | 10 اماكن متبقية",
				},
			],
		},
		journal: {
			eyebrow: "من المجلة",
			title: "ملاحظات الطريق ورسائل الوجهات.",
			description:
				"المقالات المفتوحة والدلائل المدفوعة مستقبلا يمكنها ان تعيش داخل نفس التجربة التحريرية.",
			stories: [
				{
					access: "مجاني",
					title: "اين تأكل بعد الغروب في مراكش",
					description: "ملاحظات ميدانية وساحات داخلية وعناوين تستحق العودة اليها.",
				},
				{
					access: "مدفوع",
					title: "دليل الاعضاء: اسطنبول حسب الحي والايقاع",
					description: "دليل اعمق للتخطيط الهادئ وفهم المدينة بشكل افضل.",
				},
			],
		},
		community: {
			eyebrow: "مكتب المجتمع",
			title: "المساهمات تصل كمسودات وليست نشرا فوريا.",
			description:
				"واجهة هذا الاصدار التجريبي توضح ان الموافقة الادارية خطوة تحريرية اساسية وليست اختيارا لاحقا.",
			approvalNote: "موافقة الادارة مطلوبة قبل النشر.",
			steps: [
				{
					title: "المسافر يرسل قصة او نصيحة",
					description: "يمكن لنموذج لاحق حفظ المسودات في D1 مع بيانات الراسل وحالة المراجعة.",
				},
				{
					title: "الفريق يراجع ويوافق",
					description: "تظل حالة الموافقة جزءا من البيانات التشغيلية المنفصلة عن العرض التحريري.",
				},
				{
					title: "المادة المعتمدة تنتقل الى المجلة",
					description: "لا يجب ان يظهر علنا الا المحتوى الذي مر بخط الموافقة.",
				},
			],
			cta: { label: "اعرض مسار المراجعة", href: "#community" },
		},
		footerNote: "اشترك ليصلك موعد الرحلات القادمة واصدارات المجلة وتحديثات مسار Mustravelz.",
	},
};
