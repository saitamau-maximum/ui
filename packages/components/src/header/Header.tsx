import { clsx } from 'clsx';
import { ArrowUpRight } from 'react-feather';

import styles from './Header.module.scss';
import logo from './logo.svg';

type NavigationItem = {
  name: string;
  href: string;
  active: boolean;
  external?: boolean;
};

type LinkProps =
  | {
      to: string;
      children?: React.ReactNode;
      [key: string]: unknown;
    }
  | {
      href: string;
      children?: React.ReactNode;
      [key: string]: unknown;
    };

export type LinkComponent = React.ComponentType<LinkProps>;

export interface HeaderProps {
  navigations: NavigationItem[];
  children?: React.ReactNode;
  link?: LinkComponent;
  variant: 'lg' | 'md' | 'sm';
}

export const Header = ({
  navigations,
  children,
  link,
  variant,
}: HeaderProps) => {
  const Link = link ?? 'a';
  const externalNavigations = navigations.filter((nav) => nav.external);
  const internalNavigations = navigations.filter((nav) => !nav.external);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <nav className={styles.nav}>
          <Link to="/" href="/" className={styles.logoLink}>
            <img
              className={styles.logo}
              src={logo}
              alt="Maximum Logo"
              width={172}
              height={64}
            />
          </Link>
          {['lg', 'md'].includes(variant) && (
            <ul className={styles.navList}>
              {[
                internalNavigations,
                variant === 'lg' ? externalNavigations : [],
              ]
                .flat()
                .map((nav) => (
                  <li key={nav.href} className={styles.navItem}>
                    {nav.active ? (
                      <span
                        className={clsx(styles.navText, styles.currentNavText)}
                      >
                        {nav.name}
                      </span>
                    ) : (
                      <Link
                        to={nav.href}
                        href={nav.href}
                        className={clsx(
                          styles.navText,
                          styles.notCurrentNavText,
                        )}
                      >
                        {nav.name}
                        {nav.external && (
                          <ArrowUpRight size={16} strokeWidth={2} />
                        )}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </nav>
        <div className={styles.actionArea}>{children}</div>
      </div>
    </header>
  );
};
