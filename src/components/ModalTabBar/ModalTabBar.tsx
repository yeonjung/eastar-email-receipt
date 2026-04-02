import React from 'react';
import type { ModalTabBarProps } from './ModalTabBar.types';
import styles from './ModalTabBar.module.css';
import { cn } from '../../utils/cn';
import { Icon, IconPaths } from '../Icon/Icon';

/**
 * ModalTabBar
 * Figma: Components > ModalTabBar
 * Tab bar used inside flight selection modals.
 * - Desktop: tabs centered with red background on active, close (×) button
 * - Phone: tabs left-aligned with underline on active
 */
export const ModalTabBar: React.FC<ModalTabBarProps> = ({
  activeTab = 'outbound',
  device = 'desktop',
  onTabChange,
  onClose,
  className,
  ...rest
}) => {
  const isDesktop = device === 'desktop';

  const tabs = [
    { key: 'outbound' as const, label: '가는편' },
    { key: 'inbound'  as const, label: '오는편'  },
  ];

  return (
    <div
      className={cn(
        styles.bar,
        isDesktop ? styles['bar-desktop'] : styles['bar-phone'],
        className,
      )}
      role="tablist"
      aria-label="항공편 선택"
      {...rest}
    >
      {tabs.map(({ key, label }) => {
        const isActive = activeTab === key;
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(
              styles.tab,
              isActive && (isDesktop ? styles['tab-desktop-active'] : styles['tab-phone-active']),
            )}
            onClick={() => onTabChange?.(key)}
          >
            {label}
          </button>
        );
      })}

      {/* Close button — desktop only */}
      {isDesktop && (
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="닫기"
          onClick={onClose}
        >
          <Icon path={IconPaths.close} size="md" aria-hidden />
        </button>
      )}
    </div>
  );
};

ModalTabBar.displayName = 'ModalTabBar';
