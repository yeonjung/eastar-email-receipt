import { useState, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Tooltip.module.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  /** @default 'hover' */
  trigger?: 'hover' | 'click';
  maxWidth?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content, children, placement = 'top', trigger = 'hover', maxWidth = 200, className,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => { clearTimeout(timerRef.current); setVisible(true); }, []);
  const hide = useCallback(() => { timerRef.current = setTimeout(() => setVisible(false), 100); }, []);

  const triggerProps = trigger === 'hover'
    ? { onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide }
    : { onClick: () => setVisible(v => !v) };

  return (
    <span className={cn(styles.wrap, className)} style={{ position: 'relative', display: 'inline-flex' }}>
      <span {...triggerProps}>{children}</span>
      {visible && (
        <span role="tooltip" className={cn(styles.tooltip, styles[`placement-${placement}`])} style={{ maxWidth }}>
          {content}
        </span>
      )}
    </span>
  );
};
Tooltip.displayName = 'Tooltip';
