import { DecorProps, DecorativeSvg } from "@/components/ui/decor/shared";

export function SectionDivider(props: DecorProps) {
	return (
		<DecorativeSvg {...props} viewBox="0 0 320 24" preserveAspectRatio="none">
			<path d="M4 12h102" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.5" />
			<path d="M214 12h102" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.5" />
			<path d="M112 12h26" stroke="currentColor" strokeDasharray="4 5" strokeOpacity="0.52" strokeWidth="1.5" />
			<path d="M182 12h26" stroke="currentColor" strokeDasharray="4 5" strokeOpacity="0.52" strokeWidth="1.5" />
			<path
				d="M160 4l2.8 5.2L168 12l-5.2 2.8L160 20l-2.8-5.2L152 12l5.2-2.8L160 4Z"
				fill="currentColor"
				fillOpacity="0.92"
			/>
		</DecorativeSvg>
	);
}
