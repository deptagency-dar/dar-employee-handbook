import ArticleCard, { IArticle } from "./ArticleCard";

interface Props {
  articles: IArticle[];
}

const ArticleCards = (props: Props) => {
  const { articles } = props;
  return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1 className="my-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">Last articles</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-items-center lg:justify-items-stretch">
          {articles.map((article) => (
            <div key={article.title} className="w-full">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default ArticleCards;
