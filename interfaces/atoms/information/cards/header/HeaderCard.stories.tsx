import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCard, IHeaderCard } from './HeaderCard';
import { mockHeaderCardProps } from './HeaderCard.mocks';

export default {
  title: 'atoms/information/card/HeaderCard',
  component: HeaderCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof HeaderCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof HeaderCard> = (args) => <HeaderCard {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderCardProps.base,
} as IHeaderCard;
