import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Modal.module.css';

export type ModalType = 'default' | 'alert' | 'confirm' | 'bottom-sheet';
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  type?: ModalType;
  title?: string;
  description?: string;
  children?: ReactNode;
  primaryAction?: { label: string; onClick: () => void; };
  secondaryAction?: { label: string; onClick: () => void; };
  className?: string;
  /** Prevent closing when clicking backdrop */
  disableBackdropClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open, onClose, type = 'default', title, description, children,
  primaryAction, secondaryAction, className, disableBackdropClose = false,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={!disableBackdropClose ? onClose : undefined} aria-modal="true" role="dialog">
      <div
        ref={dialogRef}
        className={cn(styles.modal, styles[`type-${type}`], className)}
        onClick={e => e.stopPropagation()}
      >
        {onClose && type !== 'bottom-sheet' && (
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        )}
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.body}>{children}</div>}
        {(primaryAction || secondaryAction) && (
          <div className={styles.actions}>
            {secondaryAction && (
              <button type="button" className={cn(styles.btn, styles.secondary)} onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </button>
            )}
            {primaryAction && (
              <button type="button" className={cn(styles.btn, styles.primary)} onClick={primaryAction.onClick}>
                {primaryAction.label}
              </button>
            )}
          </div>
        )}
        {type === 'bottom-sheet' && (
          <button type="button" className={styles.sheetHandle} onClick={onClose} aria-label="Close" />
        )}
      </div>
    </div>
  );
};
Modal.displayName = 'Modal';
