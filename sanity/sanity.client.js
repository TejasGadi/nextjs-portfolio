// sanity/sanity.client.ts

import { createClient, ClientConfig } from "@sanity/client";

const config = {
  projectId: "bd731bnn",
  dataset: "production",
  apiVersion: "2024-05-14",
  useCdn: false,
};

const client = createClient(config);

export default client;