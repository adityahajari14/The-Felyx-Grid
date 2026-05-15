import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

export const client = createClient({
  apiVersion,
  dataset,
  projectId: projectId || "placeholder",
  perspective: "published",
  token,
  useCdn: false,
});
