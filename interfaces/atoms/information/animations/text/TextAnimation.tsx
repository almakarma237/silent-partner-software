import { motion } from 'framer-motion';

interface ITextAnimation {
  children: React.ReactNode;
  customClassNames?: string;
}

const TextAnimation: React.FC<ITextAnimation> = ({ children, customClassNames }) => {
  return (
    <motion.span
      className={[
        'flex items-center gap-1 rounded-md bg-red-100 px-2 font-semibold text-red-500',
        customClassNames,
      ].join(' ')}
      {...classes.error}
    >
      {children}
    </motion.span>
  );
};

const classes = {
  error: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  },
};

export { TextAnimation };
export type { ITextAnimation };
