import { Page } from '@/_lib/http/validation/Page';
import { makeServerFindArticles } from '@/services/article/infrastructure/ServerFindArticles';
import useSWR from 'swr';

type ArticleFilter = {
  title?: string;
  publishedBetween?: {
    publishedAfter: string;
    publiblishedBefore: string;
  };
};

interface IUseFindArticles {
  pagination?: Page;
  sort?: { field: 'title' | ''; direction: '' | '-' };
  filter?: ArticleFilter;
}

function logger(useSWRNext) {
  return (key, fetcher, config) => {
    // Add logger to the original fetcher.
    const extendedFetcher = (...args) => {
      console.log('SWR Request:', key);
      return fetcher(...args);
    };

    // Execute the hook with the new fetcher.
    return useSWRNext(key, extendedFetcher, config);
  };
}

const useFindArticles = ({ pagination, sort, filter }: IUseFindArticles) => {
  let match = '/articles';

  if (pagination) {
    match += `/?limit=${pagination.limit}`;

    match += `&page=${pagination.page}`;
  }

  if (sort) {
    match += `&sort=${sort.direction + sort.field}`;
  }

  if (filter?.title) {
    match += '&filter[title]=' + filter.title;
  }

  if (filter?.publishedBetween) {
    match += '&filter[publishedBetween]=' + filter.publishedBetween.publishedAfter;
    match += '&filter[publishedBetween]=' + filter.publishedBetween.publiblishedBefore;
  }

  const { data, error, isLoading } = useSWR(match, makeServerFindArticles, { use: [logger] });

  console.log(data);

  return {
    articles: data,
    isArticleLoading: isLoading,
    isArticleError: error,
  };
};

export { useFindArticles };
