import { GetStaticPropsContext } from "next";
import { NavigationDocument, SettingsDocument } from "../types/types.generated";
import { createClient } from "../prismicio";

export interface IndexPageProps {
  navigation: NavigationDocument;
  settings: SettingsDocument;
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      navigation,
      settings,
    },
  };
}
