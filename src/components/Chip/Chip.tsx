import React from 'react';
import type { ChipProps } from './Chip.types';
import styles from './Chip.module.css';
import { cn } from '../../utils/cn';

/**
 * Chip
 * Figma: Components > Chips
 * Supports filter, suggestion, and input (removable) variants.
 */
export const Chip: React.FC<ChipProps> = ({
  variant = 'filter',
  size = 'md',
  selected = false,
  removable = false,
  onRemove,
  icon,
  children,
  className,
  onClick,
  ...rest
}) => (
  <button
    type="button"
    className={cn(
      styles.chip,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      selected && styles.selected,
      className,
    )}
    onClick={onClick}
    {...rest}
  >
    {icon && <span className={styles.icon}>{icon}</span>}
    {children}
    {removable && (
      <button
        type="button"
        className={styles.removeBtn}
        aria-label="Remove"
        onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
        tabIndex={-1}
      >
        ×
      </button>
    )}
  </button>
);

Chip.displayName = 'Chip';
