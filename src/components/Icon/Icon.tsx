import React from 'react';
import type { SVGAttributes } from 'react';
import { cn } from '../../utils/cn';
import styles from './Icon.module.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** SVG path data */
  path: string;
  /** @default 'md' (24px) */
  size?: IconSize;
  /** Color token or CSS value. @default 'currentColor' */
  color?: string;
  /** Accessible label */
  label?: string;
  /**
   * 렌더링 방식
   * - 'fill'   : filled icon (default, 기존 방식)
   * - 'stroke' : outlined icon — fill="none" + stroke="currentColor"
   */
  variant?: 'fill' | 'stroke';
  /** stroke 굵기. variant="stroke" 일 때만 적용. @default 1.5 */
  strokeWidth?: number;
}

const SIZE_MAP: Record<IconSize, number> = { xs: 12, sm: 16, md: 24, lg: 32, xl: 48 };

export const Icon: React.FC<IconProps> = ({
  path, size = 'md', color = 'currentColor', label, className,
  variant = 'fill', strokeWidth = 1.5,
  ...rest
}) => {
  const px = SIZE_MAP[size];
  const isStroke = variant === 'stroke';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px} height={px}
      viewBox="0 0 24 24"
      fill={isStroke ? 'none' : color}
      stroke={isStroke ? color : 'none'}
      strokeWidth={isStroke ? strokeWidth : undefined}
      strokeLinecap={isStroke ? 'round' : undefined}
      strokeLinejoin={isStroke ? 'round' : undefined}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={!label}
      className={cn(styles.icon, styles[`size-${size}`], className)}
      {...rest}
    >
      <path d={path} />
    </svg>
  );
};
Icon.displayName = 'Icon';

/** Common icon paths — Figma: Components > Icon */
export const IconPaths = {
  search:        'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
  close:         'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  arrowBack:     'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  arrowForward:  'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  arrowDown:     'M7 10l5 5 5-5z',
  check:         'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  calendar:      'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
  flight:        'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
  person:        'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  home:          'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  menu:          'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
  notification:  'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
  filter:        'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
  luggage:           'M17 6h-2V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 0h-2V4h2v2z',
  // ── outlined luggage icons (variant="stroke" 와 함께 사용) ──────────────────
  // Figma: Components2 / luggage_outlined (52709-427) — 선택 상태용 (strokeWidth 1.5)
  luggageOutlined:   'M10 7.5V6C10 5.45 10.45 5 11 5H13C13.55 5 14 5.45 14 6V7.5 M4 7.5H20C21.1 7.5 22 8.4 22 9.5V19.5C22 20.6 21.1 21.5 20 21.5H4C2.9 21.5 2 20.6 2 19.5V9.5C2 8.4 2.9 7.5 4 7.5Z M2 14H22',
  // Figma: Components2 / luggage_outlined_1px (52709-406) — 미선택 상태용 (strokeWidth 1)
  luggageOutlined1px:'M10 7.5V6C10 5.45 10.45 5 11 5H13C13.55 5 14 5.45 14 6V7.5 M4.5 7.5H19.5C20.6 7.5 21.5 8.4 21.5 9.5V19.5C21.5 20.6 20.6 21.5 19.5 21.5H4.5C3.4 21.5 2.5 20.6 2.5 19.5V9.5C2.5 8.4 3.4 7.5 4.5 7.5Z M2.5 14H21.5',
} as const;

export type IconName = keyof typeof IconPaths;
