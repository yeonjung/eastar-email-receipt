import { cn } from '../../utils/cn';
import styles from './Pagination.module.css';

export interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
  /** Number of pages shown around current. @default 2 */
  siblingCount?: number;
  /** @default 'number' */
  variant?: 'number' | 'dot';
  className?: string;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export const Pagination: React.FC<PaginationProps> = ({
  total, current, onChange, siblingCount = 2, variant = 'number', className,
}) => {
  if (total <= 1) return null;

  if (variant === 'dot') {
    return (
      <div className={cn(styles.dots, className)}>
        {range(1, total).map(p => (
          <button key={p} type="button" aria-label={`Page ${p}`} aria-current={p === current ? 'page' : undefined}
            className={cn(styles.dot, p === current && styles.dotActive)} onClick={() => onChange(p)} />
        ))}
      </div>
    );
  }

  const start = Math.max(1, current - siblingCount);
  const end   = Math.min(total, current + siblingCount);
  const pages: (number | '...')[] = [];
  if (start > 1)     { pages.push(1); if (start > 2) pages.push('...'); }
  range(start, end).forEach(p => pages.push(p));
  if (end < total)   { if (end < total - 1) pages.push('...'); pages.push(total); }

  return (
    <nav aria-label="Pagination" className={cn(styles.nav, className)}>
      <button type="button" className={cn(styles.btn, styles.arrow)} disabled={current <= 1} onClick={() => onChange(current - 1)} aria-label="Previous">‹</button>
      {pages.map((p, i) => p === '...'
        ? <span key={`ellipsis-${i}`} className={styles.ellipsis}>…</span>
        : <button key={p} type="button" aria-current={p === current ? 'page' : undefined}
            className={cn(styles.btn, p === current && styles.active)} onClick={() => onChange(p as number)}>{p}</button>
      )}
      <button type="button" className={cn(styles.btn, styles.arrow)} disabled={current >= total} onClick={() => onChange(current + 1)} aria-label="Next">›</button>
    </nav>
  );
};
Pagination.displayName = 'Pagination';
