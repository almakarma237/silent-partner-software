//const id = useId();

import { findInputError } from '@/_lib/findInputErrors';
import { isFormInvalid } from '@/_lib/isFormInvalid';
import { TextAnimation } from '@/interfaces/atoms/information/animations/text/TextAnimation';
import { Label } from '@/interfaces/atoms/information/label/Label';
import { Text } from '@/interfaces/atoms/information/text/Text';
import { Input } from '@/interfaces/atoms/inputControls/input/Input';
import { AnimatePresence } from 'framer-motion';
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { MdError } from 'react-icons/md';

const id = '1';

interface IInputLabelText {
  errorText: string;
  name: string;
  valid: boolean;
  customClassNames?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  label: React.LabelHTMLAttributes<HTMLLabelElement>;
  input: React.InputHTMLAttributes<HTMLInputElement>;
  validation?: RegisterOptions<FieldValues, string> | undefined;
}

const InputLabelText: React.FC<IInputLabelText> = ({
  customClassNames,
  errorText,
  label,
  rounded,
  valid,
  name,
  input,
  validation,
  ...restProps
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className={['relative', customClassNames].join(' ')} {...restProps}>
      {name && (
        <Label {...label}>
          {name} {input.required && '*'}
        </Label>
      )}
      <Input error={isInvalid} valid={valid} rounded={rounded} name={name} validation={validation} {...input} />
      <AnimatePresence mode='wait' initial={false}>
        {isInvalid && (
          <TextAnimation customClassNames='py-2 mt-2'>
            <span className='inline-block px-3 align-middle'>
              <MdError />
            </span>
            <Text size='sm' variant='error' customClassNames='flex justify-between'>
              {inputError?.error?.message}
            </Text>
          </TextAnimation>
        )}
      </AnimatePresence>
    </div>
  );
};

export { InputLabelText };
export type { IInputLabelText };
