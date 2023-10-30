import { ARTICLE_URL } from '@/services/article/domain/ArticleUrl';
import { ArticleServer } from '@/services/article/infrastructure/ArticleServer';
import useSWRMutation from 'swr/mutation';

const articleServer = new ArticleServer(ARTICLE_URL);

const useCreateArticle = () => {
  const { trigger, isMutating } = useSWRMutation('/articles', articleServer.insert /* options */);

  return { createArticle: trigger, isArticleMutating: isMutating };
};

export { useCreateArticle };
