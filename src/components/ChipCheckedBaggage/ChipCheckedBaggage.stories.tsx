import type { Meta, StoryObj } from '@storybook/react';
import { ChipCheckedBaggage } from './ChipCheckedBaggage';

const meta: Meta<typeof ChipCheckedBaggage> = {
  title: 'Components/ChipCheckedBaggage',
  component: ChipCheckedBaggage,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    active:         { control: 'boolean' },
    state:          { control: 'select', options: ['selecting', 'selected', 'not-selected'] },
    passengerIndex: { control: 'text' },
    secondName:     { control: 'text' },
    firstName:      { control: 'text' },
    totalKg:        { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof ChipCheckedBaggage>;

export const Selecting: Story = {
  args: { active: true, state: 'selecting', passengerIndex: '1. ', secondName: '홍', firstName: '길동' },
  name: '선택 중',
};

export const Selected: Story = {
  args: { active: false, state: 'selected', passengerIndex: '1. ', secondName: '홍', firstName: '길동', totalKg: '5' },
  name: '선택됨 (+5kg)',
};

export const NotSelected: Story = {
  args: { active: false, state: 'not-selected', passengerIndex: '1. ', secondName: '홍', firstName: '길동' },
  name: '미선택',
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipCheckedBaggage active state="selecting"    passengerIndex="1. " secondName="홍" firstName="길동" />
        <ChipCheckedBaggage       state="selecting"    passengerIndex="1. " secondName="홍" firstName="길동" />
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipCheckedBaggage active state="not-selected" passengerIndex="1. " secondName="홍" firstName="길동" />
        <ChipCheckedBaggage       state="not-selected" passengerIndex="1. " secondName="홍" firstName="길동" />
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <ChipCheckedBaggage active state="selected"    passengerIndex="1. " secondName="홍" firstName="길동" totalKg="5" />
        <ChipCheckedBaggage       state="selected"    passengerIndex="1. " secondName="홍" firstName="길동" totalKg="5" />
      </div>
    </div>
  ),
};
