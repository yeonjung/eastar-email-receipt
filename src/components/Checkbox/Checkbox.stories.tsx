import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: '직항만 보기' } };
export const Checked: Story = { args: { label: '직항만 보기', defaultChecked: true } };
export const Indeterminate: Story = { args: { label: '전체 선택', indeterminate: true } };
export const Disabled: Story = { args: { label: '비활성화', disabled: true } };
export const CheckedDisabled: Story = { args: { label: '비활성화 (선택됨)', disabled: true, defaultChecked: true }, name: 'Checked + Disabled' };

export const Group: Story = {
  name: 'Checkbox Group (interactive)',
  render: () => {
    const options = ['직항', '1회 경유', '2회 이상 경유'];
    const [checked, setChecked] = useState<string[]>([]);
    const toggle = (v: string) =>
      setChecked(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map(o => (
          <Checkbox key={o} label={o} checked={checked.includes(o)} onChange={() => toggle(o)} />
        ))}
      </div>
    );
  },
};
