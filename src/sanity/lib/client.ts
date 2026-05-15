import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId: projectId || "placeholder",
  perspective: "published",
  useCdn: false,
});
