import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placement: { control: 'select', options: ['top','bottom','left','right'] },
    trigger:   { control: 'radio',  options: ['hover','click'] },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story    = { args: { content: '직항 항공편만 표시', placement: 'top',    children: <Button variant="outline-secondary" size="xsmall">직항</Button> } };
export const Bottom: Story = { args: { content: '하단에 표시되는 툴팁', placement: 'bottom', children: <Button variant="outline-secondary" size="xsmall">아래</Button> } };
export const Left: Story   = { args: { content: '왼쪽 툴팁', placement: 'left',   children: <Button variant="outline-secondary" size="xsmall">왼쪽</Button> } };
export const Right: Story  = { args: { content: '오른쪽 툴팁', placement: 'right',  children: <Button variant="outline-secondary" size="xsmall">오른쪽</Button> } };

export const AllPlacements: Story = {
  name: 'All Placements',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48, padding: 48 }}>
      {(['top','bottom','left','right'] as const).map(p => (
        <Tooltip key={p} content={`${p} 방향 툴팁입니다.`} placement={p}>
          <Button size="small" variant="outline-secondary">{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
