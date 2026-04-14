import { DecorProps, DecorativeSvg, cn } from "@/components/ui/decor/shared";

export function ScrapbookTape({
	className,
	tone = "cream",
	...props
}: DecorProps) {
	return (
		<DecorativeSvg
			{...props}
			tone={tone}
			size={props.size ?? 92}
			viewBox="0 0 120 36"
			className={cn("opacity-80", className)}
		>
			<path
				d="M6 8h108a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z"
				fill="currentColor"
				fillOpacity="0.62"
			/>
			<path d="M22 8v20M60 8v20M98 8v20" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
		</DecorativeSvg>
	);
}
