import { clsx } from 'clsx';
import { forwardRef, memo } from 'react';

import styles from './Button.module.scss';

import type { ReactNode, Ref, ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  // iconはrightIconのエイリアス
  icon?: ReactNode;
}

const _Button = (
  {
    children,
    className,
    variant = 'primary',
    leftIcon,
    rightIcon,
    icon,
    ...rect
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const noText = !children;

  return (
    <button
      ref={ref}
      {...rect}
      className={clsx(
        styles.button,
        className,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'tertiary' && styles.tertiary,
        noText ? styles.iconOnly : styles.withText,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon || icon}
    </button>
  );
};

export const Button = memo(forwardRef(_Button));
