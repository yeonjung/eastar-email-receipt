import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

// ─── Subtype ────────────────────────────────────────────────────────────────
// Figma: button/default | button/text | button/round | button/icon
export type ButtonSubtype = 'default' | 'text' | 'round' | 'icon';

// ─── Variant ────────────────────────────────────────────────────────────────
// Figma naming: fill_primary → fill-primary (underscore → hyphen)

/** Variants for subtype="default" */
export type ButtonDefaultVariant =
  | 'fill-primary'      // Figma: fill_primary
  | 'fill-secondary'    // Figma: fill_secondary
  | 'fill-gray'         // Figma: fill_gray
  | 'outline-primary'   // Figma: outline_primary
  | 'outline-secondary';// Figma: outline_secondary

/** Variants for subtype="text" */
export type ButtonTextVariant =
  | 'primary'
  | 'secondary';

/** Variants for subtype="round" */
export type ButtonRoundVariant =
  | 'primary'
  | 'secondary'
  | 'outline';

/** Variants for subtype="icon" */
export type ButtonIconVariant =
  | 'none'
  | 'fill'
  | 'outline';

export type ButtonVariant =
  | ButtonDefaultVariant
  | ButtonTextVariant
  | ButtonRoundVariant
  | ButtonIconVariant;

// ─── Size ────────────────────────────────────────────────────────────────────
// Figma size naming: "medium (44)" → height: 44px
export type ButtonSize =
  | '2xlarge'  // height: 56px — Main page search CTA only
  | 'xlarge'   // height: 52px
  | 'large'    // height: 48px
  | 'medium'   // height: 44px (default)
  | 'small'    // height: 40px
  | 'xsmall'   // height: 36px
  | '2xsmall'; // height: 32px

// ─── Width ───────────────────────────────────────────────────────────────────
// Figma: fill (100%) | hug (fit-content, default) | fixed (custom px)
export type ButtonWidth = 'fill' | 'hug' | 'fixed';

// ─── Base Props ──────────────────────────────────────────────────────────────
interface ButtonBaseProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Button size — maps directly to Figma size guide heights.
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * Width behavior.
   * - fill: width 100% (mobile bottom CTA)
   * - hug: fit-content (default)
   * - fixed: custom fixed width via `fixedWidth` prop
   * @default 'hug'
   */
  width?: ButtonWidth;
  /** Fixed width value in px (number) or any CSS unit (string). Used when width="fixed". */
  fixedWidth?: string | number;
  /** Shows a loading spinner and disables interaction. */
  loading?: boolean;
  /** Button label or content. */
  children?: ReactNode;
  /** Leading icon slot. */
  startIcon?: ReactNode;
  /** Trailing icon slot. */
  endIcon?: ReactNode;
  /** Render as a different element (e.g., "a" for link buttons). */
  as?: ElementType;
}

// ─── Discriminated Union by Subtype ──────────────────────────────────────────

export interface DefaultButtonProps extends ButtonBaseProps {
  subtype?: 'default';
  /** @default 'fill-primary' */
  variant?: ButtonDefaultVariant;
}

export interface TextButtonProps extends ButtonBaseProps {
  subtype: 'text';
  /** @default 'primary' */
  variant?: ButtonTextVariant;
}

export interface RoundButtonProps extends ButtonBaseProps {
  subtype: 'round';
  /** @default 'primary' */
  variant?: ButtonRoundVariant;
}

export interface IconButtonProps extends ButtonBaseProps {
  subtype: 'icon';
  /** @default 'none' */
  variant?: ButtonIconVariant;
  /** Required for accessibility when using icon-only buttons. */
  'aria-label': string;
}

export type ButtonProps =
  | DefaultButtonProps
  | TextButtonProps
  | RoundButtonProps
  | IconButtonProps;
