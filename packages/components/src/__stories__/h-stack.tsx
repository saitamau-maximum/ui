import { ReactNode } from 'react';

interface HStackProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const HStack = ({ children, theme }: HStackProps) => (
  <div
    className={theme}
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 16,
      padding: 16,
      alignItems: 'flex-start',
      backgroundColor: (() => {
        if (theme === 'light') return '#f3f4f6';
        if (theme === 'dark') return '#1f2937';
      })(),
    }}
  >
    {children}
  </div>
);
