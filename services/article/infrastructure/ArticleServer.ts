import { HttpStatus } from "@/_lib/interface/http/HttpStatus";
import axios, { AxiosInstance } from "axios";

export type CreateArticleDTO = {
    title: string;
    content: string;
  };

  type UpdateArticleDTO = {
    id: string;
    title: string;
    content: string;
  };

export class ArticleServer {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  insert = async (url:string, { arg } : { arg: { payload: CreateArticleDTO }}) => {
    const res = await this.instance
      .post(url, arg.payload);
    return res;
  };

  update = async (payload: UpdateArticleDTO) => {
    const res = await this.instance
      .put(`/${payload.id}`, payload);
    if (res.status != HttpStatus.OK) {
      return;
    }
    return res;
  };

  publish = async (id: string) => {
    const res = await this.instance
      .patch(`/${id}`);
    if (res.status != HttpStatus.OK) {
      return;
    }
    return res;
  };

  findOne = async (id: string) => {
    const res = await this.instance
      .get(`/${id}`);
    return res.data;
  };

  retrieveAll = async (url:string) => {
    const res = await this.instance
      .get('' + url);
    return res.data;
  };

  deleteOne = async (id: string) => {
    const res = await this.instance
      .delete(`/${id}`);
    return res.data;
  };
}

const initArticleServer = async (): Promise<ArticleServer> => {
  const articleServer: ArticleServer = new ArticleServer("//localhost:4000/api");


  return articleServer;
};

export { initArticleServer };

