import type { Meta, StoryObj } from '@storybook/react';
import { Form, IForm } from './Form';
import { mockFormProps } from './Form.mocks';

export default {
  title: 'organisms/inputControls/Form',
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const Template: StoryObj<typeof Form> = (args) => <Form {...args} />;

// @ts-expect-error: Let's ignore a compile error like this unreachable code
export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFormProps.base,
} as IForm;
