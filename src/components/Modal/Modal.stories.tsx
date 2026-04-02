import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { type: { control: 'select', options: ['default','alert','confirm','bottom-sheet'] } },
};
export default meta;
type Story = StoryObj<typeof Modal>;

const Demo = ({ type, ...props }: Partial<React.ComponentProps<typeof Modal>>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal open={open} onClose={() => setOpen(false)} type={type} {...props} />
    </>
  );
};

export const Default: Story = {
  render: () => (
    <Demo type="default" title="여행자 정보 확인" description="입력한 정보가 올바른지 확인해주세요."
      primaryAction={{ label: '확인', onClick: () => {} }}
      secondaryAction={{ label: '수정하기', onClick: () => {} }}
    />
  ),
};
export const Alert: Story = {
  render: () => (
    <Demo type="alert" title="예약 취소 불가" description="출발 24시간 전에는 취소가 불가합니다."
      primaryAction={{ label: '확인', onClick: () => {} }}
    />
  ),
};
export const Confirm: Story = {
  render: () => (
    <Demo type="confirm" title="예약을 취소하시겠습니까?" description="취소 시 환불 규정에 따라 위약금이 발생할 수 있습니다."
      primaryAction={{ label: '예약 취소', onClick: () => {} }}
      secondaryAction={{ label: '유지하기', onClick: () => {} }}
    />
  ),
};
export const BottomSheet: Story = {
  name: 'Bottom Sheet',
  render: () => (
    <Demo type="bottom-sheet" title="좌석 등급 선택"
      primaryAction={{ label: '적용하기', onClick: () => {} }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['일반석', '프리미엄 일반석', '비즈니스석'].map(s => (
          <div key={s} style={{ padding: '14px 0', borderBottom: '1px solid #eee', fontFamily: 'sans-serif', fontSize: 14 }}>{s}</div>
        ))}
      </div>
    </Demo>
  ),
};
