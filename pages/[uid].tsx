import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";
import { ParsedUrlQuery } from "querystring";

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ page }: IndexProps) => {
  
  return (
    <>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
};

export default withPageAuthRequired(Index);


interface ArticleParams extends ParsedUrlQuery {
  uid: string;
}

export async function getStaticProps({ params, previewData }: GetStaticPropsContext<ArticleParams>) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params?.uid || "home");
  
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
}
