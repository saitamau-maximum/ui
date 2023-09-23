import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import { ChevronDown } from 'react-feather';

import styles from './SelectBox.module.scss';

export type Props = {
  expanded?: boolean;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  /** don't use this prop, it's for storybook only */
  _theme?: 'light' | 'dark';
};

export const SelectBox = ({
  expanded = false,
  options,
  placeholder = 'Select an option',
  _theme,
}: Props) => {
  return (
    <Select.Root>
      <Select.Trigger
        className={clsx(styles.trigger, expanded && styles.expanded)}
      >
        <Select.Value placeholder={placeholder} className={styles.value} />
        <Select.Icon className={styles.icon}>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={clsx(_theme, styles.content)}>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className={styles.item}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
