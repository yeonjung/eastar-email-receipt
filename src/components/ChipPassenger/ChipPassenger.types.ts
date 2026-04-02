import type { HTMLAttributes } from 'react';

/**
 * Figma: Chips > Chips/Passenger
 * Card-shaped chip displaying passenger info with 3 status states.
 */
export type ChipPassengerState = 'selecting' | 'selected' | 'not-entered';

export interface ChipPassengerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Whether this chip is the active/focused item. Shows red border when true. @default false */
  active?: boolean;
  /** Passenger index with period (e.g. "1.", "2."). @default "1." */
  passengerIndex?: string;
  /** Passenger type label (e.g. "성인", "소아", "유아"). @default "성인" */
  passengerLabel?: string;
  /** Second name / 성 (e.g. "홍"). Shown when state is "selected" or "selecting". */
  secondName?: string;
  /** First name / 이름 (e.g. "길동"). Shown when state is "selected" or "selecting". */
  firstName?: string;
  /** Current entry state of passenger info. @default "selecting" */
  state?: ChipPassengerState;
}
