import React from 'react';
import type { ChipPassengerProps } from './ChipPassenger.types';
import styles from './ChipPassenger.module.css';
import { cn } from '../../utils/cn';
import { Badge } from '../Badge/Badge';

/**
 * ChipPassenger
 * Figma: Chips > Chips/Passenger
 * Card-shaped chip (220×72) displaying passenger info and entry status.
 * Used in booking flows (탑승객 정보 입력).
 */
export const ChipPassenger: React.FC<ChipPassengerProps> = ({
  active = false,
  passengerIndex = '1.',
  passengerLabel = '성인',
  secondName = '',
  firstName = '',
  state = 'selecting',
  className,
  ...rest
}) => {
  const badgeVariant =
    state === 'selected'    ? 'status-complete' :
    state === 'not-entered' ? 'status-empty'    :
                              'status-progress';

  const badgeLabel =
    state === 'selected'    ? '입력완료' :
    state === 'not-entered' ? '미입력'   :
                              '입력 중';

  const hasName = (state === 'selected' || state === 'selecting') && (secondName || firstName);

  return (
    <div
      className={cn(styles.chip, active && styles.active, className)}
      {...rest}
    >
      {/* Row 1: passenger index + label + status badge */}
      <div className={styles.nameRow}>
        <div className={styles.passengerInfo}>
          <span className={styles.passengerIndex}>{passengerIndex}</span>
          <span className={styles.passengerLabel}>{passengerLabel}</span>
        </div>
        <Badge type="label" variant={badgeVariant} label={badgeLabel} size="sm" />
      </div>

      {/* Row 2: secondName / firstName or empty placeholder */}
      <div className={styles.stateRow}>
        {hasName ? (
          <div className={styles.nameText}>
            {secondName && <span className={styles.namePart}>{secondName}</span>}
            <span className={styles.namePart}>/</span>
            {firstName && <span className={styles.namePartFlex}>{firstName}</span>}
          </div>
        ) : (
          <span className={styles.emptyPlaceholder}>-</span>
        )}
      </div>
    </div>
  );
};

ChipPassenger.displayName = 'ChipPassenger';
