import React, { useState } from 'react';
import styles from './CheckedBaggagePageB.module.css';
import { ModalTabBar } from '../components/ModalTabBar/ModalTabBar';
import { ChipCheckedBaggage } from '../components/ChipCheckedBaggage/ChipCheckedBaggage';
import { FooterFixBtn } from '../components/FooterFixBtn/FooterFixBtn';
import { GraphBaggageTotal } from '../components/GraphBaggageTotal/GraphBaggageTotal';
import { Icon, IconPaths } from '../components/Icon/Icon';
import { cn } from '../utils/cn';

// ─── Static data ─────────────────────────────────────────────────────────────

const BAGGAGE_OPTIONS = [
  { kg: '5',  price: '15,000' },
  { kg: '10', price: '28,000' },
  { kg: '15', price: '40,000' },
  { kg: '20', price: '50,000' },
  { kg: '25', price: '57,000' },
  { kg: '30', price: '60,000' },
] as const;

const PASSENGERS = [
  { passengerIndex: '1. ', secondName: '홍', firstName: '길동' },
  { passengerIndex: '2. ', secondName: 'Albert', firstName: 'Wolfeschlegelsteinhausenbergerdorff' },
  { passengerIndex: '3. ', secondName: '홍', firstName: '길삼' },
  { passengerIndex: '4. ', secondName: '홍', firstName: '길사' },
];

const NOTICE_ITEMS = [
  '위탁수하물 1개의 무게는 32kg를 초과할 수 없으며, 초과 시 분리하여 포장해 주셔야 합니다.',
  '특수 수하물은 모양과 크기가 일반 수하물과 달라 운송 도중 내용물이 휘거나 파손될 가능성이 높으니 전용케이스 또는 Box에 견고히 포장되어 있어야만 접수가 가능합니다.',
  '하드케이스(전용 포장용기)에 넣지 않은 특수 수하물은 운송이 거절될 수 있으며, 파손 시 보상이 불가하오니 유의하여 주시기 바랍니다.',
  '특수 수하물에 대한 문의는 예약센터를 통해 사전에 확인 부탁드립니다.',
];

const INSTRUMENT_ITEMS = [
  '바이올린과 같이 세변의 합 (A+B+C)이 115cm/45in 이하의 악기는 무료로 기내 반입 가능합니다. (기내 선반 혹은 좌석 밑 보관 가능해야 함)',
  '세 변의 합이 115cm/45inch를 초과하는 악기는 별도의 좌석을 구매하여 운송해야 합니다.',
  '수하물 운송의 경우 파손에 대비해 완충재 등을 하드케이스에 내부에 넣어 운송해야 합니다.',
  '대형 악기의 기내 반입을 원하시는 분은 인터넷 상으로는 구매 불가능하오니, 반드시 사전에 예약센터를 통해 별도의 항공권을 구입하시기 바랍니다. (예매문의: 1544-0080)',
];

// ─── Notice Accordion ─────────────────────────────────────────────────────────

interface NoticeAccordionProps {
  open: boolean;
  onToggle: () => void;
  variant?: 'desktop' | 'phone';
}

