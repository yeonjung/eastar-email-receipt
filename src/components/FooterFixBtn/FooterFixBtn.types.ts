import type { HTMLAttributes } from 'react';

/**
 * Figma: 디자인_ing > FooterFixBtn (node: 37-3364)
 * 예약 플로우 하단에 고정되는 가격 요약 + 액션 버튼 바.
 */
export interface FooterFixBtnProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 총 추가 비용 통화 단위. @default "KRW" */
  currencyUnit?: string;
  /** 총 추가 비용 금액 텍스트. @default "0" */
  priceText?: string;
  /** 나가기 버튼 표시 여부. @default true */
  showExitBtn?: boolean;
  /** 이전 버튼 표시 여부. @default true */
  showSecondaryBtn?: boolean;
  /** 툴팁 표시 여부. @default false */
  showTooltip?: boolean;
  /** 툴팁 내 강조 텍스트. @default "24시간 이내에 무료 취소" */
  tooltipHighlight?: string;
  /** 툴팁 일반 텍스트. @default " 가능해요" */
  tooltipSuffix?: string;
  /** 나가기 버튼 레이블. @default "나가기" */
  labelExit?: string;
  /** 이전 버튼 레이블. @default "이전" */
  labelSecondary?: string;
  /** 주 액션 버튼 레이블. @default "바로 결제" */
  labelPrimary?: string;
  /** 나가기 버튼 클릭 핸들러 */
  onExit?: () => void;
  /** 이전 버튼 클릭 핸들러 */
  onSecondary?: () => void;
  /** 주 액션 버튼 클릭 핸들러 */
  onPrimary?: () => void;
  /** 가격 영역(chevron) 클릭 핸들러 */
  onPriceClick?: () => void;
}
