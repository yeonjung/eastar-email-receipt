import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Snackbar } from './Snackbar';
import { Button } from '../Button/Button';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { type: { control: 'select', options: ['success','error','warning','info'] } },
};
export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Success: Story = { args: { type: 'success', message: '예약이 완료되었습니다.', visible: true, duration: 0 } };
export const Error: Story   = { args: { type: 'error',   message: '결제에 실패했습니다. 다시 시도해주세요.', visible: true, duration: 0 } };
export const Warning: Story = { args: { type: 'warning', message: '좌석 선택 시간이 곧 만료됩니다.', visible: true, duration: 0 } };
export const Info: Story    = { args: { type: 'info',    message: '수하물 정보를 확인해주세요.', visible: true, duration: 0 } };
export const WithAction: Story = {
  args: { type: 'error', message: '네트워크 오류가 발생했습니다.', actionLabel: '재시도', visible: true, duration: 0 },
};

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['success','error','warning','info'] as const).map(t => (
        <Snackbar key={t} type={t} message={{ success:'예약이 완료되었습니다.', error:'결제 실패', warning:'시간 만료 예정', info:'정보 메시지' }[t] as string} visible duration={0} />
      ))}
    </div>
  ),
};

export const LiveDemo: Story = {
  name: 'Live Demo (trigger)',
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <Button onClick={() => setVisible(true)}>스낵바 표시</Button>
        <Snackbar type="success" message="예약이 완료되었습니다!" visible={visible} onClose={() => setVisible(false)} duration={3000} />
      </div>
    );
  },
};
