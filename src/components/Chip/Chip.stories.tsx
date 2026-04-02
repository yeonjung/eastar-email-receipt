import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant:  { control: 'select', options: ['filter', 'suggestion', 'input'] },
    size:     { control: 'radio', options: ['md', 'sm'] },
    selected: { control: 'boolean' },
    removable:{ control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: '직항' } };
export const Selected: Story = { args: { children: '직항', selected: true } };
export const Removable: Story = { args: { children: '서울 (ICN)', removable: true, variant: 'input' } };

export const FilterGroup: Story = {
  name: 'Filter Chip Group (interactive)',
  render: () => {
    const filters = ['전체', '직항', '1회 경유', '아침 출발', '저녁 도착'];
    const [active, setActive] = useState('전체');
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <Chip key={f} selected={active === f} onClick={() => setActive(f)}>{f}</Chip>
        ))}
      </div>
    );
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Chip size="md">Medium</Chip>
      <Chip size="sm">Small</Chip>
      <Chip size="md" selected>Selected MD</Chip>
      <Chip size="sm" selected>Selected SM</Chip>
    </div>
  ),
};
