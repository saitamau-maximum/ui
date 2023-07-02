import { clsx } from 'clsx';
import { forwardRef, memo } from 'react';

import styles from './Button.module.scss';

import type { ReactNode, Ref, ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const _Button = (
  { children, className, variant = 'primary', ...rect }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
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
      )}
    >
      {children}
    </button>
  );
};

export const Button = memo(forwardRef(_Button));
