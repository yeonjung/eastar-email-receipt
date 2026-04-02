import { useState } from 'react';
import styles from './HeroSection.module.css';
import { heroSlides } from '../../data/homepageData';

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;
  const slide = heroSlides[current];

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className={styles.hero} style={{ backgroundColor: slide.bgColor }}>
      <div className={styles.inner}>
        {/* Left: text content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeItem}>PEANUTS</span>
            <span className={styles.badgeSep}>×</span>
            <span className={styles.badgeItem}>EASTAR JET</span>
          </div>
          <h1 className={styles.headline}>{slide.headline}</h1>
          <p className={styles.subline}>{slide.subline}</p>
          <div className={styles.carouselControls}>
            <button className={styles.carouselBtn} onClick={prev} aria-label="이전">‹</button>
            <span className={styles.carouselIndicator}>{current + 1} / {total + 9}</span>
            <button className={styles.carouselBtn} onClick={next} aria-label="다음">›</button>
          </div>
        </div>

        {/* Center: character illustration */}
        <div className={styles.illustrationArea}>
          <div className={styles.characterGroup}>
            <div className={styles.characterCircle}>
              <span className={styles.characterLabel}>🐾 Peanuts<br/>Characters</span>
            </div>
            <div className={`${styles.figure} ${styles.figureA}`} />
            <div className={`${styles.figure} ${styles.figureB}`} />
            <div className={`${styles.figure} ${styles.figureC}`} />
          </div>
        </div>

        {/* Right: promo panel */}
        <div className={styles.promoPanel}>
          <div className={styles.promoIcon}>✈️</div>
          <p className={styles.promoTitle}>지금 이스타항공에서는<br/>해외여행일 날짜 변경 수수료 무료</p>
          <p className={styles.promoSub}>항공권 예매 후 날짜 변경 시<br/>수수료가 면제됩니다</p>
        </div>
      </div>
    </section>
  );
}
