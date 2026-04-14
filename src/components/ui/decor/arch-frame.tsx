import { DecorFrameProps, cn, getDecorToneClass } from "@/components/ui/decor/shared";

export function ArchFrame({
	children,
	className,
	tone = "gold",
}: DecorFrameProps) {
	return (
		<div className={cn("relative isolate overflow-hidden rounded-[1.5rem] border border-current/20 p-4", getDecorToneClass(tone), className)}>
			<div className="pointer-events-none absolute inset-[0.45rem] rounded-[1.2rem] border border-current/16" />
			<div
				className="pointer-events-none absolute inset-x-[18%] top-[0.45rem] h-16 border border-b-0 border-current/22"
				style={{ borderTopLeftRadius: "999px", borderTopRightRadius: "999px" }}
			/>
			<div className="relative z-10 text-[var(--ink)]">{children}</div>
		</div>
	);
}
