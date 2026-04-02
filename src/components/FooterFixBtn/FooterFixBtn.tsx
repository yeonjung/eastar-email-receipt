import React from 'react';
import type { FooterFixBtnProps } from './FooterFixBtn.types';
import styles from './FooterFixBtn.module.css';
import { cn } from '../../utils/cn';

/**
 * FooterFixBtn
 * Figma: 디자인_ing > FooterFixBtn (node: 37-3364)
 *
 * 예약 플로우 하단 고정 바.
 * - 좌측: 나가기 버튼 (선택)
 * - 우측: 총 추가 비용 표시 + 이전 버튼 (선택) + 주 액션 버튼
 * - 주 액션 버튼 위에 툴팁 표시 (선택)
 */
export const FooterFixBtn: React.FC<FooterFixBtnProps> = ({
  currencyUnit    = 'KRW',
  priceText       = '0',
  showExitBtn     = true,
  showSecondaryBtn = true,
  showTooltip     = false,
  tooltipHighlight = '24시간 이내에 무료 취소',
  tooltipSuffix   = ' 가능해요',
  labelExit       = '나가기',
  labelSecondary  = '이전',
  labelPrimary    = '바로 결제',
  onExit,
  onSecondary,
  onPrimary,
  onPriceClick,
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.footer, className)} {...rest}>
      <div className={styles.container}>

        {/* 나가기 버튼 */}
        {showExitBtn && (
          <button
            type="button"
            className={styles.btnExit}
            onClick={onExit}
          >
            {labelExit}
          </button>
        )}

        {/* 우측 액션 그룹 */}
        <div className={styles.actionGroup}>

          {/* 가격 요약 */}
          <div
            className={styles.priceWrap}
            role={onPriceClick ? 'button' : undefined}
            tabIndex={onPriceClick ? 0 : undefined}
            onClick={onPriceClick}
            onKeyDown={onPriceClick
              ? (e) => { if (e.key === 'Enter' || e.key === ' ') onPriceClick(); }
              : undefined}
          >
            <span className={styles.priceLabel}>총 추가 비용</span>
            <div className={styles.priceAmount}>
              <span>{currencyUnit}</span>
              <span>{priceText}</span>
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div className={styles.buttonWrap}>

            {/* 툴팁 */}
            {showTooltip && (
              <div className={styles.tooltip} role="tooltip">
                <div className={styles.tooltipBubble}>
                  <span className={styles.tooltipHighlight}>{tooltipHighlight}</span>
                  <span>{tooltipSuffix}</span>
                </div>
                <div className={styles.tooltipArrow} aria-hidden />
              </div>
            )}

            {/* 이전 버튼 */}
            {showSecondaryBtn && (
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={onSecondary}
              >
                {labelSecondary}
              </button>
            )}

            {/* 주 액션 버튼 */}
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={onPrimary}
            >
              {labelPrimary}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterFixBtn.displayName = 'FooterFixBtn';
