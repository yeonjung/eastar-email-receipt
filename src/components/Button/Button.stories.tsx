import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Eastar 디자인 시스템 Button 컴포넌트.

**Figma**: Components > Button

**4가지 서브타입**:
- \`default\`: 일반 버튼 (fill-primary, fill-secondary, fill-gray, outline-primary, outline-secondary)
- \`text\`: 텍스트 링크형 버튼
- \`round\`: 원형(pill) 버튼
- \`icon\`: 아이콘 전용 버튼

**7단계 크기**: 2xlarge(56) · xlarge(52) · large(48) · medium(44) · small(40) · xsmall(36) · 2xsmall(32)

**너비**: fill(100%) · hug(fit-content, default) · fixed(지정값)
        `,
      },
    },
  },
  argTypes: {
    subtype: {
      control: 'select',
      options: ['default', 'text', 'round', 'icon'],
      description: 'Button subtype (Figma: button/default | button/text | button/round | button/icon)',
    },
    variant: {
      control: 'select',
      options: [
        'fill-primary', 'fill-secondary', 'fill-gray', 'outline-primary', 'outline-secondary',
        'primary', 'secondary', 'outline', 'none', 'fill',
      ],
    },
    size: {
      control: 'select',
      options: ['2xlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '2xsmall'],
    },
    width: {
      control: 'radio',
      options: ['hug', 'fill', 'fixed'],
    },
    disabled:  { control: 'boolean' },
    loading:   { control: 'boolean' },
    children:  { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Default ──────────────────────────────────────────────────────────────────

export const FillPrimary: Story = {
  name: 'Default / fill-primary',
  args: { subtype: 'default', variant: 'fill-primary', size: 'medium', children: '항공권 검색' },
};

export const FillSecondary: Story = {
  name: 'Default / fill-secondary',
  args: { subtype: 'default', variant: 'fill-secondary', size: 'medium', children: '나중에 하기' },
};

export const FillGray: Story = {
  name: 'Default / fill-gray',
  args: { subtype: 'default', variant: 'fill-gray', size: 'medium', children: '필터' },
};

export const OutlinePrimary: Story = {
  name: 'Default / outline-primary',
  args: { subtype: 'default', variant: 'outline-primary', size: 'medium', children: '자세히 보기' },
};

export const OutlineSecondary: Story = {
  name: 'Default / outline-secondary',
  args: { subtype: 'default', variant: 'outline-secondary', size: 'medium', children: '취소' },
};

export const Disabled: Story = {
  args: { subtype: 'default', variant: 'fill-primary', size: 'medium', disabled: true, children: '비활성화' },
};

export const Loading: Story = {
  args: { subtype: 'default', variant: 'fill-primary', size: 'medium', loading: true, children: '로딩 중' },
};

// ── Sizes ────────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  name: 'All Sizes',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
      {(['2xlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '2xsmall'] as const).map((size) => (
        <Button key={size} subtype="default" variant="fill-primary" size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

// ── All Variants ──────────────────────────────────────────────────────────────

export const AllDefaultVariants: Story = {
  name: 'Default — All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {(['fill-primary', 'fill-secondary', 'fill-gray', 'outline-primary', 'outline-secondary'] as const).map((v) => (
        <Button key={v} subtype="default" variant={v}>{v}</Button>
      ))}
    </div>
  ),
};

// ── Text ──────────────────────────────────────────────────────────────────────

export const TextPrimary: Story = {
  name: 'Text / primary',
  args: { subtype: 'text', variant: 'primary', children: '더보기' },
};

export const TextSecondary: Story = {
  name: 'Text / secondary',
  args: { subtype: 'text', variant: 'secondary', children: '건너뛰기' },
};

// ── Round ─────────────────────────────────────────────────────────────────────

export const RoundPrimary: Story = {
  name: 'Round / primary',
  args: { subtype: 'round', variant: 'primary', size: 'large', children: '예약하기' },
};

export const RoundAllVariants: Story = {
  name: 'Round — All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      {(['primary', 'secondary', 'outline'] as const).map((v) => (
        <Button key={v} subtype="round" variant={v} size="large">{v}</Button>
      ))}
    </div>
  ),
};

// ── Icon ──────────────────────────────────────────────────────────────────────

export const IconNone: Story = {
  name: 'Icon / none',
  args: { subtype: 'icon', variant: 'none', size: 'medium', 'aria-label': 'Close', children: '✕' },
};

export const IconFill: Story = {
  name: 'Icon / fill',
  args: { subtype: 'icon', variant: 'fill', size: 'medium', 'aria-label': 'Add', children: '+' },
};

// ── Width ─────────────────────────────────────────────────────────────────────

export const FillWidth: Story = {
  name: 'Width / fill (100%)',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: '320px' }}>
      <Button subtype="default" variant="fill-primary" size="xlarge" width="fill">
        다음으로
      </Button>
    </div>
  ),
};
