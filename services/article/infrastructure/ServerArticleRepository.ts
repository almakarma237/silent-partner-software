import { Fetcher } from '@/_lib/DDD';
import { Article } from '@/services/article/domain/Article';
import { ArticleRepository } from '@/services/article/domain/ArticleRepository';
import { ARTICLE_URL } from '@/services/article/domain/ArticleUrl';
import { ArticleMapper } from '@/services/article/infrastructure/ArticleMapper';
import { ArticleServer } from '@/services/article/infrastructure/ArticleServer';

type Dependencies = {
  articleServer: ArticleServer;
};

const articleServer = new ArticleServer(ARTICLE_URL);

const makeServerArticleRepository = (): ArticleRepository => ({
  async getNextId(): Promise<string> {
    return 'no new id';
  },
  async store(entity: Article.Type): Promise<any> {
    const { id, content, title } = ArticleMapper.toData(entity);

    if (id) {
      console.log('updated');
       return await articleServer.update({ id, content,title });
    }

    console.log('saved');
    return await articleServer.insert({ content, title});
  },
});

export { makeServerArticleRepository };

