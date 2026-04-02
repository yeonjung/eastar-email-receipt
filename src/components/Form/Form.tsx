import { forwardRef, useId } from 'react';
import type { InputProps } from './Form.types';
import styles from './Form.module.css';
import { cn } from '../../utils/cn';

/**
 * Input (Form field)
 * Figma: Components > Form
 * Includes label, helper text, error state.
 */
export const Form = forwardRef<HTMLInputElement, InputProps>(function Form(
  {
    label,
    helperText,
    errorText,
    size = 'md',
    leftIcon,
    rightIcon,
    fullWidth = false,
    required = false,
    disabled,
    className,
    id,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const isError = Boolean(errorText);

  return (
    <div
      className={cn(
        styles.field,
        styles[`size-${size}`],
        isError && styles.error,
        fullWidth && styles.fullWidth,
      )}
    >
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true"> *</span>}
        </label>
      )}
      <div className={cn(styles.inputWrap, leftIcon && styles.hasLeft, rightIcon && styles.hasRight)}>
        {leftIcon  && <span className={styles.iconLeft}>{leftIcon}</span>}
        <input
          ref={ref}
          id={fieldId}
          className={cn(styles.input, className)}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={isError ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
          required={required}
          {...rest}
        />
        {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
      </div>
      {isError && (
        <span id={`${fieldId}-error`} className={styles.errorText} role="alert">{errorText}</span>
      )}
      {!isError && helperText && (
        <span id={`${fieldId}-helper`} className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
});

Form.displayName = 'Input';
