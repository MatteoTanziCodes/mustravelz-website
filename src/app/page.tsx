export default function ComingSoonPage() {
	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#f5e5c8",
				color: "#2d190f",
				textAlign: "center",
				padding: "2rem",
			}}
		>
			<p
				style={{
					fontSize: "0.75rem",
					letterSpacing: "0.25em",
					textTransform: "uppercase",
					color: "#724613",
					marginBottom: "1.25rem",
				}}
			>
				Coming Soon
			</p>
			<h1
				style={{
					fontFamily: "var(--font-serif)",
					fontSize: "clamp(3.5rem, 12vw, 8rem)",
					lineHeight: 1,
					fontWeight: 400,
				}}
			>
				Mustravelz
			</h1>
			<p
				style={{
					marginTop: "1.75rem",
					fontSize: "1.05rem",
					color: "#5e3e29",
					maxWidth: "26rem",
					lineHeight: 1.75,
				}}
			>
				Curated group departures and travel experiences for Muslim travelers. Something beautiful is on its way.
			</p>
		</main>
	);
}
