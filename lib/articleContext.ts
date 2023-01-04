import React, { useContext } from "react";
import { ArticleWithAuthorDocument } from "types/custom";

interface ArticlesContext {
  articleDocument: ArticleWithAuthorDocument[] | null;
};

export const ArticlesContext = React.createContext<ArticlesContext>({ articleDocument: null });

export const useArticlesContext = () => useContext(ArticlesContext);