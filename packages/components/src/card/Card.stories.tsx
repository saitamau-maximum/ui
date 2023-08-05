import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';
import { Button } from '../button';

import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

const Cards = (args: Story['args']) => (
  <HStack>
    <VStack theme="light">
      <Card size="lg" {...args}>
        <Button variant="primary">Large</Button>
      </Card>
      <Card size="md" {...args}>
        <Button variant="primary">Medium</Button>
      </Card>
      <Card size="sm" {...args}>
        <Button variant="primary">Small</Button>
      </Card>
    </VStack>
    <VStack theme="dark">
      <Card size="lg" {...args}>
        <Button variant="primary">Large</Button>
      </Card>
      <Card size="md" {...args}>
        <Button variant="primary">Medium</Button>
      </Card>
      <Card size="sm" {...args}>
        <Button variant="primary">Small</Button>
      </Card>
    </VStack>
  </HStack>
);

export const Default = (args: Story['args']) => <Cards {...args} />;
