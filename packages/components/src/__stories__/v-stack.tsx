import { ReactNode } from 'react';

interface VStackProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const VStack = ({ children, theme }: VStackProps) => (
  <div
    className={theme}
    style={{
      display: 'flex',
      flexDirection: 'column',
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
