import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ChipSelectBaggageKg } from './ChipSelectBaggageKg';

const meta: Meta<typeof ChipSelectBaggageKg> = {
  title: 'Components/ChipSelectBaggageKg',
  component: ChipSelectBaggageKg,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    device:   { control: 'radio', options: ['desktop', 'phone'] },
    selected: { control: 'boolean' },
    kg:       { control: 'text' },
    totalKg:  { control: 'text' },
    price:    { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof ChipSelectBaggageKg>;

export const Desktop: Story = {
  args: { device: 'desktop', kg: '5', totalKg: '20', price: '15,000', selected: false },
};

export const DesktopSelected: Story = {
  args: { device: 'desktop', kg: '5', totalKg: '20', price: '15,000', selected: true },
  name: 'Desktop (Selected)',
};

export const Phone: Story = {
  args: { device: 'phone', kg: '5', totalKg: '20', price: '15,000', selected: false },
};

export const PhoneSelected: Story = {
  args: { device: 'phone', kg: '5', totalKg: '20', price: '15,000', selected: true },
  name: 'Phone (Selected)',
};

const baggageOptions = [
  { kg: '5',  totalKg: '20', price: '15,000' },
  { kg: '10', totalKg: '25', price: '25,000' },
  { kg: '15', totalKg: '30', price: '35,000' },
  { kg: '20', totalKg: '35', price: '45,000' },
];

export const Interactive: Story = {
  name: 'Interactive (click to select)',
  render: () => {
    const [selected, setSelected] = useState<number | null>(null);
    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {baggageOptions.map((opt, i) => (
          <ChipSelectBaggageKg
            key={i}
            kg={opt.kg}
            totalKg={opt.totalKg}
            price={opt.price}
            selected={selected === i}
            onClick={() => setSelected(i === selected ? null : i)}
          />
        ))}
      </div>
    );
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <ChipSelectBaggageKg device="desktop" kg="5" totalKg="20" price="15,000" />
        <ChipSelectBaggageKg device="desktop" kg="5" totalKg="20" price="15,000" selected />
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <ChipSelectBaggageKg device="phone" kg="5" totalKg="20" price="15,000" />
        <ChipSelectBaggageKg device="phone" kg="5" totalKg="20" price="15,000" selected />
      </div>
    </div>
  ),
};
