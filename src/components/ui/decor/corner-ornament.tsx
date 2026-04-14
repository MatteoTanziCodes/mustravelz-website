import { DecorProps, DecorativeSvg, cn } from "@/components/ui/decor/shared";

export function CornerOrnament({
	className,
	placement = "top-left",
	...props
}: DecorProps) {
	return (
		<DecorativeSvg
			{...props}
			placement={placement}
			size={props.size ?? 88}
			viewBox="0 0 64 64"
			className={cn(
				placement === "top-right" || placement === "bottom-right" ? "scale-x-[-1]" : undefined,
				placement === "bottom-left" || placement === "bottom-right" ? "scale-y-[-1]" : undefined,
				className,
			)}
		>
			<path d="M4 30C4 15.64 15.64 4 30 4" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.8" />
			<path
				d="M8 28C8 17 17 8 28 8c5.4 0 9.94 2.1 13.7 5.75"
				stroke="currentColor"
				strokeOpacity="0.35"
				strokeWidth="1.4"
			/>
			<path
				d="M13 31c4.2-1.36 8.1-5.4 9.65-9.7 1.42 4.5 5.36 8.55 9.88 10.12-4.52 1.42-8.46 5.27-9.88 9.77-1.56-4.34-5.45-8.21-9.65-10.19Z"
				fill="currentColor"
				fillOpacity="0.2"
				stroke="currentColor"
				strokeWidth="1.2"
			/>
			<circle cx="39" cy="13" r="3" fill="currentColor" fillOpacity="0.65" />
		</DecorativeSvg>
	);
}
