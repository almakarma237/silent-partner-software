interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  customClassNames?: string;
}

const Label: React.FC<ILabel> = ({ children, customClassNames, ...restProp }) => {
  return (
    <label className={['mb-2 block text-base font-medium text-gray-700', customClassNames].join(' ')} {...restProp}>
      {children}
    </label>
  );
};

export { Label };
export type { ILabel };
