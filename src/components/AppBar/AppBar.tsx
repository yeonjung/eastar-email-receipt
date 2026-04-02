import React, { useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './AppBar.module.css';

export type AppBarVariant = 'top' | 'bottom' | 'gnb';
export interface NavItem { key: string; label: string; icon?: ReactNode; }

/** GNB menu item with optional submenu (mega menu) */
export interface GnbMenuItem {
  key: string;
  label: string;
  href?: string;
  children?: Array<{ key: string; label: string; href?: string }>;
}

export interface AppBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * - top: Mobile/tablet top navigation bar (56px, title + back + actions)
   * - bottom: Mobile bottom tab bar (50px, icon + label nav items)
   * - gnb: Desktop Global Navigation Bar (64px, logo + menu + auth)
   *   Source: Figma 공통요소 가이드 > GNB (height: 64px)
   * @default 'top'
   */
  variant?: AppBarVariant;

  // ── top bar ──────────────────────────────────
  /** Page title shown in top bar center */
  title?: string;
  /** Shows back button in top bar leading area */
  onBack?: () => void;
  /** Right-side action slot (top bar) */
  actions?: ReactNode;

  // ── bottom bar ───────────────────────────────
  /** Nav items for bottom tab bar */
  navItems?: NavItem[];
  activeNavKey?: string;
  onNavChange?: (key: string) => void;

  // ── GNB (desktop) ────────────────────────────
  /** Brand logo slot */
  logo?: ReactNode;
  /** Main nav menu items */
  menuItems?: GnbMenuItem[];
  /** Active menu key */
  activeMenuKey?: string;
  /** Right-side auth/action slot (GNB) */
  gnbActions?: ReactNode;
  /** Whether user is logged in (affects auth slot) */
  isLoggedIn?: boolean;
  /** Login button click */
  onLogin?: () => void;
  /** Signup button click */
  onSignup?: () => void;

  /** Transparent background (all variants) */
  transparent?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({
  variant = 'top',
  title, onBack, actions,
  navItems, activeNavKey, onNavChange,
  logo, menuItems, activeMenuKey, gnbActions, isLoggedIn, onLogin, onSignup,
  transparent = false, className, ...rest
}) => {
  const [openMenuKey, setOpenMenuKey] = useState<string | null>(null);

  /* ── GNB (Desktop) ─────────────────────────────────────────────── */
  if (variant === 'gnb') {
    return (
      <header
        className={cn(styles.gnb, transparent && styles.transparent, className)}
        {...rest}
      >
        {/* Logo */}
        <div className={styles.gnbLogo}>
          {logo ?? <span className={styles.gnbLogoText}>EASTAR JET</span>}
        </div>

        {/* Main Menu */}
        <nav className={styles.gnbMenu} aria-label="Main navigation">
          {menuItems?.map(item => (
            <div
              key={item.key}
              className={styles.gnbMenuItemWrap}
              onMouseEnter={() => item.children && setOpenMenuKey(item.key)}
              onMouseLeave={() => setOpenMenuKey(null)}
            >
              <button
                type="button"
                className={cn(
                  styles.gnbMenuItem,
                  activeMenuKey === item.key && styles.gnbMenuActive,
                )}
                aria-expanded={openMenuKey === item.key}
              >
                {item.label}
              </button>

              {/* Mega Menu / Dropdown */}
              {item.children && openMenuKey === item.key && (
                <div className={styles.gnbDropdown}>
                  {item.children.map(child => (
                    <a key={child.key} href={child.href ?? '#'} className={styles.gnbDropdownItem}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Auth / Actions */}
        <div className={styles.gnbActions}>
          {gnbActions}
          {!gnbActions && !isLoggedIn && (
            <>
              <button type="button" className={styles.gnbAuthBtn} onClick={onLogin}>로그인</button>
              <button type="button" className={cn(styles.gnbAuthBtn, styles.gnbSignupBtn)} onClick={onSignup}>회원가입</button>
            </>
          )}
          {!gnbActions && isLoggedIn && (
            <button type="button" className={styles.gnbAuthBtn}>마이페이지</button>
          )}
        </div>
      </header>
    );
  }

  /* ── Bottom Tab Bar ─────────────────────────────────────────────── */
  if (variant === 'bottom') {
    return (
      <nav className={cn(styles.bottomBar, transparent && styles.transparent, className)} {...rest}>
        {navItems?.map(item => (
          <button
            key={item.key}
            type="button"
            className={cn(styles.navItem, activeNavKey === item.key && styles.navActive)}
            onClick={() => onNavChange?.(item.key)}
          >
            {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
            <span className={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </nav>
    );
  }

  /* ── Mobile Top Bar ─────────────────────────────────────────────── */
  return (
    <header className={cn(styles.topBar, transparent && styles.transparent, className)} {...rest}>
      <div className={styles.leading}>
        {onBack && (
          <button type="button" className={styles.backBtn} onClick={onBack} aria-label="뒤로가기">
            ‹
          </button>
        )}
      </div>
      {title && <h1 className={styles.title}>{title}</h1>}
      <div className={styles.trailing}>{actions}</div>
    </header>
  );
};

AppBar.displayName = 'AppBar';
