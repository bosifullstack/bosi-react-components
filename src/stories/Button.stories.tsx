import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  className: '',
  color: 'default',
  size: 'medium',
  action: 'none',
  type: 'button',
  disabled: false
};
