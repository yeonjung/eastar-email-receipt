import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode;
  /** Three-state mode */
  indeterminate?: boolean;
  size?: 'md' | 'sm';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, indeterminate = false, size = 'md', className, id, disabled, ...rest }, ref
) {
  const autoId = useId();
  const checkId = id ?? autoId;

  const setRef = (el: HTMLInputElement | null) => {
    if (el) el.indeterminate = indeterminate;
    if (typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
  };

  return (
    <label
      htmlFor={checkId}
      className={cn(styles.wrap, styles[`size-${size}`], disabled && styles.disabled, className)}
    >
      <input
        ref={setRef} id={checkId} type="checkbox"
        className={styles.input} disabled={disabled} {...rest}
      />
      <span className={cn(styles.box, indeterminate && styles.indeterminate)} aria-hidden="true">
        {indeterminate ? '−' : '✓'}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
Checkbox.displayName = 'Checkbox';
