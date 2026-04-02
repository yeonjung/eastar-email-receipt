import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type:    { control: 'select', options: ['count', 'dot', 'label'] },
    variant: { control: 'select', options: ['primary','success','error','warning','info','neutral'] },
    size:    { control: 'radio',  options: ['md', 'sm'] },
    count:   { control: 'number' },
    max:     { control: 'number' },
    label:   { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Count: Story       = { args: { type: 'count', variant: 'primary', count: 5 } };
export const MaxCount: Story    = { args: { type: 'count', variant: 'primary', count: 150, max: 99 }, name: 'Count (99+)' };
export const Dot: Story         = { args: { type: 'dot', variant: 'primary' } };
export const LabelBadge: Story  = { args: { type: 'label', variant: 'success', label: 'NEW' }, name: 'Label' };

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','success','error','warning','info','neutral'] as const).map(v => (
        <Badge key={v} type="count" variant={v} count={7} />
      ))}
    </div>
  ),
};

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Badge type="count" count={3} />
      <Badge type="dot" />
      <Badge type="label" label="HOT" variant="error" />
    </div>
  ),
};

export const PassengerStatusBadges: Story = {
  name: 'Passenger Status Badges (탑승객 상태)',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge type="label" variant="status-complete" label="입력완료" size="sm" />
      <Badge type="label" variant="status-progress" label="입력 중"  size="sm" />
      <Badge type="label" variant="status-empty"    label="미입력"   size="sm" />
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'On icon (composition)',
  render: () => (
    <div style={{ position: 'relative', display: 'inline-flex', width: 36, height: 36 }}>
      <span style={{ fontSize: 28 }}>🔔</span>
      <Badge
        type="count" count={12}
        style={{ position: 'absolute', top: -4, right: -8 }}
      />
    </div>
  ),
};
