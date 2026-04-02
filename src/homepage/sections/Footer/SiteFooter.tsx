import styles from './SiteFooter.module.css';
import { footerColumns } from '../../data/homepageData';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      {/* Top bar: logo + phones + app buttons */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <div className={styles.logoArea}>
            <span className={styles.footerLogo}>EASTAR★JET</span>
            <span className={styles.eAgency}>여행사 전용 E-AGENCY</span>
            <div className={styles.appButtons}>
              <button className={styles.appBtn}>App Store</button>
              <button className={styles.appBtn}>앱스토어</button>
            </div>
          </div>
          <div className={styles.phoneArea}>
            <p className={styles.phoneLabel}>도움이 필요하세요?</p>
            <div className={styles.phoneNumbers}>
              <div>
                <div className={styles.phone}>1544.0080</div>
                <div className={styles.phoneSub}>예약문의·결제 09:00~18:00 / 365일</div>
              </div>
              <div>
                <div className={styles.phone}>1533.3458</div>
                <div className={styles.phoneSub}>탑승일 운영 09:00 / 마지막 편 이후</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className={styles.linksBar}>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <p className={styles.colTitle}>{col.title}</p>
            <div className={styles.colLinks}>
              {col.links.map((link) => (
                <a key={link} className={styles.colLink}>{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: ISMS + copyright */}
      <div className={styles.bottomBar}>
        <div className={styles.isms}>
          <div className={styles.ismsBox}>isms</div>
          <span style={{ fontSize: '10px', color: '#9e9e9e' }}>
            인증범위: 이스타항공 홈페이지 서비스<br />
            유효기간: 2024.08.05 ~ 2027.08.04
          </span>
        </div>
        <span className={styles.copyright}>
          Copyright EastarJet. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
