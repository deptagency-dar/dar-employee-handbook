import { GetStaticPropsContext } from "next";
import { NavigationDocument, SettingsDocument } from "../types/types.generated";
import { createClient } from "../prismicio";

export interface IndexPageProps {
  navigation: NavigationDocument;
  settings: SettingsDocument;
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      navigation,
      settings,
      latestArticles
    },
  };
}