const NoticeAccordion: React.FC<NoticeAccordionProps> = ({ open, onToggle, variant = 'desktop' }) => (
  <div className={cn(styles.accordion, variant === 'phone' && styles.accordionPhone)}>
    <button
      type="button"
      className={styles.accordionHeader}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span className={styles.accordionTitle}>유의사항</span>
      <span className={cn(styles.accordionChevron, open && styles.accordionChevronOpen)}>
        <Icon path={IconPaths.arrowDown} size={variant === 'phone' ? 'sm' : 'md'} aria-hidden />
      </span>
    </button>

    {open && (
      <div className={styles.accordionBody}>
        <ul className={styles.noticeList}>
          {NOTICE_ITEMS.map((text, i) => (
            <li key={i} className={styles.noticeItem}>
              <span className={styles.bullet} aria-hidden="true">•</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <p className={styles.accordionSubTitle}>악기류</p>
        <ul className={styles.noticeList}>
          {INSTRUMENT_ITEMS.map((text, i) => (
            <li key={i} className={styles.noticeItem}>
              <span className={styles.bullet} aria-hidden="true">•</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

// ─── Page component ───────────────────────────────────────────────────────────

const CheckedBaggagePageB: React.FC = () => {
  const [activeTab, setActiveTab]             = useState<'outbound' | 'inbound'>('outbound');
  const [activePassenger, setActivePassenger] = useState(0);
  const [selectedKgByPassenger, setSelectedKgByPassenger] = useState<Record<number, string | null>>({});
  const [isNoticeOpenDesktop, setIsNoticeOpenDesktop] = useState(true);
  const [isNoticeOpenPhone, setIsNoticeOpenPhone]     = useState(false);

  const totalPrice = PASSENGERS.reduce((sum, _, i) => {
    const kg = selectedKgByPassenger[i];
    const option = BAGGAGE_OPTIONS.find((o) => o.kg === kg);
    if (!option) return sum;
    return sum + parseInt(option.price.replace(/,/g, ''), 10);
  }, 0);
  const priceText = totalPrice > 0 ? totalPrice.toLocaleString('ko-KR') : '0';

  const handleBaggageSelect = (kg: string) => {
    setSelectedKgByPassenger((prev) => ({
      ...prev,
      [activePassenger]: prev[activePassenger] === kg ? null : kg,
    }));
  };

  const handlePassengerRemove = (passengerIdx: number) => {
    setSelectedKgByPassenger((prev) => ({ ...prev, [passengerIdx]: null }));
  };

  const activePassengerKg = selectedKgByPassenger[activePassenger] ?? null;

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP  (≥ 769px)
      ════════════════════════════════════════ */}
      <div className={styles.desktopView}>
        <ModalTabBar device="desktop" activeTab={activeTab} onTabChange={setActiveTab} />

        <div className={styles.desktopBody}>
          <div className={styles.desktopContents}>
            {/* ── Sidebar: passenger chips ── */}
            <aside className={styles.sideWrap}>
              {PASSENGERS.map((p, i) => {
                const isActive = i === activePassenger;
                const passengerKg = selectedKgByPassenger[i] ?? null;
                const chipState = passengerKg ? 'selected' : isActive ? 'selecting' : 'not-selected';
                return (
                  <ChipCheckedBaggage
                    key={i}
                    active={isActive}
                    passengerIndex={p.passengerIndex}
                    secondName={p.secondName}
                    firstName={p.firstName}
                    state={chipState}
                    totalKg={passengerKg ?? undefined}
                    onClick={() => setActivePassenger(i)}
                    onRemove={() => handlePassengerRemove(i)}
                  />
                );
              })}
            </aside>

            {/* ── Main content ── */}
            <main className={styles.contentWrap}>
              <h1 className={styles.pageTitle}>위탁 수화물 추가</h1>

              {/* B안 추가: 총 무게 그래프 */}
              <GraphBaggageTotal
                selectedKg={activePassengerKg}
                device="desktop"
              />

              <div className={styles.baggageSection}>
                {/* 타이틀 + 칩 그리드 — gap 16px */}
                <div className={styles.chipListWrap}>
                  {PASSENGERS.length > 1 && (
                    <p className={styles.sectionLabel}>추가 운임 선택</p>
                  )}
                  {/* 6-column chip grid */}
                  <div className={styles.chipGridDesktop}>
                    {BAGGAGE_OPTIONS.map((o) => (
                      <BaggageKgCardDesktop
                        key={o.kg}
                        kg={o.kg}
                        price={o.price}
                        selected={(selectedKgByPassenger[activePassenger] ?? null) === o.kg}
                        onClick={() => handleBaggageSelect(o.kg)}
                      />
                    ))}
                  </div>
                </div>

                <NoticeAccordion
                  open={isNoticeOpenDesktop}
                  onToggle={() => setIsNoticeOpenDesktop((v) => !v)}
                  variant="desktop"
                />
              </div>
            </main>
          </div>
        </div>

        <FooterFixBtn
          showSecondaryBtn={false}
          labelPrimary="다음"
          priceText={priceText}
        />
      </div>

      {/* ════════════════════════════════════════
          MOBILE  (≤ 768px)
      ════════════════════════════════════════ */}
      <div className={styles.mobileView}>
        {/* Top bar */}
        <div className={styles.topBar}>
          <h1 className={styles.topBarTitle}>위탁 수화물 추가</h1>
          <button type="button" className={styles.topBarClose} aria-label="닫기">
            <Icon path={IconPaths.close} size="md" aria-hidden />
          </button>
        </div>

        {/* Tab bar */}
        <ModalTabBar device="phone" activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Scrollable body */}
        <div className={styles.mobileBody}>
          {/* Horizontal passenger chip scroll */}
          <div className={styles.chipsScrollTrack}>
            <div className={styles.chipsScrollList}>
              {PASSENGERS.map((p, i) => {
                const isActive = i === activePassenger;
                const passengerKg = selectedKgByPassenger[i] ?? null;
                const chipState = passengerKg ? 'selected' : isActive ? 'selecting' : 'not-selected';
                return (
                  <ChipCheckedBaggage
                    key={i}
                    active={isActive}
                    passengerIndex={p.passengerIndex}
                    secondName={p.secondName}
                    firstName={p.firstName}
                    state={chipState}
                    totalKg={passengerKg ?? undefined}
                    onClick={() => setActivePassenger(i)}
                    onRemove={() => handlePassengerRemove(i)}
                  />
                );
              })}
            </div>
          </div>

          {/* B안 추가: 총 무게 그래프 (모바일) */}
          <GraphBaggageTotal
            selectedKg={activePassengerKg}
            device="phone"
          />

          {/* Baggage option section */}
          <div className={styles.baggageSectionMobile}>
            <p className={styles.sectionLabel}>추가 운임 선택</p>

            {/* 3×2 compact card grid */}
            <div className={styles.chipGridMobile}>
              {BAGGAGE_OPTIONS.map((o) => (
                <BaggageKgCardMobile
                  key={o.kg}
                  kg={o.kg}
                  price={o.price}
                  selected={(selectedKgByPassenger[activePassenger] ?? null) === o.kg}
                  onClick={() => handleBaggageSelect(o.kg)}
                />
              ))}
            </div>

            <NoticeAccordion
              open={isNoticeOpenPhone}
              onToggle={() => setIsNoticeOpenPhone((v) => !v)}
              variant="phone"
            />
          </div>
        </div>

        {/* Mobile footer */}
        <div className={styles.mobileFooter}>
          <div className={styles.mobileFooterPriceRow}>
            <span className={styles.mobileFooterPriceLabel}>총 추가 비용 </span>
            <span className={styles.mobileFooterPriceAmount}>KRW <strong>{priceText}</strong></span>
          </div>
          <div className={styles.mobileFooterCta}>
            <button type="button" className={styles.mobileBtnPrimary}>다음</button>
          </div>
        </div>
      </div>
    </>
  );
};

// ─── B안 전용 데스크탑 카드 칩 (132×168px, icon + +Xkg + price) ───────────────

interface BaggageKgCardDesktopProps {
  kg: string;
  price: string;
  selected: boolean;
  onClick?: () => void;
}

const BaggageKgCardDesktop: React.FC<BaggageKgCardDesktopProps> = ({ kg, price, selected, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className={cn(styles.cardChipDesktop, selected && styles.cardChipDesktopSelected)}
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
  >
    <Icon
      path={selected ? IconPaths.luggageOutlined : IconPaths.luggageOutlined1px}
      variant="stroke"
      strokeWidth={selected ? 1.5 : 1}
      size="xl"
      className={cn(styles.cardChipDesktopIcon, selected && styles.cardChipDesktopIconSelected)}
    />
    <div className={styles.cardChipDesktopInfo}>
      <span className={styles.cardChipDesktopKg}>+{kg}kg</span>
      <span className={styles.cardChipDesktopPrice}>KRW {price}</span>
    </div>
  </div>
);

// ─── B안 전용 모바일 카드 칩 (102×115px, icon + +Xkg + price) ─────────────────

interface BaggageKgCardMobileProps {
  kg: string;
  price: string;
  selected: boolean;
  onClick?: () => void;
}

const BaggageKgCardMobile: React.FC<BaggageKgCardMobileProps> = ({ kg, price, selected, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className={cn(styles.cardChip, selected && styles.cardChipSelected)}
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
  >
    <Icon
      path={selected ? IconPaths.luggageOutlined : IconPaths.luggageOutlined1px}
      variant="stroke"
      strokeWidth={selected ? 1.5 : 1}
      size="lg"
      className={cn(styles.cardChipIcon, selected && styles.cardChipIconSelected)}
    />
    <div className={styles.cardChipInfo}>
      <span className={styles.cardChipKg}>+{kg}kg</span>
      <span className={styles.cardChipPrice}>KRW {price}</span>
    </div>
  </div>
);

export default CheckedBaggagePageB;
