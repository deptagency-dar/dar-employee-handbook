import { createClient } from "../prismicio";

export async function getStaticProps({ previewData }) {
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
