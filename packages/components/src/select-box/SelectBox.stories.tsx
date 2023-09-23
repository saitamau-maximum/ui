import { Container } from '../__stories__/containter';
import { VStack } from '../__stories__/v-stack';

import { Props, SelectBox } from './SelectBox';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
};

export default meta;

const SelectBoxes = (args: Props) => (
  <Container>
    <VStack theme="light">
      <SelectBox {...args} _theme="light" />
    </VStack>
    <VStack theme="dark">
      <SelectBox {...args} _theme="dark" />
    </VStack>
  </Container>
);

const DUMMY_OPTIONS = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option Option 2', value: 'option-2' },
  { label: 'Option Option Option 3', value: 'option-3' },
];

export const Default = () => <SelectBoxes options={DUMMY_OPTIONS} />;

export const Expanded = () => <SelectBoxes expanded options={DUMMY_OPTIONS} />;
