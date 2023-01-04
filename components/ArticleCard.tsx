import Image from "next/image";
import stroopwafel from "@images/stroopwafel.jpeg";
import { formatPublishDate } from "helpers/utils";
import Link from "next/link";
import AuthorImage from "./AuthorImage";

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

  const publishDate = !!publishDateStr ? new Date(publishDateStr) : new Date();

  return (
    <div className="h-full w-full max-w-md rounded-lg shadow-md hover:shadow-xl">
      <Link href={url}>
        <div
          className="h-48 flex-none overflow-hidden bg-cover text-center"
          style={{ backgroundImage: `url(${imageUrl || stroopwafel.src})` }}
          title={title}
        />
      </Link>
      <div className="flex h-auto flex-col justify-between p-4 leading-normal">
        <div className="mb-8">
          <Link href={url}>
            <div className="mb-2 overflow-hidden text-ellipsis text-xl font-bold text-gray-900 line-clamp-1 hover:underline">
              {title}
            </div>
          </Link>
          <p className="overflow-hidden text-ellipsis text-base text-gray-700 line-clamp-4">
            {description}
          </p>
        </div>
        <div className="flex items-center">
         <AuthorImage name={author} image={authorImageUrl} />
          <div className="text-sm">
            <p className="leading-none text-gray-900">{author}</p>
            <p className="text-gray-600">
              {formatPublishDate(publishDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
