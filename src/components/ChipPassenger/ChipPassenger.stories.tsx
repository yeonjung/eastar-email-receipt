import type { Meta, StoryObj } from '@storybook/react';
import { ChipPassenger } from './ChipPassenger';

const meta: Meta<typeof ChipPassenger> = {
  title: 'Components/ChipPassenger',
  component: ChipPassenger,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    active:         { control: 'boolean' },
    state:          { control: 'select', options: ['selecting', 'selected', 'not-entered'] },
    passengerIndex: { control: 'text' },
    passengerLabel: { control: 'select', options: ['성인', '소아', '유아'] },
    secondName:     { control: 'text' },
    firstName:      { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof ChipPassenger>;

export const Selecting: Story = {
  args: { active: true, state: 'selecting', passengerIndex: '1.', passengerLabel: '성인', secondName: '홍', firstName: '길동' },
};

export const Selected: Story = {
  args: { active: false, state: 'selected', passengerIndex: '1.', passengerLabel: '성인', secondName: '홍', firstName: '길동' },
};

export const NotEntered: Story = {
  args: { active: false, state: 'not-entered', passengerIndex: '1.', passengerLabel: '성인' },
  name: '미입력',
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipPassenger active state="selecting"   passengerIndex="1." passengerLabel="성인" secondName="홍" firstName="길동" />
        <ChipPassenger active state="selecting"   passengerIndex="2." passengerLabel="소아" secondName="홍" firstName="길동" />
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipPassenger       state="not-entered" passengerIndex="1." passengerLabel="성인" />
        <ChipPassenger       state="not-entered" passengerIndex="2." passengerLabel="소아" />
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipPassenger       state="selected"    passengerIndex="1." passengerLabel="성인" secondName="홍" firstName="길동" />
        <ChipPassenger       state="selected"    passengerIndex="2." passengerLabel="소아" secondName="홍" firstName="길동" />
      </div>
    </div>
  ),
};
