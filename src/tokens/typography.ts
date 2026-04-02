/**
 * Typography Tokens
 * Source: Figma > Foundation > General_Typography
 *
 * Scale: Display-100(36pt), Display-200(28pt), Heading(24pt~18pt), Body(16pt~14pt), Caption(12pt), Label(11pt)
 * Font weights confirmed in Figma: Regular(400), Medium(500), Bold(700)
 * Line heights: 125% (1.25) for display/heading, 150% (1.5) for body
 */

export const fontFamily = {
  sans: "'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Apple SD Gothic Neo', sans-serif",
  mono: "'JetBrains Mono', 'Consolas', 'Monaco', monospace",
} as const;

export const fontSize = {
  'display-100': '36px',  // Figma: Display-100
  'display-200': '28px',  // Figma: Display-200
  'heading-1':   '24px',  // 24pt
  'heading-2':   '22px',  // 22pt
  'heading-3':   '20px',
  'heading-4':   '18px',
  'body-1':      '16px',
  'body-2':      '14px',
  'caption':     '12px',
  'label':       '11px',
} as const;

export type FontSizeKey = keyof typeof fontSize;

export const fontWeight = {
  regular:  '400',  // Figma: Regular
  medium:   '500',  // Figma: Medium
  semibold: '600',
  bold:     '700',  // Figma: Bold
} as const;

export const lineHeight = {
  tight:   '1.25',  // Figma: 125% or 1.25 — for Display/Heading
  normal:  '1.5',   // Figma: 150% — for Body
  relaxed: '1.75',
} as const;

export const letterSpacing = {
  tight:   '-0.02em',
  normal:  '0',
  wide:    '0.04em',
} as const;

/**
 * Composed text styles — 1:1 mapping to Figma text styles.
 * Use these in components via CSS classes or style objects.
 */
export const textStyle = {
  'display-100-bold': {
    fontSize:      fontSize['display-100'],
    fontWeight:    fontWeight.bold,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-100-medium': {
    fontSize:      fontSize['display-100'],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-100-regular': {
    fontSize:      fontSize['display-100'],
    fontWeight:    fontWeight.regular,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-200-bold': {
    fontSize:      fontSize['display-200'],
    fontWeight:    fontWeight.bold,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-200-medium': {
    fontSize:      fontSize['display-200'],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'display-200-regular': {
    fontSize:      fontSize['display-200'],
    fontWeight:    fontWeight.regular,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  'heading-1-bold': {
    fontSize:   fontSize['heading-1'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },
  'heading-1-medium': {
    fontSize:   fontSize['heading-1'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
  },
  'heading-2-bold': {
    fontSize:   fontSize['heading-2'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },
  'heading-2-medium': {
    fontSize:   fontSize['heading-2'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.tight,
  },
  'heading-3-bold': {
    fontSize:   fontSize['heading-3'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.normal,
  },
  'heading-3-medium': {
    fontSize:   fontSize['heading-3'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  'heading-4-bold': {
    fontSize:   fontSize['heading-4'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.normal,
  },
  'heading-4-medium': {
    fontSize:   fontSize['heading-4'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  'body-1-regular': {
    fontSize:   fontSize['body-1'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  'body-1-medium': {
    fontSize:   fontSize['body-1'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  'body-1-bold': {
    fontSize:   fontSize['body-1'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.normal,
  },
  'body-2-regular': {
    fontSize:   fontSize['body-2'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  'body-2-medium': {
    fontSize:   fontSize['body-2'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  'body-2-bold': {
    fontSize:   fontSize['body-2'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.normal,
  },
  'caption-regular': {
    fontSize:   fontSize['caption'],
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  'caption-medium': {
    fontSize:   fontSize['caption'],
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  'label-medium': {
    fontSize:      fontSize['label'],
    fontWeight:    fontWeight.medium,
    lineHeight:    lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
} as const;

export type TextStyleKey = keyof typeof textStyle;
