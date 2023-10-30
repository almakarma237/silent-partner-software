import type { Meta, StoryObj } from '@storybook/react';
import { ITextAnimation, TextAnimation } from './TextAnimation';
import { mockTextAnimationProps } from './TextAnimation.mocks';

export default {
  title: 'atoms/information/animations/TextAnimation',
  component: TextAnimation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof TextAnimation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof TextAnimation> = (args) => <TextAnimation {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextAnimationProps.base,
} as ITextAnimation;
