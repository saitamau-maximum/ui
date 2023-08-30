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
        if (theme === 'light') return 'var(--color-gray-100)';
        if (theme === 'dark') return 'var(--color-gray-800)';
      })(),
      color: (() => {
        if (theme === 'light') return 'var(--color-gray-900)';
        if (theme === 'dark') return 'var(--color-gray-50)';
      })(),
    }}
  >
    {children}
  </div>
);
