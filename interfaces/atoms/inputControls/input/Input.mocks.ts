import { IInput } from './Input';

const base: IInput = {
    type: 'text',
    error : false,
    required : false,
    disabled : false,
    valid : false,
    customClassNames : '',
    rounded : 'none',
};

export const mockInputProps = {
  base,
};