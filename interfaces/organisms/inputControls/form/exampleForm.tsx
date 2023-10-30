'use client';

import { InputLabelText } from '@/interfaces/molecules/inputControls/inputLabelText/InputLabelText';
import { Form } from '@/interfaces/organisms/inputControls/form/Form';
import { CreateArticleDTO } from '@/services/article/application/useCases/dto';
import { useCreateArticle } from '@/services/article/interface/ArticleController/createArticleHandler/createArticleHook';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { GrMail } from 'react-icons/gr';

const Home: NextPage = () => {
  const [createArticle, setCreateArticle] = useState<CreateArticleDTO>({
    content: '',
    title: '',
  });

  const { createArticleHandler } = useCreateArticle();

  const [success, setSuccess] = useState(false);

  const { handleSubmit, reset } = useFormContext();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    setSuccess(true);
  });

  const name_validation = {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  };

  const password_validation = {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  };

  return (
    <React.Fragment>
      <Form success={success}>
        <div>
          <InputLabelText
            name='name'
            input={{ type: 'text', id: 'name', placeholder: 'type your name...', required: true }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
            validation={name_validation}
          />
          <InputLabelText
            name='password'
            input={{ type: 'password', id: 'name', placeholder: 'type your password...' }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
            validation={password_validation}
          />
        </div>
        <div className='grid gap-5 md:grid-cols-2'>
          <InputLabelText
            name='name'
            input={{ type: 'text', id: 'name', placeholder: 'type your name...', required: true }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
            validation={name_validation}
          />
          <InputLabelText
            name='password'
            input={{ type: 'password', id: 'name', placeholder: 'type your password...' }}
            valid={false}
            errorText='none'
            label={{ id: '1' }}
            validation={password_validation}
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
