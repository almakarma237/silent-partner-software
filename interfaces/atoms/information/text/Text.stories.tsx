import type { Meta, StoryObj } from '@storybook/react';
import { IText, Text } from './Text';
import { mockTextProps } from './Text.mocks';

export default {
  title: 'atoms/information/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Text> = (args) => <Text {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextProps.base,
} as IText;
