import { Repository } from '@/_lib/DDD';
import { Article } from '@/services/article/domain/Article';

type ArticleRepository = Repository<Article.Type>;

export { ArticleRepository };

