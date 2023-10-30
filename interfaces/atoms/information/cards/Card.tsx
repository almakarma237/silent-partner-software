interface ICard {
  children: React.ReactNode;
  customClassNames?: string;
  variant?: 'white' | 'dark' | 'gray';
}

const Card: React.FC<ICard> = ({ children, customClassNames, variant = 'white', ...restProp }) => {
  return (
    <div
      className={['overflow-hidden rounded-lg shadow', classes.variants[variant], customClassNames].join(' ')}
      {...restProp}
    >
      {children}
    </div>
  );
};

const classes = {
  variants: {
    white: 'bg-white',
    dark: 'bg-gray-900',
    gray: 'bg-gray-50',
  },
};

export { Card };
export type { ICard };
