import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'radio', options: ['content', 'list', 'image'] } },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Content: Story = {
  render: () => (
    <Card variant="content" style={{ width: 320 }}
      title="서울 → 제주"
      description="2024.08.15 (목) · 직항 · 이스타항공 ZE401"
      badge={<Badge type="label" variant="primary" label="특가" />}
      footer={<><span style={{ fontWeight: 700, fontSize: 18 }}>59,900원</span><Button size="small">예약하기</Button></>}
    />
  ),
};

export const List: Story = {
  render: () => (
    <Card variant="list" style={{ width: 320 }} onClick={() => alert('clicked')}>
      <span style={{ fontSize: 28 }}>✈️</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14 }}>서울 → 도쿄</div>
        <div style={{ color: '#757575', fontSize: 12 }}>2024.10.01 · 직항</div>
      </div>
      <div style={{ marginLeft: 'auto', fontWeight: 700, color: '#FF6600' }}>89,000원</div>
    </Card>
  ),
};

export const Image: Story = {
  render: () => (
    <Card variant="image" style={{ width: 320 }}
      imageSrc="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=640&q=80"
      imageAlt="제주도 풍경"
      badge={<Badge type="label" variant="error" label="HOT" />}
      title="제주 특가 이벤트"
      description="이스타항공과 함께 떠나는 제주도 여행"
    />
  ),
};

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <Card variant="content" title="Content Card" description="일반 콘텐츠 카드" />
      <Card variant="list" onClick={() => {}}>
        <span style={{ fontSize: 20 }}>📋</span>
        <span style={{ fontSize: 14, fontWeight: 600 }}>List Card</span>
      </Card>
      <Card variant="image" imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&q=80" imageAlt="" title="Image Card" />
    </div>
  ),
};
