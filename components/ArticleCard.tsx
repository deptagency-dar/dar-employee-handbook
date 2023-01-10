import stroopwafel from "@images/stroopwafel.jpeg";
import { useRouter } from "next/router";
import AuthorInfo from "./AuthorInfo";

export interface IArticle {
  title: string;
  description: string;
  url: string;
  author: string;
  publishDateStr: string | null;
  imageUrl: string | null;
  authorImageUrl: string | null;
}

type Props = IArticle;

const ArticleCard = (props: Props) => {
  const {
    title,
    description,
    author,
    publishDateStr,
    imageUrl,
    url,
    authorImageUrl,
  } = props;

  const router = useRouter();

  const publishDate = !!publishDateStr ? new Date(publishDateStr) : new Date();

  const goToLink = () => {
    router.push(url);
  };

  return (
    <div
      className="h-full w-full rounded-lg shadow-md hover:cursor-pointer hover:shadow-xl"
      onClick={() => goToLink()}
    >
      <div
        className="h-48 flex-none overflow-hidden bg-cover text-center"
        style={{ backgroundImage: `url(${imageUrl || stroopwafel.src})` }}
        title={title}
      />
      <div className="flex h-auto flex-col justify-between p-4 leading-normal">
        <div className="mb-8">
          <div className="mb-2 overflow-hidden text-ellipsis text-xl font-bold text-gray-900 line-clamp-1 hover:underline">
            {title}
          </div>

          <p className="overflow-hidden text-ellipsis text-base text-gray-700 line-clamp-4">
            {description}
          </p>
        </div>
        <AuthorInfo
          name={author}
          imageUrl={authorImageUrl}
          publishDate={publishDate}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
