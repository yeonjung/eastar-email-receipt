import type { Meta, StoryObj } from '@storybook/react';
import { CheckedBaggagePage } from './CheckedBaggagePage';

const meta: Meta<typeof CheckedBaggagePage> = {
  title: 'Pages/CheckedBaggagePage',
  component: CheckedBaggagePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CheckedBaggagePage>;

/** 데스크탑 뷰 (1920px) */
export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

/** 모바일 뷰 (375px — iPhone 14) */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
