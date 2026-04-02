import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ChipVariant = 'filter' | 'suggestion' | 'input';
export type ChipSize = 'md' | 'sm';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'filter' */
  variant?: ChipVariant;
  /** @default 'md' */
  size?: ChipSize;
  /** Whether the chip is selected/active. */
  selected?: boolean;
  /** Shows a remove (×) button. Used with variant="input". */
  removable?: boolean;
  /** Callback when the remove button is clicked. */
  onRemove?: () => void;
  /** Leading icon. */
  icon?: ReactNode;
  children: ReactNode;
}
