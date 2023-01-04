import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Layout } from "@components/layout/PageLayout";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ArticleCards from "@components/ArticleCards";
import { IArticle } from "@components/ArticleCard";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";
import { ArticleWithAuthorDocument } from "types/custom";
import { Client } from "@prismicio/client";

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ page, navigation, latestArticles, menu }: IndexProps) => {
  return (
    <Layout navigation={navigation} menu={menu}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
      <ArticleCards articles={latestArticles} />
    </Layout>
  );
};

export default withPageAuthRequired(Index);

async function getLastArticles(client: Client): Promise<IArticle[]> {
  const latestArticles = await client.getAllByType<ArticleWithAuthorDocument>(
    "article",
    {
      limit: 3,
      orderings: [
        { field: "my.article.publishDate", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
      ],
      fetchLinks: ["author.fullname", "author.image"],
    }
  );

  const latestCustomArticles = latestArticles.map((article) => {
    return {
      title: prismicH.asText(article.data.title),
      description: prismicH.asText(article.data.content),
      author: article.data.author?.data?.fullname || "Anonymous",
      authorImageUrl: article.data.author?.data?.image?.url || null,
      imageUrl: article.data.featuredImage.url,
      publishDateStr:
        article.data.publishDate || article.first_publication_date,
      url: prismicH.asLink(article),
    } as IArticle;
  });

  return latestCustomArticles;
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const latestArticles = await getLastArticles(client);

  const page = await client.getByUID("page", "home");
  const navigation = await client.getSingle("navigation");
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      navigation,
      latestArticles,
      menu,
    },
  };
}
