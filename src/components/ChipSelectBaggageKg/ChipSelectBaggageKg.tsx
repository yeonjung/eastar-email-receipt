import React from 'react';
import type { ChipSelectBaggageKgProps } from './ChipSelectBaggageKg.types';
import styles from './ChipSelectBaggageKg.module.css';
import { cn } from '../../utils/cn';

/**
 * ChipSelectBaggageKg
 * Figma: Chips > Chips/SelectBaggageKg
 * Card chip (280px) for selecting additional checked baggage weight.
 * Displays the additive kg, total kg after selection, and price.
 */
export const ChipSelectBaggageKg: React.FC<ChipSelectBaggageKgProps> = ({
  device = 'desktop',
  kg = '5',
  totalKg = '20',
  price = '15,000',
  selected = false,
  className,
  onClick,
  ...rest
}) => {
  const isPhone = device === 'phone';

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        styles.chip,
        isPhone && styles.phone,
        selected && styles.selected,
        className,
      )}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      {...rest}
    >
      {/* Row 1: +kg | total kg */}
      <div className={styles.kgRow}>
        <div className={cn(styles.kgAdded, isPhone ? styles['kgAdded-phone'] : styles['kgAdded-desktop'])}>
          <span>+</span>
          <span>{kg}</span>
          <span>kg</span>
        </div>

        {/* Vertical divider */}
        <div className={styles.divider} aria-hidden="true" />

        <div className={cn(styles.kgTotal, isPhone ? styles['kgTotal-phone'] : styles['kgTotal-desktop'])}>
          <span>총</span>
          <span>{totalKg}</span>
          <span>kg</span>
        </div>
      </div>

      {/* Row 2: price */}
      <div className={cn(styles.price, isPhone ? styles['price-phone'] : styles['price-desktop'])}>
        <span>KRW</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

ChipSelectBaggageKg.displayName = 'ChipSelectBaggageKg';
