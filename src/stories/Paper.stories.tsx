import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paper } from '../components';

export default {
  title: 'Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
  tags: ['tag1', 'tag2'],
  center: true,
};
