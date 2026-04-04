import { createClient } from "next-sanity";

import { sanityEnv } from "@/lib/sanity/env";

export const sanityClient = createClient({
	projectId: sanityEnv.projectId ?? "missing-project-id",
	dataset: sanityEnv.dataset ?? "missing-dataset",
	apiVersion: sanityEnv.apiVersion,
	useCdn: true,
	perspective: "published",
});
