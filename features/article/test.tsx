import { Page } from '@/_lib/http/validation/Page';
import { useFindArticles } from '@/services/article/interface/ArticleController/findArticlesHandler/findArticlesHook';
import React from 'react';

interface ITest {
  page: Page;
}

const Test= ({ page}: ITest) => {
  const { articles, isLoading, isError } = useFindArticles({
    page,
  });
};

export { Test };
export type { ITest };
