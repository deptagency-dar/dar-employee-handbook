import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Layout } from "@components/Layout";

const Index = ({ navigation, settings }) => {
  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <div>home</div>
    </Layout>
  );
};

export default withPageAuthRequired(Index);

export { getStaticProps } from "@lib/getStaticProps";
