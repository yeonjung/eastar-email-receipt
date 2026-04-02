/**
 * Shadow Tokens
 * Source: Figma > Foundation > General_Shadow
 */

export const shadow = {
  none: 'none',
  xs:   '0 1px 2px rgba(0, 0, 0, 0.06)',
  sm:   '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md:   '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
  lg:   '0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05)',
  xl:   '0 20px 25px rgba(0, 0, 0, 0.10), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '2xl':'0 25px 50px rgba(0, 0, 0, 0.15)',
  inner:'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
} as const;

export type ShadowKey = keyof typeof shadow;
