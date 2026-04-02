import type { Meta, StoryObj } from '@storybook/react';
import { FooterFixBtn } from './FooterFixBtn';

const meta: Meta<typeof FooterFixBtn> = {
  title: 'Components/FooterFixBtn',
  component: FooterFixBtn,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    showExitBtn:      { control: 'boolean' },
    showSecondaryBtn: { control: 'boolean' },
    showTooltip:      { control: 'boolean' },
    currencyUnit:     { control: 'text' },
    priceText:        { control: 'text' },
    labelExit:        { control: 'text' },
    labelSecondary:   { control: 'text' },
    labelPrimary:     { control: 'text' },
    tooltipHighlight: { control: 'text' },
    tooltipSuffix:    { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof FooterFixBtn>;

export const Default: Story = {
  args: {
    currencyUnit:     'KRW',
    priceText:        '120,800',
    showExitBtn:      true,
    showSecondaryBtn: true,
    showTooltip:      false,
    labelPrimary:     '바로 결제',
  },
};

export const WithTooltip: Story = {
  name: '툴팁 포함',
  args: {
    currencyUnit:     'KRW',
    priceText:        '120,800',
    showExitBtn:      true,
    showSecondaryBtn: true,
    showTooltip:      true,
    labelPrimary:     '바로 결제',
  },
};

export const NoExitBtn: Story = {
  name: '나가기 버튼 없음',
  args: {
    currencyUnit:     'KRW',
    priceText:        '45,000',
    showExitBtn:      false,
    showSecondaryBtn: true,
    showTooltip:      false,
    labelPrimary:     '다음',
  },
};

export const PrimaryOnly: Story = {
  name: '주 액션만',
  args: {
    currencyUnit:     'KRW',
    priceText:        '0',
    showExitBtn:      false,
    showSecondaryBtn: false,
    showTooltip:      false,
    labelPrimary:     '결제하기',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <FooterFixBtn
        currencyUnit="KRW" priceText="120,800"
        showTooltip={true} labelPrimary="바로 결제"
      />
      <div style={{ height: 48 }} />
      <FooterFixBtn
        currencyUnit="KRW" priceText="45,000"
        showExitBtn={false} labelPrimary="다음"
      />
      <div style={{ height: 48 }} />
      <FooterFixBtn
        currencyUnit="KRW" priceText="0"
        showExitBtn={false} showSecondaryBtn={false}
        labelPrimary="결제하기"
      />
    </div>
  ),
};
