'use client';

import { useValidationResolver } from '@/_lib/interface/useValidationResolver';
import { InputLabelText } from '@/interfaces/molecules/inputControls/inputLabelText/InputLabelText';
import { Form } from '@/interfaces/organisms/inputControls/form/Form';
import { useFormSchema } from '@/interfaces/organisms/inputControls/form/FormSchemaContext';
import { CreateArticleDTO } from '@/services/article/application/useCases/dto';
import { useCreateArticle } from '@/services/article/interface/ArticleController/createArticleHandler/createArticleHook';
import Joi from 'joi';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { GrMail } from 'react-icons/gr';

const Home: NextPage = () => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).required();

  const { createFormSchema } = useFormSchema();

  useEffect(() => {
    createFormSchema({ schema });
  }, []);

  const { createArticleHandler } = useCreateArticle();

  const [success, setSuccess] = useState(false);

  const { handleSubmit, reset } = useFormContext();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    setSuccess(true);
  });

  return (
    <React.Fragment>
      <Form success={success}>
        <div className='grid gap-5 md:grid-cols-2'>
          <InputLabelText
            name='title'
            input={{ type: 'text', id: 'title', placeholder: 'type your title...', required: true }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
          />
          <InputLabelText
            name='content'
            input={{ type: 'text', id: 'content', placeholder: 'type your content...' }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
          />
        </div>
        <div className='mt-5'>
          <button
            onClick={onSubmit}
            className='flex items-center gap-1 rounded-md bg-blue-600 p-5 font-semibold text-white hover:bg-blue-800'
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Home;
