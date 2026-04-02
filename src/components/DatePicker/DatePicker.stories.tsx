import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { mode: { control: 'radio', options: ['single', 'range'] } },
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SingleDate: Story = {
  name: 'Single Date',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <DatePicker mode="single" value={date} onChange={setDate} />
        <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#757575' }}>
          선택: {date ? date.toLocaleDateString('ko-KR') : '없음'}
        </p>
      </div>
    );
  },
};

export const RangeDate: Story = {
  name: 'Date Range',
  render: () => {
    const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <DatePicker mode="range" rangeValue={range} onRangeChange={setRange} />
        <p style={{ fontFamily: 'sans-serif', fontSize: 13, color: '#757575' }}>
          출발: {range.start?.toLocaleDateString('ko-KR') ?? '—'} &nbsp;→&nbsp;
          도착: {range.end?.toLocaleDateString('ko-KR') ?? '—'}
        </p>
      </div>
    );
  },
};

export const WithMinDate: Story = {
  name: 'Min Date (today)',
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <DatePicker mode="single" value={date} onChange={setDate} minDate={new Date()} />;
  },
};
