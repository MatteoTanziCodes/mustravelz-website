import type { CSSProperties, SVGProps } from "react";

export type DecorTone = "gold" | "olive" | "brown" | "cream" | "ink";

export type DecorPlacement =
	| "top-left"
	| "top-right"
	| "bottom-left"
	| "bottom-right"
	| "top"
	| "right"
	| "bottom"
	| "left"
	| "center";

export interface DecorProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
	className?: string;
	size?: number | string;
	tone?: DecorTone;
	placement?: DecorPlacement;
}

export interface DecorFrameProps {
	children: React.ReactNode;
	className?: string;
	tone?: DecorTone;
}

const toneClassMap: Record<DecorTone, string> = {
	gold: "text-[var(--gold)]",
	olive: "text-[var(--olive)]",
	brown: "text-[var(--accent-strong)]",
	cream: "text-[var(--paper-soft)]",
	ink: "text-[var(--ink)]",
};

const placementClassMap: Record<DecorPlacement, string> = {
	"top-left": "absolute left-0 top-0",
	"top-right": "absolute right-0 top-0",
	"bottom-left": "absolute bottom-0 left-0",
	"bottom-right": "absolute bottom-0 right-0",
	top: "absolute left-1/2 top-0 -translate-x-1/2",
	right: "absolute right-0 top-1/2 -translate-y-1/2",
	bottom: "absolute bottom-0 left-1/2 -translate-x-1/2",
	left: "absolute left-0 top-1/2 -translate-y-1/2",
	center: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function cn(...values: Array<string | false | null | undefined>) {
	return values.filter(Boolean).join(" ");
}

export function getDecorToneClass(tone: DecorTone = "gold") {
	return toneClassMap[tone];
}

export function getDecorPlacementClass(placement?: DecorPlacement) {
	return placement ? placementClassMap[placement] : undefined;
}

export function getDecorSizeStyle(size: number | string | undefined): CSSProperties | undefined {
	if (size === undefined) {
		return undefined;
	}

	return typeof size === "number" ? { width: `${size}px`, height: `${size}px` } : { width: size, height: size };
}

export function DecorativeSvg({
	className,
	size = 64,
	tone = "gold",
	placement,
	style,
	children,
	...props
}: DecorProps & { children: React.ReactNode }) {
	return (
		<svg
			{...props}
			aria-hidden={props["aria-hidden"] ?? true}
			viewBox={props.viewBox}
			className={cn("shrink-0", getDecorToneClass(tone), getDecorPlacementClass(placement), className)}
			style={{ ...getDecorSizeStyle(size), ...style }}
			fill="none"
		>
			{children}
		</svg>
	);
}
