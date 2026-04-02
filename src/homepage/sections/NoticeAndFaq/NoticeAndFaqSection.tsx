import styles from './NoticeAndFaqSection.module.css';
import { notices, faqItems } from '../../data/homepageData';

export function NoticeAndFaqSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Notices */}
        <div className={styles.box}>
          <div className={styles.boxHeadingRow}>
            <h3 className={styles.boxHeading}>공지사항</h3>
            <span className={styles.moreLink}>더 보기 ›</span>
          </div>
          <div className={styles.noticeList}>
            {notices.map((n) => (
              <div key={n.id} className={styles.noticeItem}>
                <span className={styles.noticeTitle}>{n.title}</span>
                <span className={styles.noticeDate}>{n.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.box}>
          <div className={styles.boxHeadingRow}>
            <h3 className={styles.boxHeading}>자주 묻는 질문</h3>
            <span className={styles.moreLink}>더 보기 ›</span>
          </div>
          <div className={styles.faqGrid}>
            {faqItems.map((item) => (
              <div key={item.id} className={styles.faqItem}>
                <span className={styles.faqIcon}>Q</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
