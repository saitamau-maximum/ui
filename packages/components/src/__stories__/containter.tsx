import { ReactNode } from 'react';

interface HStackProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const Container = ({ children, theme }: HStackProps) => (
  <div
    className={theme}
    style={{
      padding: 16,
      backgroundColor: (() => {
        if (theme === 'light') return 'var(--color-gray-100)';
        if (theme === 'dark') return 'var(--color-gray-800)';
      })(),
      color: (() => {
        if (theme === 'light') return 'var(--color-gray-900)';
        if (theme === 'dark') return 'var(--color-gray-50)';
      })(),
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {children}
  </div>
);
