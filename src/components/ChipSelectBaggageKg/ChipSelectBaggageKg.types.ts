import type { HTMLAttributes } from 'react';

/**
 * Figma: Chips > Chips/SelectBaggageKg
 * Chip card for selecting additional baggage weight option.
 * Displays +kg amount, total kg, and price.
 */
export type ChipSelectBaggageKgDevice = 'desktop' | 'phone';

export interface ChipSelectBaggageKgProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Responsive variant. @default "desktop" */
  device?: ChipSelectBaggageKgDevice;
  /** Additional baggage kg (e.g. "5"). @default "5" */
  kg?: string;
  /** Total baggage kg including base allowance (e.g. "20"). @default "20" */
  totalKg?: string;
  /** Price text (e.g. "15,000"). @default "15,000" */
  price?: string;
  /** Whether this option is currently selected. @default false */
  selected?: boolean;
  /** Callback when chip is clicked. */
  onClick?: () => void;
}
