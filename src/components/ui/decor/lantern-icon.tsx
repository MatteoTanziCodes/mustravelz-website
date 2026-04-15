import { DecorProps, DecorativeSvg } from "@/components/ui/decor/shared";

export function LanternIcon(props: DecorProps) {
	return (
		<DecorativeSvg {...props} viewBox="0 0 80 150">
			<path d="M40 2v22" stroke="currentColor" strokeWidth="3" />
			<path d="M27 22h26l6 11H21l6-11Z" fill="currentColor" fillOpacity="0.92" />
			<path d="M21 36h38l-4 66H25l-4-66Z" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="3" />
			<path d="M31 36v66M49 36v66M21 58h38M21 80h38" stroke="currentColor" strokeOpacity="0.76" strokeWidth="2.6" />
			<path d="M26 102h28l-7 11H33l-7-11Z" fill="currentColor" fillOpacity="0.82" />
			<path d="M35 113h10v15H35z" fill="currentColor" fillOpacity="0.72" />
		</DecorativeSvg>
	);
}
