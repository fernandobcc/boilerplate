import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'test3',
    describe: 'test4'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
