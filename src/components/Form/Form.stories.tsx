import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Input',
  component: Form,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'radio', options: ['lg', 'md', 'sm'] },
  },
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: { label: '출발지', placeholder: '도시 또는 공항 입력', helperText: '예: 서울 (ICN)', size: 'md' },
};
export const WithError: Story = {
  args: { label: '출발지', placeholder: '도시 또는 공항 입력', errorText: '출발지를 입력해주세요.', value: '', size: 'md' },
};
export const Disabled: Story = {
  args: { label: '출발지', value: '서울 (ICN)', disabled: true, size: 'md' },
};
export const Required: Story = {
  args: { label: '이메일', placeholder: 'user@email.com', required: true, size: 'md' },
};
export const WithIcon: Story = {
  args: {
    label: '검색',
    placeholder: '여행지 검색',
    leftIcon: '🔍',
    rightIcon: '✕',
    size: 'md',
  },
};
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 280 }}>
      <Form label="Large" placeholder="placeholder" size="lg" />
      <Form label="Medium" placeholder="placeholder" size="md" />
      <Form label="Small" placeholder="placeholder" size="sm" />
    </div>
  ),
};
