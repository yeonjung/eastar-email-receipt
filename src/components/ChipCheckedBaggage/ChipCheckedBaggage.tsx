import React from 'react';
import type { ChipCheckedBaggageProps } from './ChipCheckedBaggage.types';
import styles from './ChipCheckedBaggage.module.css';
import { cn } from '../../utils/cn';
import { Icon, IconPaths } from '../Icon/Icon';

/**
 * ChipCheckedBaggage
 * Figma: Chips > Chips/CheckedBaggage
 * Card-shaped chip (220×72) for selecting checked baggage per passenger.
 * Used in booking flows (수하물 선택).
 */
export const ChipCheckedBaggage: React.FC<ChipCheckedBaggageProps> = ({
  active = false,
  passengerIndex = '1. ',
  secondName = '홍',
  firstName = '길동',
  state = 'selecting',
  totalKg = '5',
  onRemove,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(styles.chip, active && styles.active, className)}
      {...rest}
    >
      {/* Row 1: passenger index + secondName / firstName (각각 overflow 처리) */}
      <div className={cn(styles.nameRow, state === 'selected' && styles.nameRowSelected)}>
        <span className={styles.passengerIndex}>{passengerIndex}</span>
        <div className={styles.nameSubContainer}>
          <span className={styles.namePart}>{secondName}</span>
          <span className={styles.nameSeparator}>/</span>
          <span className={styles.namePartFlex}>{firstName}</span>
        </div>
      </div>

      {/* Row 2: current state */}
      <div className={styles.stateRow}>
        {state === 'selected' ? (
          <>
            <div className={styles.selectedKg}>
              <span>+</span>
              <span>{totalKg}</span>
              <span>kg</span>
            </div>
            {/* Remove button */}
            <button
              type="button"
              className={styles.removeBtn}
              aria-label="수하물 선택 취소"
              onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
              tabIndex={-1}
            >
              <Icon path={IconPaths.close} size="sm" aria-hidden />
            </button>
          </>
        ) : (
          <span
            className={cn(
              styles.statusText,
              state === 'not-selected'
                ? styles['statusText-not-selected']
                : styles['statusText-selecting'],
            )}
          >
            {state === 'not-selected' ? '미선택' : '지금 선택 중...'}
          </span>
        )}
      </div>
    </div>
  );
};

ChipCheckedBaggage.displayName = 'ChipCheckedBaggage';
