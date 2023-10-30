import type { Meta, StoryObj } from '@storybook/react';
import { Button, IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'atoms/buttons/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockButtonProps.base,
} as IButton;
