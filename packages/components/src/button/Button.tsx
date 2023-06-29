import { forwardRef, memo } from 'react';

import type { ReactNode, Ref, ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const _Button = (
  { children, ...rect }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <button ref={ref} {...rect}>
      {children}
    </button>
  );
};

export const Button = memo(forwardRef(_Button));
