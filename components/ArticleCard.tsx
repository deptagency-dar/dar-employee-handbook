import Image from "next/image";
import stroopwafel from "@images/stroopwafel.jpeg";
import { formatPublishDate } from "helpers/utils";
import Link from "next/link";

export interface IArticle {
  title: string;
  description: string;
  url: string;
  author: string;
  publishDate: Date;
  imageUrl?: string;
  authorImageUrl?: string;  
}

type Props = IArticle;

const ArticleCard = (props: Props) => {
  const {
    title,
    description,
    author,
    publishDate,
    imageUrl,
    url
  } = props;

  return (
    <div className="w-full max-w-sm rounded-lg shadow-lg h-full">
      <Link href={url}>
        <div
          className="h-48 flex-none overflow-hidden bg-cover text-center"
          style={{ backgroundImage: `url(${imageUrl || stroopwafel.src})` }}
          title="Woman holding a mug"
        />
      </Link>
      <div className="flex flex-col justify-between p-4 leading-normal h-auto">
        <div className="mb-8">
          <Link href={url}>
            <div className="mb-2 text-xl font-bold text-gray-900 line-clamp-1 text-ellipsis overflow-hidden hover:underline">
              {title}
            </div>
          </Link>
          <p className="text-base text-gray-700 line-clamp-4 text-ellipsis overflow-hidden">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <img
            className="mr-4 h-10 w-10 rounded-full"
            src={imageUrl || stroopwafel.src}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="leading-none text-gray-900">{author}</p>
            <p className="text-gray-600">{formatPublishDate(publishDate || new Date())}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
