import styles from './DestinationsSection.module.css';
import { destinations } from '../../data/homepageData';

export function DestinationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>미리 준비하는 최저가 여행</h2>
          <span className={styles.moreLink}>빠른 검색 ›</span>
        </div>
        <div className={styles.grid}>
          {destinations.map((dest) => (
            <div key={dest.id} className={styles.card}>
              <div className={styles.imgArea} style={{ background: dest.bgColor }}>
                <span className={styles.codeTag}>{dest.code}</span>
              </div>
              <div className={styles.info}>
                <p className={styles.from}>{dest.from}</p>
                <p className={styles.city}>{dest.city}({dest.code})</p>
                <div className={styles.price}>
                  <span className={styles.priceLabel}>KRW</span>
                  <span className={styles.priceValue}>{dest.price.toLocaleString()}</span>
                </div>
                <p className={styles.date}>{dest.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
