import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconPaths } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size:  { control: 'select', options: ['xs','sm','md','lg','xl'] },
    color: { control: 'color' },
  },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { path: IconPaths.flight, size: 'md', color: 'currentColor', label: 'Flight' },
};

export const Library: Story = {
  name: 'Icon Library',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: 16 }}>
      {(Object.entries(IconPaths) as [string, string][]).map(([name, path]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: 12 }}>
          <Icon path={path} size="md" color="#212121" label={name} />
          <span style={{ fontSize: 11, color: '#757575', fontFamily: 'monospace', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
      {(['xs','sm','md','lg','xl'] as const).map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon path={IconPaths.flight} size={s} color="#FF6600" label={s} />
          <span style={{ fontSize: 11, color: '#9E9E9E' }}>{s}</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {['#FF6600','#212121','#4CAF50','#F44336','#2196F3'].map(c => (
        <Icon key={c} path={IconPaths.notification} size="lg" color={c} label="notification" />
      ))}
    </div>
  ),
};
