/**
 * Breakpoint Tokens
 * Source: Figma > Foundation > Layout sections
 * Confirmed breakpoints: Desktop 1920, Desktop 1280, Desktop 768
 */

export const breakpoints = {
  mobile:  '375px',
  tablet:  '768px',   // Figma: Layout / Desktop / 768
  desktop: '1280px',  // Figma: Layout / Desktop / 1280
  wide:    '1920px',  // Figma: Layout / Desktop / 1920
} as const;

export type BreakpointKey = keyof typeof breakpoints;

/** CSS media query helpers */
export const mediaQuery = {
  mobile:         `@media (max-width: 767px)`,
  tablet:         `@media (min-width: 768px) and (max-width: 1279px)`,
  tabletAndAbove: `@media (min-width: 768px)`,
  desktop:        `@media (min-width: 1280px)`,
  wide:           `@media (min-width: 1920px)`,
} as const;
