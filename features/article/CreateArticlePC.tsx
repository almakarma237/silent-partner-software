import { InputLabelText } from '@/interfaces/molecules/inputControls/inputLabelText/InputLabelText';
import { Form } from '@/interfaces/organisms/inputControls/form/Form';
import React from 'react';
import { GrMail } from 'react-icons/gr';

interface ICreateArticlePC {
  success: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  isMutating?: boolean;
}

const CreateArticlePC: React.FC<ICreateArticlePC> = ({ success, onSubmit, isMutating }) => {
  return (
    <Form {...{success: success}}>
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
        disabled={isMutating}
          onClick={onSubmit}
          className='flex items-center gap-1 rounded-md bg-blue-600 p-5 font-semibold text-white hover:bg-blue-800'
        >
          <GrMail />
          Submit Form
        </button>
      </div>
    </Form>
  );
};

export { CreateArticlePC };
export type { ICreateArticlePC };

