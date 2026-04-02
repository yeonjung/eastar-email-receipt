import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode;
  size?: 'md' | 'sm';
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, size = 'md', className, id, disabled, ...rest }, ref
) {
  const autoId = useId();
  const radioId = id ?? autoId;
  return (
    <label
      htmlFor={radioId}
      className={cn(styles.wrap, styles[`size-${size}`], disabled && styles.disabled, className)}
    >
      <input ref={ref} id={radioId} type="radio" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.circle} aria-hidden="true"><span className={styles.dot} /></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
Radio.displayName = 'Radio';
