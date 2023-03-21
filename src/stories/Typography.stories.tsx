import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '../components';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Typography',
  className: '',
  color: 'default',
  size: 'body',
  component: 'p',
};
