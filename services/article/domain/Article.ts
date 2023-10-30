  namespace Article {
    type Article = Readonly<{
        id?: string | null;
        title: string;
        content: string;
        state: 'DRAFT' | 'PUBLISHED' | 'DELETED';
        publishedAt: Date | null;
    }>;

    export type Type = Article;
  }

  export type { Article };
