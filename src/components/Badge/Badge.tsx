import React from 'react';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';
import { cn } from '../../utils/cn';

/**
 * Badge
 * Figma: Components > Badges
 * Displays count, dot indicator, or label.
 */
export const Badge: React.FC<BadgeProps> = ({
  type = 'count',
  variant = 'primary',
  size = 'md',
  count,
  max = 99,
  label,
  className,
  ...rest
}) => {
  const displayText = () => {
    if (type === 'dot') return null;
    if (type === 'count' && count !== undefined) {
      return count > max ? `${max}+` : String(count);
    }
    return label ?? null;
  };

  return (
    <span
      className={cn(
        styles.badge,
        styles[`type-${type}`],
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className,
      )}
      {...rest}
    >
      {displayText()}
    </span>
  );
};

Badge.displayName = 'Badge';
