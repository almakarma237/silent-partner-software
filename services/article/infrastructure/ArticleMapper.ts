import { DataMapper } from '@/_lib/DDD';
import { Article } from '@/services/article/domain/Article';
import { ArticleSchema } from '@/services/article/domain/ArticleCollection';

const ArticleMapper: DataMapper<Article.Type, ArticleSchema> = {
  toData: (entity: Article.Type) => ({
    id: entity.id,
    title: entity.title,
    content: entity.content,
    state: entity.state,
    publishedAt: entity.publishedAt,
  }),
  toEntity: (data: ArticleSchema) => ({
    id: data.id.toString(),
    title: data.title,
    content: data.content,
    state: data.state,
    publishedAt: data.publishedAt,
  }),
};

export { ArticleMapper };

