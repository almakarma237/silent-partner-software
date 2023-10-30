import type { Meta, StoryObj } from '@storybook/react';
import { FooterCard, IFooterCard } from './FooterCard';
import { mockFooterCardProps } from './FooterCard.mocks';

export default {
  title: 'atoms/information/card/FooterCard',
  component: FooterCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof FooterCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof FooterCard> = (args) => <FooterCard {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFooterCardProps.base,
} as IFooterCard;
