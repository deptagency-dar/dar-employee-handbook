import { ArticleDocument } from "types/types.generated";

export type ArticleWithAuthorDocument = ArticleDocument & {
  data: {
    author: AuthorDocument;
  };
};

interface IMenuChildren {
  items: IMenuItem[];
}
interface IMenuItem {
  text: string;
  url: string | null;
};

export type IMenuItemWithChildren = IMenuItem & IMenuChildren;
