import { DecorProps, DecorativeSvg } from "@/components/ui/decor/shared";

export function RouteLine(props: DecorProps) {
	return (
		<DecorativeSvg {...props} viewBox="0 0 240 120" preserveAspectRatio="none">
			<path
				d="M8 102c24-12 39-45 67-45 21 0 27 26 50 26 26 0 31-42 60-42 18 0 29 14 47 27"
				stroke="currentColor"
				strokeDasharray="5 7"
				strokeLinecap="round"
				strokeOpacity="0.72"
				strokeWidth="2"
			/>
			<circle cx="8" cy="102" r="4.5" fill="currentColor" fillOpacity="0.75" />
			<circle cx="232" cy="68" r="4.5" fill="currentColor" fillOpacity="0.75" />
			<path d="M228 58l8 10-13 1 5-11Z" fill="currentColor" fillOpacity="0.88" />
		</DecorativeSvg>
	);
}
