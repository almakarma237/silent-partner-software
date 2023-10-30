import type { Meta, StoryObj } from '@storybook/react';
import { INotificationCardMolecule, NotificationCardMolecule } from './NotificationCardMolecule';
import { mockNotificationProps } from './NotificationCardMolecule.mocks';

export default {
  title: 'molecules/informations/cards/Notification',
  component: NotificationCardMolecule,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof NotificationCardMolecule>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Notification> = (args) => <Notification {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNotificationProps.base,
} as INotificationCardMolecule;
