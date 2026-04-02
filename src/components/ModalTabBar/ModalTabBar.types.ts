import type { HTMLAttributes } from 'react';

/**
 * Figma: Components > ModalTabBar (node: 466-307)
 * Tab bar for flight selection modal — 가는편 / 오는편 tabs with close button.
 */
export type ModalTabBarActiveTab = 'outbound' | 'inbound';
export type ModalTabBarDevice   = 'desktop' | 'phone';

export interface ModalTabBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Which tab is currently active. @default "outbound" */
  activeTab?: ModalTabBarActiveTab;
  /** Responsive variant. @default "desktop" */
  device?: ModalTabBarDevice;
  /** Called when the user switches tabs. */
  onTabChange?: (tab: ModalTabBarActiveTab) => void;
  /** Called when the close (×) button is clicked. Desktop only. */
  onClose?: () => void;
}
