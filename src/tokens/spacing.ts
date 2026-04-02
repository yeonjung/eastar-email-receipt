/**
 * Spacing Tokens
 * Source: Figma > Element
 *
 * 4px base scale. Keys represent multiples of 4px.
 * Button heights directly map to spacing values (e.g., size "medium (44)" = spacing[11])
 */

export const spacing = {
  0:  '0px',
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  7:  '28px',
  8:  '32px',
  9:  '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  16: '64px',
  18: '72px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
} as const;

export type SpacingKey = keyof typeof spacing;

/**
 * Button height map — Figma Button page size guide
 * Figma naming: "2xlarge (56)" means height: 56px
 */
export const buttonHeight = {
  '2xlarge': spacing[14],  // 56px — Main page search CTA only
  'xlarge':  spacing[13],  // 52px
  'large':   spacing[12],  // 48px
  'medium':  spacing[11],  // 44px
  'small':   spacing[10],  // 40px
  'xsmall':  spacing[9],   // 36px
  '2xsmall': spacing[8],   // 32px
} as const;
