import styles from './AnnouncementBar.module.css';

export function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <span className={styles.label}>공지사항</span>
        <span className={styles.text}>
          [공지사항] 국제(인터넷) 유류할증료(2026년 01월) 추가 노선 안내
        </span>
        <span className={styles.arrow}>›</span>
      </div>
    </div>
  );
}
