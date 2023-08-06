import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';
import { Button } from '../button';

import { Tooltip } from './Tooltip';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;

export const Default = () => (
  <HStack>
    <VStack theme="light">
      {/* _theme is for storybook only */}
      <Tooltip content={<div>This is a tooltip.</div>} _theme="light">
        <Button variant="primary">Button</Button>
      </Tooltip>
    </VStack>
    <VStack theme="dark">
      {/* _theme is for storybook only */}
      <Tooltip content={<div>This is a tooltip.</div>} _theme="dark">
        <Button variant="primary">Button</Button>
      </Tooltip>
    </VStack>
  </HStack>
);
