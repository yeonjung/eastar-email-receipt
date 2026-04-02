import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Card.module.css';

export type CardVariant = 'content' | 'list' | 'image';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** @default 'content' */
  variant?: CardVariant;
  /** Image URL (variant="image") */
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  footer?: ReactNode;
  badge?: ReactNode;
  /** Click handler to make card interactive */
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'content', imageSrc, imageAlt, title, description, footer, badge,
  children, className, onClick, ...rest
}) => (
  <div
    className={cn(styles.card, styles[`variant-${variant}`], onClick && styles.interactive, className)}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    {...rest}
  >
    {variant === 'image' && imageSrc && (
      <div className={styles.imageWrap}>
        <img src={imageSrc} alt={imageAlt ?? ''} className={styles.image} />
        {badge && <div className={styles.imageBadge}>{badge}</div>}
      </div>
    )}
    {variant !== 'image' && badge && <div className={styles.badge}>{badge}</div>}
    {(title || description) && (
      <div className={styles.body}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    )}
    {!title && !description && children && <div className={styles.body}>{children}</div>}
    {footer && <div className={styles.footer}>{footer}</div>}
  </div>
);
Card.displayName = 'Card';
