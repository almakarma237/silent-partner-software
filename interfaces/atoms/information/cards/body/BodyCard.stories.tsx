import type { Meta, StoryObj } from '@storybook/react';
import { BodyCard, IBodyCard } from './BodyCard';
import { mockBodyCardProps } from './BodyCard.mocks';

export default {
  title: 'atoms/information/card/BodyCard',
  component: BodyCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BodyCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof BodyCard> = (args) => <BodyCard {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBodyCardProps.base,
} as IBodyCard;
