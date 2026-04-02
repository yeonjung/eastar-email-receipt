import { useState } from 'react';
import { Tab } from '@components/Tab/Tab';
import styles from './PriceChartSection.module.css';
import { priceChartData } from '../../data/homepageData';

const routeTabs = [
  { key: 'daegu', label: '다낭' },
  { key: 'natrang', label: '나트랑' },
  { key: 'phuquoc', label: '푸쿠옥' },
  { key: 'kagoshima', label: '가고시마' },
  { key: 'tokushima', label: '도쿠시마' },
];

const routeNames: Record<string, string> = {
  daegu: '다낭',
  natrang: '나트랑',
  phuquoc: '푸쿠옥',
  kagoshima: '가고시마',
  tokushima: '도쿠시마',
};

export function PriceChartSection() {
  const [activeRoute, setActiveRoute] = useState('daegu');

  const data = priceChartData[activeRoute];
  const maxPrice = Math.max(...data.bars.map((b) => b.price));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>한눈에 보는 항공권 가격</h2>

        <div className={styles.tabsRow}>
          <Tab
            items={routeTabs}
            activeKey={activeRoute}
            onChange={setActiveRoute}
            variant="line"
            size="md"
          />
        </div>

        <div className={styles.priceInfo}>
          <span className={styles.routeLabel}>{routeNames[activeRoute]} 최저가</span>
          <span className={styles.minPrice}>KRW {data.minPrice.toLocaleString()} ~</span>
        </div>
        <p className={styles.priceNote}>서울/인천 출발, 왕복, 성인 1인 기준</p>

        {/* Bar chart */}
        <div className={styles.chartWrap}>
          <div className={styles.chart}>
            {data.bars.map((bar, i) => (
              <div key={i} className={styles.barCol}>
                <div
                  className={`${styles.bar} ${bar.highlighted ? styles.barHighlight : styles.barDefault}`}
                  style={{ height: `${Math.max((bar.price / maxPrice) * 100, 5)}%` }}
                  title={`KRW ${bar.price.toLocaleString()}`}
                />
              </div>
            ))}
          </div>
          <div className={styles.dateLabels}>
            {data.bars.map((bar, i) => (
              <span key={i} className={styles.dateLabel}>{bar.date}</span>
            ))}
          </div>
        </div>

        <div className={styles.btnRow}>
          <button className={styles.moreBtn}>다른 노선 최저가 확인 ›</button>
        </div>
      </div>
    </section>
  );
}
