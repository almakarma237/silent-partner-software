interface IFooterCard {
  children: React.ReactNode;
  customClassNames?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'white' | 'dark' | 'gray';
}

const FooterCard: React.FC<IFooterCard> = ({
  variant = 'white',
  size = 'md',
  children,
  customClassNames,
  ...restProp
}) => {
  return (
    <div className={[classes.variants[variant], classes.sizes[size], customClassNames].join(' ')} {...restProp}>
      {children}
    </div>
  );
};

const classes = {
  sizes: {
    sm: 'px-1 py-5 sm:px-2',
    md: 'px-4 py-5 sm:px-6',
    lg: 'px-4 py-8 sm:px-8',
  },
  variants: {
    white: 'bg-white border-t border-gray-200',
    dark: 'bg-gray-900 border-t border-gray-700',
    gray: 'bg-gray-50',
  },
};

export { FooterCard };
export type { IFooterCard };
