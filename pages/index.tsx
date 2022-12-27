import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Layout } from "@components/layout/PageLayout";
import type { InferGetStaticPropsType } from 'next';
import { getStaticProps } from "@lib/getStaticProps";
import ArticleCards from "@components/ArticleCards";
import { IArticle } from '@components/ArticleCard';


type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ navigation, settings, latestArticles }: IndexProps) => {
 
  const articles = latestArticles.map(article => ({
    title: prismicH.asText(article.data.title),
    description: prismicH.asText(article.data.content),
    author: article.data.author  || "Anonymous",
    imageUrl: article.data.featuredImage.url,
    publishDate: prismicH.asDate(article.data.publishDate) || new Date(),
    url: prismicH.asLink(article)
  } as IArticle));

  return (
    <Layout navigation={navigation}>
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>      
      <ArticleCards articles={articles} />
    </Layout>
  );
};

export default withPageAuthRequired(Index);

export { getStaticProps };
