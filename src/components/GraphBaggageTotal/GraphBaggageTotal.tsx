import React from 'react';
import styles from './GraphBaggageTotal.module.css';
import { cn } from '../../utils/cn';

interface GraphBaggageTotalProps {
  /** 추가 선택한 수하물 kg (e.g. "5", "10", … "30"). null = 미선택 */
  selectedKg?: string | null;
  device?: 'desktop' | 'phone';
  className?: string;
}

const BASE_KG = 15;

export const GraphBaggageTotal: React.FC<GraphBaggageTotalProps> = ({
  selectedKg = null,
  device = 'desktop',
  className,
}) => {
  const added = selectedKg ? parseInt(selectedKg, 10) : 0;
  const total = BASE_KG + added;
  const isPhone = device === 'phone';
  const hasSelection = added > 0;

  // Proportions: left = base/(base+added), right = added/(base+added)
  const basePct  = hasSelection ? (BASE_KG / total) * 100 : 100;
  const addedPct = hasSelection ? (added   / total) * 100 : 0;

  return (
    <div
      className={cn(
        styles.wrap,
        isPhone ? styles.wrapPhone : styles.wrapDesktop,
        hasSelection && !isPhone && styles.wrapSelected,
        className,
      )}
    >
      {/* Header: 총 무게 Xkg */}
      <div className={styles.header}>
        <span className={cn(styles.headerLabel, isPhone && styles.headerLabelPhone)}>총 무게 </span>
        <span className={cn(styles.headerValue, isPhone && styles.headerValuePhone)}>
          {total}<span className={cn(styles.headerUnit, isPhone && styles.headerUnitPhone)}>kg</span>
        </span>
      </div>

      {/* Bar */}
      <div className={cn(styles.barTrack, hasSelection && styles.barTrackSelected)}>
        {hasSelection ? (
          <>
            {/* Left: lighter red — base kg label */}
            <div
              className={styles.barLeft}
              style={{ width: `${basePct}%` }}
            >
              <span className={styles.barLeftLabel}>기본 운임 {BASE_KG}kg</span>
            </div>

            {/* Right: transparent (dark red bg shows through) — added kg label */}
            <div
              className={styles.barRight}
              style={{ width: `${addedPct}%` }}
            >
              <span className={styles.barRightLabel}>+{added}kg</span>
            </div>
          </>
        ) : (
          /* No selection: gray bar with centered label */
          <div className={styles.barEmpty}>
            <span className={styles.barEmptyLabel}>기본 운임 {BASE_KG}kg</span>
          </div>
        )}
      </div>
    </div>
  );
};

GraphBaggageTotal.displayName = 'GraphBaggageTotal';
