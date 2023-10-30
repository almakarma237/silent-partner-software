interface ITitleHeader {
  children: React.ReactNode;
  customClassNames?: string;
  as?: React.ElementType<any>;
}

const TitleHeader: React.FC<ITitleHeader> = ({ children, customClassNames, as = 'h3', ...restProp }) => {
  const Tag = as;

  return (
    <Tag className={['text-lg font-medium leading-6 text-gray-900', customClassNames].join(' ')} {...restProp}>
      {children}
    </Tag>
  );
};

export { TitleHeader };
export type { ITitleHeader };
