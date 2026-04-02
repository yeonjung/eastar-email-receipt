import type { HTMLAttributes } from 'react';

/**
 * Figma: Chips > Chips/CheckedBaggage
 * Card-shaped chip for displaying and selecting checked baggage per passenger.
 */
export type ChipCheckedBaggageState = 'selecting' | 'selected' | 'not-selected';

export interface ChipCheckedBaggageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Whether this chip is the active/focused item. @default false */
  active?: boolean;
  /** Passenger index with period and trailing space (e.g. "1. "). @default "1. " */
  passengerIndex?: string;
  /** Second name / 성 (e.g. "홍"). @default "홍" */
  secondName?: string;
  /** First name / 이름 (e.g. "길동"). @default "길동" */
  firstName?: string;
  /** Baggage selection state. @default "selecting" */
  state?: ChipCheckedBaggageState;
  /** Selected baggage weight in kg (shown when state="selected"). @default "5" */
  totalKg?: string;
  /** Callback when the remove (×) button is clicked. */
  onRemove?: () => void;
}
