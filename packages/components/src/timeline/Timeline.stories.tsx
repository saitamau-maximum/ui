import { Container } from '../__stories__/containter';
import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';

import { Timeline } from './Timeline';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Timeline.Container> = {
  component: Timeline.Container,
};

export default meta;

export const Default = () => (
  <HStack>
    <VStack theme="light">
      <Timeline.Container>
        <Timeline.Item label="2021-01-01">
          競プロのコンテスト○○を開催しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-02" active>
          ××に参加し、3位入賞を果たしました
        </Timeline.Item>
        <Timeline.Item label="2021-01-03">
          △△をこちらにて公開しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-04" active>
          ◻︎◻︎を新たにリニューアルしました
        </Timeline.Item>
      </Timeline.Container>
    </VStack>
    <VStack theme="dark">
      <Timeline.Container>
        <Timeline.Item label="2021-01-01" active>
          競プロのコンテスト○○を開催しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-02">
          ××に参加し、3位入賞を果たしました
        </Timeline.Item>
        <Timeline.Item label="2021-01-03" active>
          △△をこちらにて公開しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-04">
          ◻︎◻︎を新たにリニューアルしました
        </Timeline.Item>
      </Timeline.Container>
    </VStack>
  </HStack>
);

export const Expand = () => (
  <>
    <Container theme="light">
      <Timeline.Container expand>
        <Timeline.Item label="2021-01-01" expand>
          競プロのコンテスト○○を開催しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-02" active expand>
          ××に参加し、3位入賞を果たしました
        </Timeline.Item>
        <Timeline.Item label="2021-01-03" expand>
          △△をこちらにて公開しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-04" active expand>
          ◻︎◻︎を新たにリニューアルしました
        </Timeline.Item>
      </Timeline.Container>
    </Container>
    <Container theme="dark">
      <Timeline.Container>
        <Timeline.Item label="2021-01-01" active expand>
          競プロのコンテスト○○を開催しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-02" expand>
          ××に参加し、3位入賞を果たしました
        </Timeline.Item>
        <Timeline.Item label="2021-01-03" active expand>
          △△をこちらにて公開しました
        </Timeline.Item>
        <Timeline.Item label="2021-01-04" expand>
          ◻︎◻︎を新たにリニューアルしました
        </Timeline.Item>
      </Timeline.Container>
    </Container>
  </>
);
