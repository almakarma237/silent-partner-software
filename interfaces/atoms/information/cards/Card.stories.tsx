import type { Meta, StoryObj } from '@storybook/react';
import { Card, ICard } from './Card';
import { mockCardProps } from './Card.mocks';

export default {
  title: 'atoms/card/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Card> = (args) => <Card {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardProps.base,
} as ICard;
