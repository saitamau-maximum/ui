import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';
import { Button } from '../button';

import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const Cards = (args: Story['args']) => (
  <HStack>
    <VStack theme="light">
      <Card size="lg" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
      <Card size="md" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
      <Card size="sm" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
    </VStack>
    <VStack theme="dark">
      <Card size="lg" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
      <Card size="md" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
      <Card size="sm" {...args}>
        <Button variant="primary">Button</Button>
      </Card>
    </VStack>
  </HStack>
);

export const Default = (args: Story['args']) => <Cards {...args} />;
export const Fit = (args: Story['args']) => <Cards {...args} fit />;
export const Sm = () => (
  <HStack>
    <VStack theme="light">
      <Card size="sm" fit>
        This is a card.
      </Card>
    </VStack>
  </HStack>
);
export const Md = () => (
  <HStack>
    <VStack theme="light">
      <Card size="md" fit>
        This is a card.
      </Card>
    </VStack>
  </HStack>
);
export const Lg = () => (
  <HStack>
    <VStack theme="light">
      <Card size="lg" fit>
        This is a card.
      </Card>
    </VStack>
  </HStack>
);
