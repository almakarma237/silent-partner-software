import type { Meta, StoryObj } from '@storybook/react';
import { FullCard, IFullCard } from './FullCard';
import { mockFullCardProps } from './FullCard.mocks';

export default {
  title: 'molecules/informations/cards/FullCard',
  component: FullCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof FullCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof FullCard> = (args) => <FullCard {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFullCardProps.base,
} as IFullCard;
