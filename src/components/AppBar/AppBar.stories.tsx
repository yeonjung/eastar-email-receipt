import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AppBar } from './AppBar';
import type { GnbMenuItem } from './AppBar';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
AppBar — 3가지 변형을 지원하는 내비게이션 바 컴포넌트.

**Source**: Figma 공통요소 가이드
- \`gnb\`: 데스크탑 GNB (height: 64px) — 로고 + 메인 메뉴 + 인증 영역
- \`top\`: 모바일 상단 바 (height: 56px) — 뒤로가기 + 타이틀 + 액션
- \`bottom\`: 모바일 하단 탭 바 (height: 50px) — 아이콘 + 레이블 탭
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'radio', options: ['gnb', 'top', 'bottom'] },
    transparent: { control: 'boolean' },
    isLoggedIn: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof AppBar>;

// ── GNB 공통 메뉴 데이터 ──────────────────────────────────────────────
const GNB_MENU: GnbMenuItem[] = [
  {
    key: 'flight',
    label: '항공권',
    children: [
      { key: 'one-way',  label: '편도' },
      { key: 'round',    label: '왕복' },
      { key: 'multi',    label: '다구간' },
    ],
  },
  {
    key: 'schedule',
    label: '노선/스케줄',
    children: [
      { key: 'routes',   label: '운항 노선' },
      { key: 'timetable',label: '시간표' },
    ],
  },
  {
    key: 'service',
    label: '서비스 안내',
    children: [
      { key: 'baggage',  label: '수하물' },
      { key: 'seat',     label: '좌석' },
      { key: 'meal',     label: '기내식' },
    ],
  },
  { key: 'event', label: '이벤트' },
  { key: 'cs',    label: '고객지원' },
];

// ── GNB Stories ──────────────────────────────────────────────────────
export const GNBDefault: Story = {
  name: 'GNB / Default (비로그인)',
  render: () => (
    <AppBar
      variant="gnb"
      menuItems={GNB_MENU}
      activeMenuKey="flight"
      onLogin={() => alert('로그인')}
      onSignup={() => alert('회원가입')}
    />
  ),
};

export const GNBLoggedIn: Story = {
  name: 'GNB / Logged In',
  render: () => (
    <AppBar
      variant="gnb"
      menuItems={GNB_MENU}
      activeMenuKey="flight"
      isLoggedIn
    />
  ),
};

export const GNBInteractive: Story = {
  name: 'GNB / Interactive (메가메뉴 hover)',
  parameters: { docs: { description: { story: '메뉴 항목에 마우스를 올리면 드롭다운이 표시됩니다.' } } },
  render: () => {
    const [activeKey] = useState('flight');
    return (
      <div style={{ minHeight: 300 }}>
        <AppBar
          variant="gnb"
          menuItems={GNB_MENU}
          activeMenuKey={activeKey}
          isLoggedIn
          gnbActions={
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>🔔</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>👤</button>
            </div>
          }
        />
        <div style={{ padding: 24, fontFamily: 'sans-serif', fontSize: 13, color: '#9E9E9E' }}>
          현재 활성 메뉴: <strong style={{ color: '#FF6600' }}>{activeKey}</strong>
        </div>
      </div>
    );
  },
};

// ── Mobile Top Bar Stories ────────────────────────────────────────────
export const TopBar: Story = {
  name: 'Top Bar / Default',
  render: () => (
    <div style={{ maxWidth: 390 }}>
      <AppBar
        variant="top"
        title="항공권 검색"
        onBack={() => {}}
        actions={<button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>🔔</button>}
      />
    </div>
  ),
};

export const TopBarNoBack: Story = {
  name: 'Top Bar / No Back Button',
  render: () => (
    <div style={{ maxWidth: 390 }}>
      <AppBar
        variant="top"
        title="이스타항공"
        actions={<button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>☰</button>}
      />
    </div>
  ),
};

// ── Mobile Bottom Tab Bar Stories ─────────────────────────────────────
const NAV_ITEMS = [
  { key: 'home',   label: '홈',    icon: '🏠' },
  { key: 'flight', label: '항공권', icon: '✈️' },
  { key: 'booking',label: '예약',   icon: '📋' },
  { key: 'my',     label: 'MY',    icon: '👤' },
];

export const BottomBar: Story = {
  name: 'Bottom Tab Bar',
  render: () => {
    const [active, setActive] = useState('flight');
    return (
      <div style={{ maxWidth: 390, height: 200, position: 'relative', border: '1px solid #eee' }}>
        <div style={{ padding: 16, fontFamily: 'sans-serif', fontSize: 13, color: '#9E9E9E' }}>
          활성 탭: <strong style={{ color: '#FF6600' }}>{active}</strong>
        </div>
        <AppBar
          variant="bottom"
          navItems={NAV_ITEMS}
          activeNavKey={active}
          onNavChange={setActive}
          style={{ position: 'absolute' }}
        />
      </div>
    );
  },
};

// ── All Variants ──────────────────────────────────────────────────────
export const AllVariants: Story = {
  name: 'All Variants Overview',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontFamily: 'sans-serif' }}>
      <div>
        <p style={{ color: '#9E9E9E', fontSize: 12, marginBottom: 8 }}>GNB — Desktop (64px)</p>
        <AppBar variant="gnb" menuItems={GNB_MENU.slice(0, 3)} isLoggedIn />
      </div>
      <div>
        <p style={{ color: '#9E9E9E', fontSize: 12, marginBottom: 8 }}>Top Bar — Mobile (56px)</p>
        <div style={{ maxWidth: 390 }}>
          <AppBar variant="top" title="페이지 제목" onBack={() => {}} actions={<span>🔔</span>} />
        </div>
      </div>
      <div>
        <p style={{ color: '#9E9E9E', fontSize: 12, marginBottom: 8 }}>Bottom Tab Bar — Mobile (50px)</p>
        <div style={{ maxWidth: 390, position: 'relative', height: 100, border: '1px solid #eee' }}>
          <AppBar variant="bottom" navItems={NAV_ITEMS} activeNavKey="home" onNavChange={() => {}} style={{ position: 'absolute' }} />
        </div>
      </div>
    </div>
  ),
};
