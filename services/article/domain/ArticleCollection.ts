import { Article } from "./Article";
import { Pagination } from "./Pagination";


namespace ArticleCollection {
      type ArticleCollection = Readonly<{
        data: Array<Article.Type>;
        page: Pagination.Type;
    }>;

    export type Type = ArticleCollection;
  }

  export type { ArticleCollection };

