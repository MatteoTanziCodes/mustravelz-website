import { StudioShell } from "@/components/studio/studio-shell";
import { isSanityConfigured } from "@/lib/sanity/env";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
	if (!isSanityConfigured()) {
		return (
			<div className="min-h-screen bg-[var(--paper)] px-6 py-16 text-[var(--ink)]">
				<div className="mx-auto max-w-3xl rounded-[2rem] border border-black/10 bg-white/85 p-10 shadow-[0_24px_80px_rgba(84,58,26,0.08)]">
					<p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent-strong)]">Studio Setup</p>
					<h1 className="mt-4 text-4xl font-semibold">Sanity needs project environment variables.</h1>
					<p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
						Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> in your local
						environment, then refresh this route to open the embedded studio.
					</p>
				</div>
			</div>
		);
	}

	return <StudioShell />;
}
