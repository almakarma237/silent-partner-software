interface IText {
  children: React.ReactNode;
  customClassNames?: string;
  variant?: 'gray' | 'white' | 'dark' | 'error' | 'success';
  size?: 'sm' | 'base' | 'lg';
  as?: React.ElementType<any>;
}

const Text: React.FC<IText> = ({
  children,
  variant = 'gray',
  size = 'base',
  as = 'p',
  customClassNames,
  ...restProp
}) => {
  const Tag = as;
  return (
    <Tag className={[classes.size[size], classes.variant[variant], customClassNames].join(' ')} {...restProp}>
      {children}
    </Tag>
  );
};

const classes = {
  size: {
    sm: 'font-medium text-sm leading-normal',
    base: 'font-medium text-base leading-normal',
    lg: 'font-semibold text-lg md:text-2xl leading-relaxed',
  },
  variant: {
    gray: 'text-gray-600',
    white: 'text-white',
    dark: 'text-gray-900',
    error: 'text-red-600',
    success: 'text-green-600',
  },
};

export { Text };
export type { IText };
