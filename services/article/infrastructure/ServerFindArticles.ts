import { ARTICLE_URL } from "@/services/article/domain/ArticleUrl";
import { ArticleServer } from "@/services/article/infrastructure/ArticleServer";
import { ArticleCollection } from "../domain/ArticleCollection";

const articleServer = new ArticleServer(ARTICLE_URL);

export const makeServerFindArticles = async (url:string):Promise<ArticleCollection.Type> => { 

    return await articleServer.retrieveAll(url);
     
};

