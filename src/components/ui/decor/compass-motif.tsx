import { DecorProps, DecorativeSvg } from "@/components/ui/decor/shared";

export function CompassMotif(props: DecorProps) {
	return (
		<DecorativeSvg {...props} viewBox="0 0 80 80">
			<circle cx="40" cy="40" r="34" stroke="currentColor" strokeOpacity="0.42" strokeWidth="2" />
			<circle cx="40" cy="40" r="24" stroke="currentColor" strokeOpacity="0.26" strokeWidth="1.5" />
			<path
				d="M40 12 46 34 68 40 46 46 40 68 34 46 12 40 34 34 40 12Z"
				fill="currentColor"
				fillOpacity="0.18"
				stroke="currentColor"
				strokeWidth="2.2"
			/>
			<circle cx="40" cy="40" r="4" fill="currentColor" fillOpacity="0.95" />
		</DecorativeSvg>
	);
}
