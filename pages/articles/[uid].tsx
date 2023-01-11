import Head from "next/head";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { createClient } from "../../prismicio";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ArticleWithAuthorDocument } from "types/types";
import { AuthorDocument } from "types/types.generated";
import AuthorInfo from "@components/AuthorInfo";

type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ article }: ArticleProps) => {
  const author = "data" in article.data.author ? (article.data.author as AuthorDocument).data : null;
  
  const authorName = author?.fullname;

  const date = prismicH.asDate(
    (article.data.publishDate ||
      article.first_publication_date) as `${number}-${number}-${number}`
  );

  return (
    <>
      <Head>
        <title>
          {prismicH.asText(article.data.title)}
          {!!authorName ? ` | ${authorName}` : ""}
        </title>
      </Head>
      <article>
        <div className="flex flex-col items-center pt-12">
          <div className="w-full max-w-2xl pb-0">
            <div className="mb-12">
              <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
                <PrismicText field={article.data.title} />
              </h1>
              <AuthorInfo name={authorName || "Anonymous"} imageUrl={author?.image?.url || null} publishDate={date} />
            </div>
            <div className="article-content">
              <PrismicRichText field={article.data.content} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default withPageAuthRequired(Article);

interface ArticleParams extends ParsedUrlQuery {
  uid: string;
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<ArticleParams>) {
  const client = createClient({ previewData });

  if (!params?.uid) return;

  const article = await client.getByUID<ArticleWithAuthorDocument>(
    "article",
    params.uid,
    {
      fetchLinks: ["author.fullname", "author.image"],
    }
  );

  return {
    props: {
      article,
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
