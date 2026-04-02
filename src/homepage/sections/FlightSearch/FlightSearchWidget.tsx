import { useState } from 'react';
import { Tab } from '@components/Tab/Tab';
import styles from './FlightSearchWidget.module.css';

const tabItems = [
  { key: 'oneway', label: '편도' },
  { key: 'round', label: '왕복' },
  { key: 'multi', label: '다구간' },
];

export function FlightSearchWidget() {
  const [activeTab, setActiveTab] = useState('round');
  const [from, setFrom] = useState('서울(모든 공항)');
  const [to, setTo] = useState('');

  const swap = () => {
    if (to) {
      setFrom(to);
      setTo(from);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.tabsRow}>
            <Tab
              items={tabItems}
              activeKey={activeTab}
              onChange={setActiveTab}
              variant="filled"
              size="md"
            />
          </div>
          <div className={styles.inputRow}>
            {/* From */}
            <button className={styles.airportBtn}>
              <div className={styles.airportLabel}>출발지</div>
              {from
                ? <div className={styles.airportValue}>{from}</div>
                : <div className={styles.airportPlaceholder}>출발지</div>
              }
            </button>

            {/* Swap */}
            <button className={styles.swapBtn} onClick={swap} aria-label="출발/도착 변경">
              ⇄
            </button>

            {/* To */}
            <button className={styles.airportBtn}>
              <div className={styles.airportLabel}>도착지</div>
              {to
                ? <div className={styles.airportValue}>{to}</div>
                : <div className={styles.airportPlaceholder}>도착지</div>
              }
            </button>

            {/* Date */}
            <button className={styles.dateBtn}>
              <div className={styles.dateLabel}>날짜</div>
              <div className={styles.datePlaceholder}>날짜 선택</div>
            </button>

            {/* Search */}
            <button className={styles.searchBtn}>항공권 검색</button>
          </div>
        </div>
      </div>
    </div>
  );
}
