/**
 * Z-Index Tokens
 * Layering system for overlapping UI elements.
 */

export const zIndex = {
  base:    0,
  raised:  10,
  dropdown: 100,
  sticky:  200,
  overlay: 300,
  modal:   400,
  toast:   500,
  tooltip: 600,
} as const;

export type ZIndexKey = keyof typeof zIndex;
