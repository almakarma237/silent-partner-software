import useNotification from '@/features/notification/interface/hooks/useNotification';
import { useFormSchema } from '@/interfaces/organisms/inputControls/form/FormSchemaContext';
import { CreateArticleSchema } from '@/services/article/interface/ArticleController/createArticleHandler/validation/validation';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { NotificationType } from '../notification/domain/NotificationTypes';
import { CreateArticlePC } from './CreateArticlePC';

interface ICreateArticleCC {}

const CreateArticleCC: React.FC<ICreateArticleCC> = ({}) => {
  const [success, setSuccess] = useState(false);
  const { createFormSchema } = useFormSchema();

  useEffect(() => {
    createFormSchema({ schema: CreateArticleSchema });
  }, []);

  const { notify } = useNotification();

  const { handleSubmit, reset } = useFormContext();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    reset();
    setSuccess(true);
    notify({ type: NotificationType.SUCCESS, children: 'doner gregeb ehergter rwegerger egrergwergwe' });
  });

  return (
    <div>
      <CreateArticlePC {...{ success, onSubmit }} />
    </div>
  );
};

export { CreateArticleCC };
export type { ICreateArticleCC };
