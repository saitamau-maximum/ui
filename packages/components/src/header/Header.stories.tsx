import { Menu, User } from 'react-feather';

import { Container } from '../__stories__/containter';
import { VStack } from '../__stories__/v-stack';
import { Button } from '../button';

import { Header, HeaderProps } from './Header';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

const Headers = (args: HeaderProps) => (
  <Container>
    <VStack theme="light">
      <Header {...args} />
      <div style={{ height: '50vh' }} />
    </VStack>
    <VStack theme="dark">
      <Header {...args} />
      <div style={{ height: '50vh' }} />
    </VStack>
  </Container>
);

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

export const Default = () => (
  <Headers navigations={NAVIGATIONS} variant="lg">
    <Button leftIcon={<User />} variant="tertiary" />
  </Headers>
);

export const HideExternal = () => (
  <Headers navigations={NAVIGATIONS} variant="md">
    <Button leftIcon={<User />} variant="tertiary" />
  </Headers>
);

export const WithHamburger = () => (
  <Headers navigations={NAVIGATIONS} variant="sm">
    <Button leftIcon={<User />} variant="tertiary" />
    <Button leftIcon={<Menu />} variant="tertiary" />
  </Headers>
);
