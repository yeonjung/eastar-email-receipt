import styles from './EventsSection.module.css';
import { events } from '../../data/homepageData';

export function EventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>진행 중인 이벤트</h2>
        <div className={styles.grid}>
          {events.map((ev) => (
            <div
              key={ev.id}
              className={styles.card}
              style={{ background: `linear-gradient(135deg, ${ev.bgColor} 0%, ${ev.accentColor} 100%)` }}
            >
              <span className={styles.badge}>EVENT</span>
              <div className={styles.textArea}>
                <p className={styles.subtitle}>{ev.subtitle}</p>
                <p className={styles.title}>{ev.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
