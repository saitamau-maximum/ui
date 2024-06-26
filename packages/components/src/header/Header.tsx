import { clsx } from 'clsx';
import { ArrowUpRight, X } from 'react-feather';

import { Button } from '../button';

import styles from './Header.module.scss';

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
  iconSrc: string;
  dropdownOpen?: boolean;
  dropdownChildren?: React.ReactNode;
  onDropdownClose?: () => void;
}

export const Header = ({
  navigations,
  children,
  link,
  iconSrc,
  dropdownOpen,
  dropdownChildren,
  onDropdownClose,
}: HeaderProps) => {
  const Link = link ?? 'a';
  const externalNavigations = navigations.filter((nav) => nav.external);
  const internalNavigations = navigations.filter((nav) => !nav.external);

  return (
    <>
      <header className={clsx(styles.header, dropdownOpen && styles.open)}>
        <div className={styles.headerInner}>
          <nav className={styles.nav}>
            <Link to="/" href="/" className={styles.logoLink}>
              <img className={styles.logo} src={iconSrc} alt="Maximum Logo" />
            </Link>
            <ul className={styles.navList}>
              {navigations.map((nav) => (
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
                      className={clsx(styles.navText, styles.notCurrentNavText)}
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
          </nav>
          <div className={styles.actionArea}>{children}</div>
        </div>
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownLinks}>
              {internalNavigations.length > 0 && (
                <ul className={styles.dropdownLinksItem}>
                  {internalNavigations.map((nav) => (
                    <li key={nav.href} className={styles.dropdownLink}>
                      <Link
                        to={nav.href}
                        href={nav.href}
                        className={styles.dropdownLinkText}
                        onClick={onDropdownClose}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {externalNavigations.length > 0 && (
                <ul className={styles.dropdownLinksItem}>
                  {externalNavigations.map((nav) => (
                    <li key={nav.href} className={styles.dropdownLink}>
                      <Link
                        to={nav.href}
                        href={nav.href}
                        className={styles.dropdownLinkText}
                        target="_blank"
                      >
                        {nav.name}
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.dropdownDivider} />
            <div className={styles.dropdownActions}>
              {dropdownChildren}
              <Button
                onClick={onDropdownClose}
                className={styles.dropdownCloseButton}
                type="button"
                variant="tertiary"
                leftIcon={<X size={20} strokeWidth={2} />}
              >
                閉じる
              </Button>
            </div>
          </div>
        )}
      </header>
      {dropdownOpen && (
        <div
          className={styles.dropdownBackdrop}
          onClick={onDropdownClose}
          role="presentation"
        />
      )}
    </>
  );
};
