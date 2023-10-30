import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination, { IPagination } from './pagination';
import { mockPaginationProps } from './pagination.mocks';

export default {
	title: 'Pagination',
	component: Pagination,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = args => (
	<Pagination {...args} />
);

export const Pagination = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Pagination.args = {
	...mockPaginationProps.Pagination,
} as IPagination;
