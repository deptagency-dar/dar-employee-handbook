import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Layout } from "@components/layout/PageLayout";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import ArticleCards from "@components/ArticleCards";
import { IArticle } from "@components/ArticleCard";
import { ArticleDocument, AuthorDocument } from "types/types.generated";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ page, navigation, latestArticles }: IndexProps) => {
  const articles = latestArticles.map((article) => {
    console.log(page.data);

    return {
      title: prismicH.asText(article.data.title),
      description: prismicH.asText(article.data.content),
      author: article.data.author?.data?.fullname || "Anonymous",
      authorImageUrl: article.data.author?.data?.image?.url,
      imageUrl: article.data.featuredImage.url,
      publishDate: prismicH.asDate(
        (article.data.publishDate ||
          article.first_publication_date) as `${number}-${number}-${number}`
      ),
      url: prismicH.asLink(article),
    } as IArticle;
  });

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
      <ArticleCards articles={articles} />
    </Layout>
  );
};

export default withPageAuthRequired(Index);

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const latestArticles = await client.getAllByType<
    ArticleDocument & {
      data: {
        author: AuthorDocument;
      };
    }
  >("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    fetchLinks: ["author.fullname", "author.image"],
  });

  const page = await client.getByUID("page", "home");
  const navigation = await client.getSingle("navigation");

  return {
    props: {
      page,
      navigation,
      latestArticles,
    },
  };
}
