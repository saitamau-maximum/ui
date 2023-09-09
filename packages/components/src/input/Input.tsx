import clsx from 'clsx';

import styles from './Input.module.scss';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & {
  expanded?: boolean;
};

export const Input = ({ expanded = false, ...props }: Props) => {
  return (
    <input
      className={clsx(styles.input, expanded && styles.expanded)}
      {...props}
    />
  );
};
