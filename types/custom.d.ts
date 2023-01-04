import { ArticleDocument } from "types/types.generated";

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

export type ArticleWithAuthorDocument = ArticleDocument & {
  data: {
    author: AuthorDocument;
  };
};
