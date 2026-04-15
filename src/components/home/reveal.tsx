"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({
	children,
	className,
	delay = 0,
	...props
}: Readonly<{
	children: React.ReactNode;
	className?: string;
	delay?: number;
}> &
	Omit<HTMLMotionProps<"div">, "children">) {
	return (
		<motion.div
			{...props}
			className={className}
			initial={{ opacity: 0, y: 28, rotate: -0.3 }}
			animate={{ opacity: 1, y: 0, rotate: 0 }}
			transition={{
				duration: 0.75,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{children}
		</motion.div>
	);
}
