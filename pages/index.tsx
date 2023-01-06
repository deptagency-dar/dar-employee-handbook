import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Layout } from "@components/layout/PageLayout";
import type { InferGetStaticPropsType } from 'next';
import { getStaticProps } from "@lib/getStaticProps";

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ navigation, settings }: IndexProps) => {
 
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

export { getStaticProps };
