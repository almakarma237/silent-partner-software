import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  valid?: boolean;
  customClassNames?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  name: string;
  validation?: RegisterOptions<FieldValues, string> | undefined;
}

const Input: React.FC<IInput> = ({
  customClassNames,
  disabled,
  error,
  name,
  rounded,
  valid,
  validation,
  ...restProps
}) => {
  const { register } = useFormContext();

  return (
    <input
      className={[
        classes.base,
        rounded && classes.rounded[rounded],
        !error && !valid && classes.state.normal,
        error && classes.state.error,
        valid && classes.state.valid,
        disabled && classes.state.disabled,
        customClassNames,
      ].join(' ')}
      disabled={disabled}
      {...register(name, validation)}
      {...restProps}
    />
  );
};

const classes = {
  base: 'border-transparent flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
  state: {
    normal: 'placeholder-gray-400 border-gray-300 focus:ring-purple-600',
    error: 'border-red-600 focus:ring-red-600',
    valid: 'border-green-600 focus:ring-green-600',
    disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400',
  },
  rounded: {
    none: null,
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
};

export { Input };
export type { IInput };
