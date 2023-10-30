import { IInputLabelText } from './InputLabelText';

const base: IInputLabelText = {
  disabled: false,
  error: false,
  errorText: '',
  inputType:'text',
  label: 'Your Name',
  required: false,
  valid: false
};

export const mockInputLabelTextProps = {
  base,
};