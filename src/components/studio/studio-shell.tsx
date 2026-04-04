"use client";

import { NextStudio } from "next-sanity/studio/client-component";

import { studioConfig } from "@/lib/sanity/studio-config";

export function StudioShell() {
	return <NextStudio config={studioConfig} />;
}
