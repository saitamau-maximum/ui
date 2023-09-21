import { ReactNode } from 'react';

interface HStackProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  noPadding?: boolean;
  width?: number | string;
  height?: number | string;
}

export const HStack = ({
  children,
  theme,
  align = 'flex-start',
  noPadding,
  width,
  height,
}: HStackProps) => (
  <div
    className={theme}
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      padding: noPadding ? 0 : 16,
      alignItems: align,
      backgroundColor: (() => {
        if (theme === 'light') return 'var(--color-gray-100)';
        if (theme === 'dark') return 'var(--color-gray-800)';
      })(),
      color: (() => {
        if (theme === 'light') return 'var(--color-gray-900)';
        if (theme === 'dark') return 'var(--color-gray-50)';
      })(),
      width,
      height,
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {children}
  </div>
);
