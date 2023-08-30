import clsx from 'clsx';
import { ReactNode, createContext, useContext } from 'react';

import { Card } from '../card';

import styles from './Timeline.module.scss';

interface ContainerProps {
  children?: ReactNode;
  expand?: boolean;
}

const isExpandContext = createContext(false);

const Container = ({ children, expand }: ContainerProps) => {
  return (
    <isExpandContext.Provider value={!!expand}>
      <table
        className={clsx(
          styles.TimelineContainer,
          expand && styles.TimelineContainerExpand,
        )}
      >
        {children}
      </table>
    </isExpandContext.Provider>
  );
};

interface ItemProps {
  label: string;
  labelWidth?: number;
  children?: ReactNode;
  active?: boolean;
}

const Item = ({ children, label, active }: ItemProps) => {
  const expand = useContext(isExpandContext);

  return (
    <tr className={styles.TimelineItem}>
      <td className={styles.TimelineItemLeft}>
        <time
          className={clsx(
            styles.TimelineItemLabel,
            active && styles.TimelineItemLabelActive,
          )}
        >
          {label}
        </time>
      </td>
      <td className={styles.TimelineItemCenter}>
        <div
          className={clsx(
            styles.TimelineItemPoint,
            active && styles.TimelineItemPointActive,
          )}
        />
        <div className={styles.TimelineItemLine}></div>
      </td>
      <td className={clsx(expand && styles.TimelineItemRightExpand)}>
        <Card size="sm">{children}</Card>
      </td>
    </tr>
  );
};

export const Timeline = {
  Container,
  Item,
};
