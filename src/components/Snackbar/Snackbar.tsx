import { useEffect } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Snackbar.module.css';

export type SnackbarType = 'success' | 'error' | 'warning' | 'info';
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  type?: SnackbarType;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  /** Auto-dismiss duration in ms. 0 = no auto-dismiss. @default 4000 */
  duration?: number;
  visible?: boolean;
}

const ICONS: Record<SnackbarType, string> = {
  success: '✓', error: '✕', warning: '!', info: 'i',
};

export const Snackbar: React.FC<SnackbarProps> = ({
  message, type = 'info', actionLabel, onAction, onClose,
  duration = 4000, visible = true, className, ...rest
}) => {
  useEffect(() => {
    if (visible && duration > 0 && onClose) {
      const t = setTimeout(onClose, duration);
      return () => clearTimeout(t);
    }
  }, [visible, duration, onClose]);

  if (!visible) return null;
  return (
    <div role="status" aria-live="polite" className={cn(styles.snackbar, styles[`type-${type}`], className)} {...rest}>
      <span className={styles.icon}>{ICONS[type]}</span>
      <span className={styles.message}>{message}</span>
      {actionLabel && (
        <button type="button" className={styles.action} onClick={onAction}>{actionLabel}</button>
      )}
      {onClose && (
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">✕</button>
      )}
    </div>
  );
};
Snackbar.displayName = 'Snackbar';
