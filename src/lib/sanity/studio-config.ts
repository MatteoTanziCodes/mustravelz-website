import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { sanityEnv } from "@/lib/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export const studioConfig = defineConfig({
	name: "mustravelz-studio",
	title: "Mustravelz Studio",
	projectId: sanityEnv.projectId ?? "missing-project-id",
	dataset: sanityEnv.dataset ?? "missing-dataset",
	basePath: "/studio",
	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
});
