import { useState } from 'react';
import { cn } from '../../utils/cn';
import styles from './DatePicker.module.css';

export type DatePickerMode = 'single' | 'range';

export interface DatePickerProps {
  mode?: DatePickerMode;
  value?: Date | null;
  rangeValue?: { start: Date | null; end: Date | null };
  onChange?: (date: Date) => void;
  onRangeChange?: (range: { start: Date | null; end: Date | null }) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

const DAYS = ['일','월','화','수','목','금','토'];
const MONTHS = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function firstDayOf(y: number, m: number) { return new Date(y, m, 1).getDay(); }
function sameDay(a: Date, b: Date) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

export const DatePicker: React.FC<DatePickerProps> = ({
  mode = 'single', value, rangeValue, onChange, onRangeChange,
  minDate, maxDate, className,
}) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const prev = () => { if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); } else setViewMonth(m => m - 1); };
  const next = () => { if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); } else setViewMonth(m => m + 1); };

  const days = daysInMonth(viewYear, viewMonth);
  const firstDay = firstDayOf(viewYear, viewMonth);
  const nullCells: (Date | null)[] = Array.from({ length: firstDay }).map(() => null);
  const dateCells: Date[] = Array.from({ length: days }).map((_, i) => new Date(viewYear, viewMonth, i + 1));
  const cells: (Date | null)[] = [...nullCells, ...dateCells];

  const isSelected = (d: Date) => {
    if (mode === 'single') return value ? sameDay(d, value) : false;
    return (rangeValue?.start && sameDay(d, rangeValue.start)) || (rangeValue?.end && sameDay(d, rangeValue.end)) || false;
  };

  const isInRange = (d: Date) => {
    if (mode !== 'range' || !rangeValue?.start || !rangeValue?.end) return false;
    return d > rangeValue.start && d < rangeValue.end;
  };

  const isDisabled = (d: Date) => {
    if (minDate && d < minDate) return true;
    if (maxDate && d > maxDate) return true;
    return false;
  };

  const handleClick = (d: Date) => {
    if (isDisabled(d)) return;
    if (mode === 'single') { onChange?.(d); return; }
    if (!rangeValue?.start || rangeValue.end) {
      onRangeChange?.({ start: d, end: null });
    } else {
      const sorted = d >= rangeValue.start ? { start: rangeValue.start, end: d } : { start: d, end: rangeValue.start };
      onRangeChange?.(sorted);
    }
  };

  return (
    <div className={cn(styles.picker, className)}>
      <div className={styles.header}>
        <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous month">‹</button>
        <span className={styles.monthLabel}>{viewYear}년 {MONTHS[viewMonth]}</span>
        <button type="button" className={styles.navBtn} onClick={next} aria-label="Next month">›</button>
      </div>
      <div className={styles.weekRow}>
        {DAYS.map((d, i) => <span key={d} className={cn(styles.weekDay, i === 0 && styles.sun, i === 6 && styles.sat)}>{d}</span>)}
      </div>
      <div className={styles.grid}>
        {cells.map((d, i) => {
          if (!d) return <span key={`empty-${i}`} />;
          const sel = isSelected(d);
          const range = isInRange(d);
          const dis = isDisabled(d);
          const isToday = sameDay(d, today);
          return (
            <button key={d.toISOString()} type="button"
              className={cn(styles.day, sel && styles.selected, range && styles.inRange, dis && styles.disabled, isToday && !sel && styles.today)}
              onClick={() => handleClick(d)}
              disabled={dis}
              aria-label={d.toLocaleDateString('ko-KR')}
              aria-pressed={sel}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};
DatePicker.displayName = 'DatePicker';
