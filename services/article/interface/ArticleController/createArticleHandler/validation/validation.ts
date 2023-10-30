import Joi from "joi";

const CreateArticleSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).required();

  export { CreateArticleSchema };
