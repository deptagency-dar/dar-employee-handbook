import ArticleCard, { IArticle } from "./ArticleCard";

interface Props {
  articles: IArticle[];
}

const ArticleCards = (props: Props) => {
  const { articles } = props;
  return (
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1 className="my-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">Last articles</h1>
        <div className="-mx-1 flex flex-wrap lg:-mx-4">
          {articles.map((article) => (
            <div key={article.title} className="my-1 px-1 w-full lg:w-1/2 lg:my-4 lg:px-4 xl:w-1/3">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default ArticleCards;
