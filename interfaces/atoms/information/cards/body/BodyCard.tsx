interface IBodyCard {
  children: React.ReactNode;
  customClassNames?: string;
  size?: 'sm' | 'md' | 'lg';
}

const BodyCard: React.FC<IBodyCard> = ({ size = 'md', children, customClassNames, ...restProp }) => {
  return (
    <div className={[classes.sizes[size], customClassNames].join(' ')} {...restProp}>
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
};

export { BodyCard };
export type { IBodyCard };
