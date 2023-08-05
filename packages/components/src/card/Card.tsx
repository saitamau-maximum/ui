import { clsx } from 'clsx';

import styles from './Card.module.scss';

import type { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASS = {
  sm: styles.card__sm,
  md: styles.card__md,
  lg: styles.card__lg,
};

export const Card = ({ children, size = 'md' }: CardProps) => {
  return <div className={clsx(styles.card, SIZE_CLASS[size])}>{children}</div>;
};
