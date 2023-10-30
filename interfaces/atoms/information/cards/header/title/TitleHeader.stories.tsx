import type { Meta, StoryObj } from '@storybook/react';
import { ITitleHeader, TitleHeader } from './TitleHeader';
import { mockTitleHeaderProps } from './TitleHeader.mocks';

export default {
  title: 'atoms/information/card/TitleHeader',
  component: TitleHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof TitleHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof TitleHeader> = (args) => <TitleHeader {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTitleHeaderProps.base,
} as ITitleHeader;
