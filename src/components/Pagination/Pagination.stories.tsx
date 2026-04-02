import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'radio', options: ['number', 'dot'] },
    total:   { control: 'number' },
    current: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

const Interactive = (props: { total: number; variant?: 'number' | 'dot' }) => {
  const [page, setPage] = useState(1);
  return <Pagination total={props.total} current={page} onChange={setPage} variant={props.variant} />;
};

export const Numbers: Story = { render: () => <Interactive total={10} /> };
export const Dots: Story    = { render: () => <Interactive total={5} variant="dot" />, name: 'Dot Indicator' };
export const ManyPages: Story = { render: () => <Interactive total={30} />, name: 'Many Pages' };
