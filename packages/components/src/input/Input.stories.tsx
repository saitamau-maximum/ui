import { Container } from '../__stories__/containter';
import { VStack } from '../__stories__/v-stack';

import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const Inputs = (args: Story['args']) => (
  <Container>
    <VStack theme="light">
      <Input {...args} />
    </VStack>
    <VStack theme="dark">
      <Input {...args} />
    </VStack>
  </Container>
);
const ContainerInputs = (args: Story['args']) => (
  <Container>
    <Container theme="light">
      <Input {...args} />
    </Container>
    <Container theme="dark">
      <Input {...args} />
    </Container>
  </Container>
);

export const Default = (args: Story['args']) => <Inputs {...args} />;
export const Disabled = (args: Story['args']) => <Inputs disabled {...args} />;
export const Placeholder = (args: Story['args']) => (
  <Inputs placeholder="Placeholder" {...args} />
);
export const Value = (args: Story['args']) => (
  <Inputs value="Value" {...args} />
);

export const Expanded = (args: Story['args']) => (
  <ContainerInputs expanded {...args} />
);
