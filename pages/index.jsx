import { useEffect } from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { Layout } from "@components/layout";

const Index = ({ navigation, settings }) => {
  const router = useRouter();
  const { user, error } = useUser();

  useEffect(() => {
    !user && router.push("/login");
  }, [user]);

  return user ? (
    <Layout navigation={navigation}>
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <div>home</div>
    </Layout>
  ) : (
    <div>Loading...</div>
  );
};

export default Index;

export { getStaticProps } from "@lib/getStaticProps";
