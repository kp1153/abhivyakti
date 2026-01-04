"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes/index";

export default defineConfig({
  projectId: "whorua5k",
  dataset: "production",
  apiVersion: "2023-05-03",
  basePath: "/studio",

  schema: schema,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Abhivyakti CMS')
          .items([
            S.listItem()
              .title('Posts')
              .child(S.documentTypeList('post').title('Posts')),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Categories')),
          ]),
    }),
  ],
});