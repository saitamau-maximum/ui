import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'react-feather';

import styles from './SelectBox.module.scss';

type SingleGroupOptions = {
  label: string;
  value: string;
}[];

type GroupedOptions = {
  label: string;
  options: SingleGroupOptions;
}[];

export type Props = {
  expanded?: boolean;
  placeholder?: string;
  /** don't use this prop, it's for storybook only */
  _theme?: 'light' | 'dark';
  value?: string;
  onValueChange?: (value: string) => void;
} & (
  | {
      options: SingleGroupOptions;
      groupedOptions?: undefined;
    }
  | {
      options?: undefined;
      groupedOptions: GroupedOptions;
    }
);

const SelectBoxItems = ({ options }: { options: SingleGroupOptions }) => {
  return options.map((option) => (
    <Select.Item
      key={option.value}
      value={option.value}
      className={styles.item}
    >
      <Select.ItemText>{option.label}</Select.ItemText>
    </Select.Item>
  ));
};

const SelectBoxGroups = ({
  groupedOptions,
}: {
  groupedOptions: GroupedOptions;
}) => {
  return groupedOptions.map((group, i) => (
    <>
      <Select.Group key={group.label}>
        <Select.Label className={styles.groupLabel}>{group.label}</Select.Label>
        <SelectBoxItems options={group.options} />
      </Select.Group>
      {i < groupedOptions.length - 1 && (
        <Select.Separator className={styles.separator} />
      )}
    </>
  ));
};

export const SelectBox = ({
  expanded = false,
  options,
  groupedOptions,
  placeholder = 'Select an option',
  value,
  onValueChange,
  _theme,
}: Props) => {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className={clsx(styles.trigger, expanded && styles.expanded)}
      >
        <Select.Value placeholder={placeholder} className={styles.value} />
        <Select.Icon className={styles.icon}>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={clsx(_theme, styles.content)}
          position="popper"
          sideOffset={8}
        >
          <Select.ScrollUpButton className={styles.scrollButton}>
            <ChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport>
            {options && <SelectBoxItems options={options} />}
            {groupedOptions && (
              <SelectBoxGroups groupedOptions={groupedOptions} />
            )}
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.scrollButton}>
            <ChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
