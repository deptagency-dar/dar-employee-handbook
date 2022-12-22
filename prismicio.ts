import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);


const routes: prismic.ClientConfig['routes'] = [
  {
    type: "article",
    path: "/articles/:uid",
  },
  {
    type: "page",
    path: "/:uid",
  },
];

export const createClient = ({ previewData, req, ...config }: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
