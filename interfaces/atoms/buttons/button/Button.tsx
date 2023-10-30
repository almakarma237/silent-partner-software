interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClassNames?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'normal' | 'large';
  pill: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  type = 'button',
  className,
  variant = 'primary',
  size = 'normal',
  pill,
  disabled,
  customClassNames,
  ...restProp
}) => {
  return (
    <button
      className={[
        classes.base,
        classes.size[size],
        classes.variant[variant],
        disabled && classes.disabled,
        customClassNames,
      ].join(' ')}
      disabled={disabled}
      {...restProp}
    >
      {children}
    </button>
  );
};

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary: 'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

export { Button };
export type { IButton };
