import type { InputHTMLAttributes } from 'react';

export type InputStatus = 'default' | 'focus' | 'error' | 'disabled';
export type InputSize = 'lg' | 'md' | 'sm';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label */
  label?: string;
  /** Helper text below the field */
  helperText?: string;
  /** Error message (triggers error state) */
  errorText?: string;
  /** @default 'md' */
  size?: InputSize;
  /** Leading icon inside input */
  leftIcon?: React.ReactNode;
  /** Trailing icon inside input */
  rightIcon?: React.ReactNode;
  /** Full-width */
  fullWidth?: boolean;
  /** Required mark (*) */
  required?: boolean;
}
