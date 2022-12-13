import Head from "next/head";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Layout } from "@components/layout";
import { createClient } from "../../prismicio";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ article, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <>
      <Head>
        <title>
          {prismicH.asText(article.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <Layout navigation={navigation}>
        <article>
          <div className="flex flex-col items-center pt-12">
            <div className="max-w-2xl pb-0">
              <div className="mb-12">
                <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                  <PrismicText field={article.data.title} />
                </h1>
                <p className="font-serif italic tracking-tighter text-slate-500">
                  {dateFormatter.format(date)}
                </p>
              </div>
              <PrismicRichText field={article.data.content} />
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
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
      article,
      latestArticles,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
