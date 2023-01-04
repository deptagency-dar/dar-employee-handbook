import { ArticleDocument } from "types/types.generated";

export type ArticleWithAuthorDocument = ArticleDocument & {
  data: {
    author: AuthorDocument;
  };
};
