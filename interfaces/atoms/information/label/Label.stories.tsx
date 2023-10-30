import type { Meta, StoryObj } from '@storybook/react';
import { ILabel, Label } from './Label';
import { mockLabelProps } from './Label.mocks';

export default {
  title: 'atoms/information/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Label> = (args) => <Label {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLabelProps.base,
} as ILabel;
