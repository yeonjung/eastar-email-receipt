import { clsx, type ClassValue } from 'clsx';

/**
 * Utility for merging class names conditionally.
 * Usage: cn('base', isActive && 'active', { disabled: isDisabled })
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
