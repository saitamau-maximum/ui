import clsx from 'clsx';
import { ReactNode } from 'react';

import { Card } from '../card';

import styles from './Timeline.module.scss';

interface ContainerProps {
  children?: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <table className={styles.TimelineContainer}>{children}</table>;
};

interface ItemProps {
  label: string;
  labelWidth?: number;
  children?: ReactNode;
  active?: boolean;
}

const Item = ({ children, label, active }: ItemProps) => {
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
      <td>
        <Card className={styles.TimelineItemRight} size="sm">
          {children}
        </Card>
      </td>
    </tr>
  );
};

export const Timeline = {
  Container,
  Item,
};
