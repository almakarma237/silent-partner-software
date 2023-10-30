import { Article } from '@/services/article/domain/Article';
import { makeServerFindArticles } from '@/services/article/infrastructure/ServerFindArticles';
import useSWR from 'swr';

interface findArticle {
  article: Article.Type;
  isLoading: boolean;
  isError: any;
}

const useFindArticle = (id: string): findArticle => {
  const { data, error, isLoading } = useSWR(`/${id}`, makeServerFindArticles);

  console.log(data);

  return {
    article: data,
    isLoading,
    isError: error,
  };
};

export { useFindArticle };
