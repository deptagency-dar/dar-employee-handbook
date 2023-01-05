import { formatPublishDate } from "helpers/utils";
import AuthorImage from "./AuthorImage";

interface Props {
  name: string;
  imageUrl: string | null;
  publishDate: Date;
}

function AuthorInfo({ name, imageUrl, publishDate }: Props) {
  return (
    <div className="flex items-center">
      <AuthorImage name={name} image={imageUrl} />
      <div className="text-sm">
        <p className="leading-none text-gray-900">{name}</p>
        <p className="font-serif text-slate-500 italic">{formatPublishDate(publishDate)}</p>
      </div>
    </div>
  );
}

export default AuthorInfo;
