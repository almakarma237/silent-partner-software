import { Card } from '@/interfaces/atoms/information/cards/Card';
import { BodyCard } from '@/interfaces/atoms/information/cards/body/BodyCard';
import { FooterCard } from '@/interfaces/atoms/information/cards/footer/FooterCard';
import { HeaderCard } from '@/interfaces/atoms/information/cards/header/HeaderCard';
import { TitleHeader } from '@/interfaces/atoms/information/cards/header/title/TitleHeader';

interface IFullCard {
  cardVariant?: 'white' | 'dark' | 'gray';
  headerSize?: 'sm' | 'md' | 'lg';
  headerVariant?: 'white' | 'dark' | 'gray';
  footerSize?: 'sm' | 'md' | 'lg';
  footerVariant?: 'white' | 'dark' | 'gray';
  bodySize?: 'sm' | 'md' | 'lg';
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const FullCard: React.FC<IFullCard> = ({
  header,
  body,
  footer,
  headerSize,
  headerVariant,
  footerSize,
  footerVariant,
  bodySize,
  cardVariant,
}) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto py-20'>
        <div className='grid grid-cols-4 gap-4'>
          <Card variant={cardVariant}>
            {header && (
              <HeaderCard size={headerSize} variant={headerVariant}>
                <TitleHeader>{header}</TitleHeader>
              </HeaderCard>
            )}
            {body && <BodyCard size={bodySize}>{body}</BodyCard>}
            {footer && (
              <FooterCard size={footerSize} variant={footerVariant}>
                {footer}
              </FooterCard>
            )}
          </Card>
        </div>
      </div>
    </div>
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

export { FullCard };
export type { IFullCard };
