import React from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  customClassNames?: string;
  success?: boolean;
}

const Form: React.FC<IForm> = ({ children, customClassNames, success, ...restProp }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete='on' className='container'>
      {success && (
        <p className='mb-5 flex items-center gap-1 font-semibold text-green-500'>
          <BsFillCheckSquareFill /> Form has been submitted successfully
        </p>
      )}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return child?.props?.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  key: child?.props?.name,
                },
              })
            : child;
        }
      })}
    </form>
  );
};

export { Form };
export type { IForm };
