import * as RadixTooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';

import styles from './Tooltip.module.scss';

import type { ReactNode } from 'react';

export interface TooltipProps {
  children?: ReactNode;
  content?: ReactNode;
  /** don't use this prop, it's for storybook only */
  _theme?: 'light' | 'dark';
}

export const Tooltip = ({ children, content, _theme }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={0}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={clsx(_theme, styles.TooltipContent)}
            sideOffset={8}
          >
            {content}
            <RadixTooltip.Arrow className={styles.TooltipArrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
