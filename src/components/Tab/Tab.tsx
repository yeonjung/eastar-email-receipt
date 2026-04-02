import { useState } from 'react';
import { cn } from '../../utils/cn';
import styles from './Tab.module.css';

export interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
  badge?: number;
}
export interface TabProps {
  items: TabItem[];
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  /** @default 'line' */
  variant?: 'line' | 'filled';
  /** @default 'md' */
  size?: 'md' | 'sm';
  scrollable?: boolean;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items,
  activeKey: controlledKey,
  defaultActiveKey,
  onChange,
  variant = 'line',
  size = 'md',
  scrollable = false,
  className,
}) => {
  const [internalKey, setInternalKey] = useState(defaultActiveKey ?? items[0]?.key);
  const active = controlledKey ?? internalKey;

  const handleClick = (key: string) => {
    setInternalKey(key);
    onChange?.(key);
  };

  return (
    <div role="tablist" className={cn(styles.tablist, styles[`variant-${variant}`], styles[`size-${size}`], scrollable && styles.scrollable, className)}>
      {items.map(item => (
        <button
          key={item.key}
          role="tab"
          type="button"
          aria-selected={active === item.key}
          disabled={item.disabled}
          className={cn(styles.tab, active === item.key && styles.active)}
          onClick={() => !item.disabled && handleClick(item.key)}
        >
          {item.label}
          {item.badge !== undefined && (
            <span className={cn(styles.badge, active === item.key && styles.badgeActive)}>{item.badge}</span>
          )}
        </button>
      ))}
    </div>
  );
};
Tab.displayName = 'Tab';
