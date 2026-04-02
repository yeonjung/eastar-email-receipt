import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
} from 'react';

/**
 * Polymorphic component type helpers.
 * Allows components to be rendered as any HTML element or React component
 * while preserving full type safety.
 *
 * Usage:
 *   type ButtonProps<T extends ElementType> = PolymorphicProps<T, { variant?: string }>;
 */

type AsProp<T extends ElementType> = {
  as?: T;
};

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

export type PolymorphicProps<
  T extends ElementType,
  Props = Record<string, never>
> = Props &
  AsProp<T> &
  Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>['ref'];

export type PolymorphicPropsWithRef<
  T extends ElementType,
  Props = Record<string, never>
> = PolymorphicProps<T, Props> & { ref?: PolymorphicRef<T> };

export type PolymorphicComponent<
  DefaultTag extends ElementType,
  Props = Record<string, never>
> = <T extends ElementType = DefaultTag>(
  props: PolymorphicPropsWithRef<T, Props>
) => ReactElement | null;
