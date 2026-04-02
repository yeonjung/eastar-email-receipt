import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ModalTabBar } from './ModalTabBar';

const meta: Meta<typeof ModalTabBar> = {
  title: 'Components/ModalTabBar',
  component: ModalTabBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    activeTab: { control: 'radio', options: ['outbound', 'inbound'] },
    device:    { control: 'radio', options: ['desktop', 'phone'] },
  },
};
export default meta;
type Story = StoryObj<typeof ModalTabBar>;

export const DesktopOutbound: Story = {
  args: { device: 'desktop', activeTab: 'outbound' },
  name: 'Desktop — 가는편 활성',
};

export const DesktopInbound: Story = {
  args: { device: 'desktop', activeTab: 'inbound' },
  name: 'Desktop — 오는편 활성',
};

export const PhoneOutbound: Story = {
  args: { device: 'phone', activeTab: 'outbound' },
  name: 'Phone — 가는편 활성',
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const PhoneInbound: Story = {
  args: { device: 'phone', activeTab: 'inbound' },
  name: 'Phone — 오는편 활성',
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const Interactive: Story = {
  name: 'Interactive (탭 전환)',
  render: () => {
    const [tab, setTab] = useState<'outbound' | 'inbound'>('outbound');
    return (
      <div>
        <ModalTabBar
          device="desktop"
          activeTab={tab}
          onTabChange={setTab}
          onClose={() => alert('닫기 클릭')}
        />
        <div style={{ padding: 24, color: '#374151', fontSize: 14 }}>
          현재 활성 탭: <strong>{tab === 'outbound' ? '가는편' : '오는편'}</strong>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <ModalTabBar device="desktop" activeTab="outbound" />
      <ModalTabBar device="desktop" activeTab="inbound"  />
      <ModalTabBar device="phone"   activeTab="outbound" />
      <ModalTabBar device="phone"   activeTab="inbound"  />
    </div>
  ),
};
