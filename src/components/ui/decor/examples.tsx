import { ArchFrame } from "@/components/ui/decor/arch-frame";
import { CompassMotif } from "@/components/ui/decor/compass-motif";
import { CornerOrnament } from "@/components/ui/decor/corner-ornament";
import { RouteLine } from "@/components/ui/decor/route-line";
import { SectionDivider } from "@/components/ui/decor/section-divider";

export function DecoratedSectionHeaderExample() {
	return (
		<div className="relative py-8">
			<CornerOrnament placement="top-left" tone="gold" />
			<CornerOrnament placement="top-right" tone="gold" />
			<div className="mx-auto max-w-3xl text-center">
				<p className="text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">Section Header Example</p>
				<h2 className="mt-3 text-4xl text-[var(--ink-soft)]">Upcoming Trips</h2>
				<SectionDivider className="mt-5 w-full" tone="gold" />
			</div>
		</div>
	);
}

export function DecoratedCardWrapperExample() {
	return (
		<ArchFrame className="max-w-sm bg-[rgba(255,252,246,0.78)]" tone="gold">
			<div className="relative p-4">
				<CompassMotif placement="top-right" size={44} tone="brown" className="opacity-35" />
				<RouteLine placement="bottom" size="90%" tone="olive" className="bottom-2 opacity-35" />
				<p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-strong)]">Card Wrapper Example</p>
				<h3 className="mt-2 text-3xl text-[var(--ink-soft)]">Morocco</h3>
				<p className="mt-3 text-base leading-7 text-[var(--ink-soft)]">
					Use the frame as a reusable decorative wrapper around cards, feature panels, or promo blocks.
				</p>
			</div>
		</ArchFrame>
	);
}
