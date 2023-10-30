import { IFullCard } from './FullCard';

const base: IFullCard = {
  header:'Card Title',
  body: 'This is the body',
  footer:'This is the footer',
  cardVariant: 'white',
  headerSize:'md',
  headerVariant: 'white',
  footerSize:'md',
  footerVariant: 'white',
  bodySize:'md',
};

export const mockFullCardProps = {
  base,
};