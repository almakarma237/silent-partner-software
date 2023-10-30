import type { Meta, StoryObj } from '@storybook/react';
import SideBarLayout, { ISideBarLayout } from './SideBarLayout';
import { mockSideBarLayoutProps } from './SideBarLayout.mocks';

export default {
  title: 'templates/SideBarLayout',
  component: SideBarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SideBarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof SideBarLayout> = (args) => (
  <SideBarLayout {...args} />
);

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideBarLayoutProps.base,
} as ISideBarLayout;
