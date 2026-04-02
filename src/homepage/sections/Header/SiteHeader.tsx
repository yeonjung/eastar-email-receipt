import styles from './SiteHeader.module.css';

const navItems = [
  { key: 'booking', label: '항공권 예매' },
  { key: 'mypage', label: '나의 예매' },
  { key: 'service', label: '서비스 안내' },
  { key: 'event', label: '이벤트' },
  { key: 'affiliate', label: '제휴상품' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoImg}>E</div>
          <span className={styles.logoText}>EASTAR<span className={styles.logoStar}>★</span>JET</span>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.key} className={styles.navItem}>{item.label}</a>
          ))}
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          {/* Airplane icon */}
          <span className={styles.actionIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </span>
          {/* Share icon */}
          <span className={styles.actionIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </span>
          {/* W points icon placeholder */}
          <span className={styles.actionIcon} style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '-0.05em' }}>W</span>
          <span className={styles.appBtn}>앱스토어</span>
        </div>
      </div>
    </header>
  );
}
