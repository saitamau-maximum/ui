import { Menu, User } from 'react-feather';

import { HStack } from '../__stories__/h-stack';
import { VStack } from '../__stories__/v-stack';
import { Button } from '../button';

import { Header, HeaderProps } from './Header';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

const LargeHeaders = (args: HeaderProps) => {
  return (
    <VStack align="stretch">
      <VStack theme="light" noPadding height="50vh">
        <Header {...args} />
      </VStack>
      <VStack theme="dark" noPadding height="50vh">
        <Header {...args} />
      </VStack>
    </VStack>
  );
};

const SmallHeaders = (args: HeaderProps) => {
  return (
    <HStack align="stretch">
      <VStack theme="light" noPadding height="80vh" width="390px">
        <Header {...args} />
      </VStack>
      <VStack theme="dark" noPadding height="80vh" width="390px">
        <Header {...args} />
      </VStack>
    </HStack>
  );
};

const NAVIGATIONS = [
  {
    name: 'ホーム',
    href: '/',
    active: true,
  },
  {
    name: '活動',
    href: '/activities',
    active: false,
  },
  {
    name: '実績',
    href: '/works',
    active: false,
  },
  {
    name: '会員専用',
    href: '/members-only',
    active: false,
  },
  {
    name: 'Blog',
    href: 'https://blog.maximum.vc',
    active: false,
    external: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/maximum_vc',
    active: false,
    external: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/saitamau-maximum',
    active: false,
    external: true,
  },
];

export const VariantLg = () => (
  <LargeHeaders navigations={NAVIGATIONS} variant="lg">
    <Button leftIcon={<User />} variant="tertiary" />
  </LargeHeaders>
);

export const VariantMd = () => (
  <LargeHeaders navigations={NAVIGATIONS} variant="md">
    <Button leftIcon={<User />} variant="tertiary" />
  </LargeHeaders>
);

export const VariantSm = () => (
  <SmallHeaders navigations={NAVIGATIONS} variant="sm">
    <Button leftIcon={<User />} variant="tertiary" />
    <Button leftIcon={<Menu />} variant="tertiary" />
  </SmallHeaders>
);

export const Sticky = () => (
  <SmallHeaders navigations={NAVIGATIONS} variant="sm" sticky>
    <Button leftIcon={<User />} variant="tertiary" />
    <Button leftIcon={<Menu />} variant="tertiary" />
  </SmallHeaders>
);
