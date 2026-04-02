import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant:  { control: 'radio', options: ['line', 'filled'] },
    size:     { control: 'radio', options: ['md', 'sm'] },
    scrollable:{ control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Tab>;

const ITEMS = [
  { key: 'flight', label: '항공권' },
  { key: 'hotel',  label: '호텔' },
  { key: 'tour',   label: '투어·액티비티' },
  { key: 'car',    label: '렌터카', disabled: true },
];

export const Line: Story       = { args: { items: ITEMS, defaultActiveKey: 'flight', variant: 'line' } };
export const Filled: Story     = { args: { items: ITEMS, defaultActiveKey: 'flight', variant: 'filled' } };
export const SmallLine: Story  = { args: { items: ITEMS, defaultActiveKey: 'flight', variant: 'line', size: 'sm' }, name: 'Small / Line' };
export const WithBadge: Story  = {
  args: {
    items: [
      { key: 'all',     label: '전체', badge: 12 },
      { key: 'depart',  label: '출발' },
      { key: 'arrive',  label: '도착', badge: 3 },
    ],
    defaultActiveKey: 'all',
    variant: 'line',
  },
};
export const Scrollable: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 300 }}>
      <Tab
        scrollable
        items={['월','화','수','목','금','토','일'].map(d => ({ key: d, label: `${d}요일` }))}
        defaultActiveKey="월"
        variant="line"
      />
    </div>
  ),
};
