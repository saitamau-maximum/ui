import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Buttons = (args: Story['args']) => (
  <HStack>
    <VStack theme="light">
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="tertiary" {...args}>
        Tertiary
      </Button>
    </VStack>
    <VStack theme="dark">
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="tertiary" {...args}>
        Tertiary
      </Button>
    </VStack>
  </HStack>
);

export const Default = (args: Story['args']) => <Buttons {...args} />;

export const Disabled = (args: Story['args']) => <Buttons {...args} disabled />;
