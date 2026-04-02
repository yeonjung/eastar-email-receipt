import type { HTMLAttributes } from 'react';

/** Figma: Badges — type(count | dot | label), variant(primary | success | error | warning | info | neutral | status-complete | status-progress | status-empty) */
export type BadgeVariant =
  | 'primary' | 'success' | 'error' | 'warning' | 'info' | 'neutral'
  /** Passenger status badge variants — rectangular shape (border-radius: 8px) */
  | 'status-complete' | 'status-progress' | 'status-empty';
export type BadgeType = 'count' | 'dot' | 'label';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** @default 'count' */
  type?: BadgeType;
  /** @default 'primary' */
  variant?: BadgeVariant;
  /** @default 'md' */
  size?: BadgeSize;
  /** Numeric count (type="count"). Displays "99+" when > max. */
  count?: number;
  /** Max count before showing "N+". @default 99 */
  max?: number;
  /** Text label (type="label"). */
  label?: string;
}
