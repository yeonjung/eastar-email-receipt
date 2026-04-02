import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: '일반석', name: 'seat' } };
export const Checked: Story = { args: { label: '비즈니스석', name: 'seat', defaultChecked: true } };
export const Disabled: Story = { args: { label: '퍼스트클래스 (매진)', name: 'seat', disabled: true } };

export const Group: Story = {
  name: 'Radio Group (interactive)',
  render: () => {
    const options = ['일반석', '프리미엄 일반석', '비즈니스석'];
    const [selected, setSelected] = useState('일반석');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map(o => (
          <Radio
            key={o} name="class" label={o}
            checked={selected === o}
            onChange={() => setSelected(o)}
          />
        ))}
      </div>
    );
  },
};
