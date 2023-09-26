import { Menu, User } from 'react-feather';

import { Container } from '../__stories__/containter';
import { Button } from '../button';

import { Header } from './Header';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

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

export const Light = () => (
  <Container theme="light">
    <Header navigations={NAVIGATIONS} />
  </Container>
);

export const Dark = () => (
  <Container theme="dark">
    <Header navigations={NAVIGATIONS} />
  </Container>
);

export const DropdownOpenLight = () => (
  <Container theme="light">
    <Header navigations={NAVIGATIONS} dropdownOpen>
      <Button leftIcon={<User />} variant="tertiary" />
      <Button leftIcon={<Menu />} variant="tertiary" />
    </Header>
  </Container>
);

export const DropdownOpenDark = () => (
  <Container theme="dark">
    <Header navigations={NAVIGATIONS} dropdownOpen>
      <Button leftIcon={<User />} variant="tertiary" />
      <Button leftIcon={<Menu />} variant="tertiary" />
    </Header>
  </Container>
);
