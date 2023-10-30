import { HttpStatus } from '@/_lib/http/HttpStatus';
import useNotification from '@/features/notification/interface/hooks/useNotification';
import { useFormSchema } from '@/interfaces/organisms/inputControls/form/FormSchemaContext';
import { useCreateArticle } from '@/services/article/interface/ArticleController/createArticleHandler/createArticleHook';
import { CreateArticleSchema } from '@/services/article/interface/ArticleController/createArticleHandler/validation/validation';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { NotificationType } from '../notification/domain/NotificationTypes';
import { CreateArticlePC } from './CreateArticlePC';

interface ICreateArticleCC {}

const CreateArticleCC: React.FC<ICreateArticleCC> = ({}) => {
  const [success, setSuccess] = useState(false);
  const { createFormSchema } = useFormSchema();

  const { createArticle, isArticleMutating } = useCreateArticle();

  useEffect(() => {
    createFormSchema({ schema: CreateArticleSchema });
  }, []);

  const { notify } = useNotification();

  const { handleSubmit, reset } = useFormContext();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    reset();
    const result = await createArticle({ payload: { title: data.title, content: data.content } } /* options */);
    if (result.status !== HttpStatus.CREATED) {
      return;
    }
    setSuccess(true);
    notify({ type: NotificationType.SUCCESS, children: 'doner gregeb ehergter rwegerger egrergwergwe' });
  });

  return (
    <div>
      <CreateArticlePC {...{ success, onSubmit, isArticleMutating }} />
    </div>
  );
};

export { CreateArticleCC };
export type { ICreateArticleCC };
