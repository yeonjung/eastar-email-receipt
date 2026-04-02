/**
 * Color Tokens
 * Source: Figma > Foundation > General_Color
 *
 * 3-layer architecture:
 * Primitive → Semantic → Component
 *
 * RULE: Semantic/Component layers MUST reference Primitive values — no direct hex hardcoding.
 */

// ─── Layer 1: Primitive ────────────────────────────────────────────────────────
// Raw color palette. Do not use directly in components.

export const colorPrimitive = {
  // Brand — Eastar Orange/Red
  orange50:  '#FFF3E0',
  orange100: '#FFE0B2',
  orange200: '#FFCC80',
  orange300: '#FFB74D',
  orange400: '#FFA726',
  orange500: '#FF6600',  // Primary brand (Eastar main orange)
  orange600: '#F55F00',
  orange700: '#E55200',
  orange800: '#CC4600',
  orange900: '#B33A00',

  // Neutral / Gray
  white:   '#FFFFFF',
  gray50:  '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  black:   '#000000',

  // Status
  red50:    '#FFEBEE',
  red400:   '#EF5350',
  red500:   '#F44336',
  red600:   '#E53935',
  green50:  '#E8F5E9',
  green400: '#66BB6A',
  green500: '#4CAF50',
  green600: '#43A047',
  blue50:   '#E3F2FD',
  blue400:  '#42A5F5',
  blue500:  '#2196F3',
  blue600:  '#1E88E5',
  yellow50: '#FFFDE7',
  yellow400:'#FFCA28',
  yellow500:'#FFC107',
  yellow600:'#FFB300',

  transparent: 'transparent',
} as const;

export type ColorPrimitiveKey = keyof typeof colorPrimitive;

// ─── Layer 2: Semantic ─────────────────────────────────────────────────────────
// Purpose-based aliases. Use these in components.

export const colorSemantic = {
  // Action / CTA
  'action-primary':            colorPrimitive.orange500,
  'action-primary-hover':      colorPrimitive.orange600,
  'action-primary-pressed':    colorPrimitive.orange700,
  'action-primary-disabled':   colorPrimitive.gray300,

  'action-secondary':          colorPrimitive.gray900,
  'action-secondary-hover':    colorPrimitive.gray800,
  'action-secondary-pressed':  colorPrimitive.gray700,
  'action-secondary-disabled': colorPrimitive.gray300,

  // Text
  'text-primary':    colorPrimitive.gray900,
  'text-secondary':  colorPrimitive.gray600,
  'text-tertiary':   colorPrimitive.gray400,
  'text-disabled':   colorPrimitive.gray400,
  'text-inverse':    colorPrimitive.white,
  'text-on-primary': colorPrimitive.white,
  'text-link':       colorPrimitive.blue500,
  'text-error':      colorPrimitive.red500,

  // Background
  'bg-base':    colorPrimitive.white,
  'bg-subtle':  colorPrimitive.gray50,
  'bg-muted':   colorPrimitive.gray100,
  'bg-overlay': 'rgba(0, 0, 0, 0.5)',
  'bg-inverse': colorPrimitive.gray900,

  // Border
  'border-default': colorPrimitive.gray300,
  'border-strong':  colorPrimitive.gray500,
  'border-focus':   colorPrimitive.blue500,
  'border-error':   colorPrimitive.red500,
  'border-disabled':colorPrimitive.gray200,

  // Status
  'status-error-bg':      colorPrimitive.red50,
  'status-error-text':    colorPrimitive.red500,
  'status-success-bg':    colorPrimitive.green50,
  'status-success-text':  colorPrimitive.green500,
  'status-warning-bg':    colorPrimitive.yellow50,
  'status-warning-text':  colorPrimitive.yellow600,
  'status-info-bg':       colorPrimitive.blue50,
  'status-info-text':     colorPrimitive.blue500,

  // Brand
  'brand-primary':   colorPrimitive.orange500,
  'brand-secondary': colorPrimitive.gray900,
} as const;

export type ColorSemanticKey = keyof typeof colorSemantic;

// ─── Layer 3: Component ────────────────────────────────────────────────────────
// Component-specific tokens. Referenced in component CSS modules.

export const colorComponent = {
  button: {
    // default / fill-primary
    'fill-primary-bg':            colorSemantic['action-primary'],
    'fill-primary-bg-hover':      colorSemantic['action-primary-hover'],
    'fill-primary-bg-pressed':    colorSemantic['action-primary-pressed'],
    'fill-primary-bg-disabled':   colorSemantic['action-primary-disabled'],
    'fill-primary-text':          colorSemantic['text-on-primary'],
    'fill-primary-text-disabled': colorSemantic['text-disabled'],

    // default / fill-secondary
    'fill-secondary-bg':          colorSemantic['action-secondary'],
    'fill-secondary-bg-hover':    colorSemantic['action-secondary-hover'],
    'fill-secondary-bg-pressed':  colorSemantic['action-secondary-pressed'],
    'fill-secondary-bg-disabled': colorSemantic['action-secondary-disabled'],
    'fill-secondary-text':        colorSemantic['text-on-primary'],

    // default / fill-gray
    'fill-gray-bg':               colorSemantic['bg-muted'],
    'fill-gray-bg-hover':         colorPrimitive.gray200,
    'fill-gray-bg-pressed':       colorPrimitive.gray300,
    'fill-gray-text':             colorSemantic['text-primary'],

    // default / outline-primary
    'outline-primary-border':     colorSemantic['action-primary'],
    'outline-primary-text':       colorSemantic['action-primary'],
    'outline-primary-bg-hover':   colorPrimitive.orange50,

    // default / outline-secondary
    'outline-secondary-border':   colorSemantic['action-secondary'],
    'outline-secondary-text':     colorSemantic['action-secondary'],
    'outline-secondary-bg-hover': colorPrimitive.gray100,

    // text / primary
    'text-primary-color':         colorSemantic['action-primary'],
    'text-primary-color-hover':   colorSemantic['action-primary-hover'],

    // text / secondary
    'text-secondary-color':       colorSemantic['text-secondary'],
    'text-secondary-color-hover': colorSemantic['text-primary'],
  },

  badge: {
    'primary-bg':   colorSemantic['action-primary'],
    'primary-text': colorSemantic['text-on-primary'],
    'neutral-bg':   colorSemantic['bg-muted'],
    'neutral-text': colorSemantic['text-secondary'],
  },

  chip: {
    'default-bg':       colorSemantic['bg-muted'],
    'default-text':     colorSemantic['text-primary'],
    'default-border':   colorSemantic['border-default'],
    'selected-bg':      colorPrimitive.orange50,
    'selected-text':    colorSemantic['action-primary'],
    'selected-border':  colorSemantic['action-primary'],
  },

  form: {
    'input-bg':              colorSemantic['bg-base'],
    'input-border':          colorSemantic['border-default'],
    'input-border-focus':    colorSemantic['border-focus'],
    'input-border-error':    colorSemantic['border-error'],
    'input-border-disabled': colorSemantic['border-disabled'],
    'input-text':            colorSemantic['text-primary'],
    'input-placeholder':     colorSemantic['text-tertiary'],
    'input-bg-disabled':     colorSemantic['bg-muted'],
    'label-text':            colorSemantic['text-primary'],
    'helper-text':           colorSemantic['text-secondary'],
    'error-text':            colorSemantic['text-error'],
  },
} as const;
