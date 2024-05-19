// sanity.config.ts

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "portfolio",
  title: "Portfolio Website",
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});