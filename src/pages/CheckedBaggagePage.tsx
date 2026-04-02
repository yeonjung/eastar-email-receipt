import React, { useState } from 'react';
import styles from './CheckedBaggagePage.module.css';
import { ModalTabBar } from '../components/ModalTabBar/ModalTabBar';
import { ChipCheckedBaggage } from '../components/ChipCheckedBaggage/ChipCheckedBaggage';
import { ChipSelectBaggageKg } from '../components/ChipSelectBaggageKg/ChipSelectBaggageKg';
import { FooterFixBtn } from '../components/FooterFixBtn/FooterFixBtn';
import { Icon, IconPaths } from '../components/Icon/Icon';
import { cn } from '../utils/cn';

// ─── Static data ─────────────────────────────────────────────────────────────

const BAGGAGE_OPTIONS = [
  { kg: '5',  totalKg: '20', price: '15,000' },
  { kg: '10', totalKg: '25', price: '28,000' },
  { kg: '15', totalKg: '30', price: '40,000' },
  { kg: '20', totalKg: '35', price: '50,000' },
  { kg: '25', totalKg: '40', price: '58,000' },
  { kg: '45', totalKg: '45', price: '65,000' },
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

// ─── NoticeAccordion sub-component ───────────────────────────────────────────

interface NoticeAccordionProps {
  open: boolean;
  onToggle: () => void;
  variant?: 'desktop' | 'phone';
}

const NoticeAccordion: React.FC<NoticeAccordionProps> = ({
  open,
  onToggle,
  variant = 'desktop',
}) => (
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

        <p className={styles.noticeSubtitle}>악기류</p>

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

export const CheckedBaggagePage: React.FC = () => {
  const [activeTab, setActiveTab]           = useState<'outbound' | 'inbound'>('outbound');
  const [activePassenger, setActivePassenger] = useState(0);
  // Per-passenger selection: key = passenger index, value = selected kg string | null
  const [selectedKgByPassenger, setSelectedKgByPassenger] = useState<Record<number, string | null>>({});
  const [isNoticeOpen, setIsNoticeOpen]     = useState(true);

  // Total price = sum of all passengers' selected options
  const totalPrice = PASSENGERS.reduce((sum, _, i) => {
    const kg = selectedKgByPassenger[i];
    const option = BAGGAGE_OPTIONS.find((o) => o.kg === kg);
    if (!option) return sum;
    return sum + parseInt(option.price.replace(/,/g, ''), 10);
  }, 0);
  const priceText = totalPrice > 0
    ? totalPrice.toLocaleString('ko-KR')
    : '0';

  const handleBaggageSelect = (kg: string) => {
    setSelectedKgByPassenger((prev) => ({
      ...prev,
      [activePassenger]: prev[activePassenger] === kg ? null : kg,
    }));
  };

  const handlePassengerRemove = (passengerIdx: number) => {
    setSelectedKgByPassenger((prev) => ({ ...prev, [passengerIdx]: null }));
  };

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP  (≥ 769px)
      ════════════════════════════════════════ */}
      <div className={styles.desktopView}>
        <ModalTabBar
          device="desktop"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className={styles.desktopBody}>
          <div className={styles.desktopContents}>
            {/* ── Sidebar: passenger chips ── */}
            <aside className={styles.sideWrap}>
              {PASSENGERS.map((p, i) => {
                const isActive = i === activePassenger;
                const passengerKg = selectedKgByPassenger[i] ?? null;
                const chipState = passengerKg
                  ? 'selected'
                  : isActive
                  ? 'selecting'
                  : 'not-selected';
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

              <div className={styles.baggageSection}>
                {/* Baggage option grid */}
                <div className={styles.chipGrid}>
                  {BAGGAGE_OPTIONS.map((o) => (
                    <ChipSelectBaggageKg
                      key={o.kg}
                      device="desktop"
                      kg={o.kg}
                      totalKg={o.totalKg}
                      price={o.price}
                      selected={(selectedKgByPassenger[activePassenger] ?? null) === o.kg}
                      onClick={() => handleBaggageSelect(o.kg)}
                    />
                  ))}
                </div>

                {/* Notice accordion */}
                <NoticeAccordion
                  open={isNoticeOpen}
                  onToggle={() => setIsNoticeOpen((v) => !v)}
                  variant="desktop"
                />
              </div>
            </main>
          </div>
        </div>

        {/* Sticky footer */}
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
        {/* Top navigation bar */}
        <div className={styles.topBar}>
          <h1 className={styles.topBarTitle}>위탁 수화물 추가</h1>
          <button type="button" className={styles.topBarClose} aria-label="닫기">
            <Icon path={IconPaths.close} size="md" aria-hidden />
          </button>
        </div>

        {/* Tab bar (phone variant — underline only) */}
        <ModalTabBar
          device="phone"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Scrollable page body */}
        <div className={styles.mobileBody}>
          {/* Horizontal chip scroll */}
          <div className={styles.chipsScrollTrack}>
            <div className={styles.chipsScrollList}>
              {PASSENGERS.map((p, i) => {
                const isActive = i === activePassenger;
                const passengerKg = selectedKgByPassenger[i] ?? null;
                const chipState = passengerKg
                  ? 'selected'
                  : isActive
                  ? 'selecting'
                  : 'not-selected';
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

          {/* Baggage option list (full-width, phone variant) */}
          <div className={styles.baggageListMobile}>
            <p className={styles.baggageSectionTitle}>탑승객별로 여행에 필요한 수하물 무게를 추가하세요.</p>
            {BAGGAGE_OPTIONS.map((o) => (
              <ChipSelectBaggageKg
                key={o.kg}
                device="phone"
                kg={o.kg}
                totalKg={o.totalKg}
                price={o.price}
                selected={(selectedKgByPassenger[activePassenger] ?? null) === o.kg}
                onClick={() => handleBaggageSelect(o.kg)}
                className={styles.chipFull}
              />
            ))}

            <NoticeAccordion
              open={isNoticeOpen}
              onToggle={() => setIsNoticeOpen((v) => !v)}
              variant="phone"
            />
          </div>
        </div>

        {/* Mobile footer CTA */}
        <div className={styles.mobileFooter}>
          {/* Price summary row */}
          <button
            type="button"
            className={styles.mobileFooterPriceRow}
            aria-label="운임 상세 보기"
          >
            <span className={styles.mobileFooterPriceLabel}>총 추가 비용</span>
            <div className={styles.mobileFooterPriceRight}>
              <span className={styles.mobileFooterPriceAmount}>
                KRW <strong>{priceText}</strong>
              </span>
            </div>
          </button>

          {/* Primary action button */}
          <div className={styles.mobileFooterCta}>
            <button type="button" className={styles.mobileBtnPrimary}>
              다음
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

CheckedBaggagePage.displayName = 'CheckedBaggagePage';
