import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import { cn } from '../../utils/cn';

/**
 * Button
 *
 * Eastar Design System button component.
 * Supports 4 subtypes (default, text, round, icon), 7 sizes, and multiple variants.
 *
 * Figma: Components > Button
 *
 * @example
 * // Default fill-primary button
 * <Button>항공권 검색</Button>
 *
 * // Round button
 * <Button subtype="round" variant="primary" size="large">예약하기</Button>
 *
 * // Full-width CTA
 * <Button width="fill" size="xlarge">다음으로</Button>
 *
 * // Icon button (aria-label required)
 * <Button subtype="icon" aria-label="Close">✕</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      subtype = 'default',
      size = 'medium',
      width = 'hug',
      fixedWidth,
      loading = false,
      disabled,
      children,
      startIcon,
      endIcon,
      className,
      style,
      as: Component = 'button',
      ...rest
    } = props;

    const variant = props.variant ?? (
      subtype === 'default' ? 'fill-primary' :
      subtype === 'text'    ? 'primary' :
      subtype === 'round'   ? 'primary' :
      'none'
    );

    const fixedWidthStyle = width === 'fixed' && fixedWidth != null
      ? { width: typeof fixedWidth === 'number' ? `${fixedWidth}px` : fixedWidth }
      : {};

    const classNames = cn(
      styles.button,
      styles[`subtype-${subtype}`],
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`width-${width}`],
      loading && styles.loading,
      className,
    );

    return (
      <Component
        ref={ref}
        className={classNames}
        style={{ ...fixedWidthStyle, ...style }}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </Component>
    );
  }
);

Button.displayName = 'Button';
