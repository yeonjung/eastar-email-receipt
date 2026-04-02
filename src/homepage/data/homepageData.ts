export interface HeroSlide {
  id: string;
  badge: string;
  headline: string;
  subline: string;
  bgColor: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    badge: 'PEANUTS  EASTAR JET',
    headline: 'PEANUTS × 이스타항공\n함께하는 특별한 여행',
    subline: '당신의 여행에 귀여움이 가득',
    bgColor: '#D80027',
  },
  {
    id: '2',
    badge: 'SPECIAL OFFER',
    headline: '이스타항공과 함께\n특별한 순간을 만드세요',
    subline: '최저가 항공권 지금 예매하기',
    bgColor: '#B8001F',
  },
];

export interface EventCard {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  accentColor: string;
}

export const events: EventCard[] = [
  {
    id: '1',
    title: '도쿠시마 관광시설\n무료 입장권 증정',
    subtitle: '이스타항공 × 도쿠시마',
    bgColor: '#1a2535',
    accentColor: '#2a3f5f',
  },
  {
    id: '2',
    title: '롯데렌터카 제휴\n최대 할인 이벤트',
    subtitle: '최대 91% 할인 혜택!',
    bgColor: '#1a1a2e',
    accentColor: '#c0392b',
  },
  {
    id: '3',
    title: '베트남 인기 호텔\n1박 8만원대 특가',
    subtitle: '베트남 숙소 고민 해결!',
    bgColor: '#1e3a2f',
    accentColor: '#27ae60',
  },
];

export interface Destination {
  id: string;
  city: string;
  cityEn: string;
  from: string;
  code: string;
  price: number;
  date: string;
  bgColor: string;
}

export const destinations: Destination[] = [
  { id: '1', city: '나트랑', cityEn: 'Nha Trang', from: '서울/인천(ICN)', code: 'NHA(CXR)', price: 96400, date: '2026.03.22(일)', bgColor: '#4a7fa5' },
  { id: '2', city: '다낭', cityEn: 'Da Nang', from: '서울/인천(ICN)', code: 'DAD', price: 98500, date: '2026.03.22(일)', bgColor: '#8b5e3c' },
  { id: '3', city: '푸쿠옥', cityEn: 'Phu Quoc', from: '서울/인천(ICN)', code: 'PQC', price: 111400, date: '2026.03.22(일)', bgColor: '#2d7a6e' },
  { id: '4', city: '방콕', cityEn: 'Bangkok', from: '서울/인천(ICN)', code: 'BKK', price: 99200, date: '2026.03.22(일)', bgColor: '#b8860b' },
];

export interface BarDatum {
  date: string;
  price: number;
  highlighted?: boolean;
}

export const priceChartData: Record<string, { minPrice: number; bars: BarDatum[] }> = {
  daegu: {
    minPrice: 142500,
    bars: [
      { date: '3/24', price: 165000 },
      { date: '3/25', price: 158000 },
      { date: '3/26', price: 172000 },
      { date: '3/27', price: 149000 },
      { date: '3/28', price: 185000 },
      { date: '3/29', price: 162000 },
      { date: '3/30', price: 155000 },
      { date: '3/31', price: 178000 },
      { date: '4/1',  price: 190000 },
      { date: '4/2',  price: 168000 },
      { date: '4/3',  price: 145000 },
      { date: '4/4',  price: 152000 },
      { date: '4/5',  price: 142500, highlighted: true },
      { date: '4/6',  price: 175000 },
      { date: '4/7',  price: 183000 },
      { date: '4/8',  price: 160000 },
      { date: '4/9',  price: 155000 },
      { date: '4/10', price: 170000 },
    ],
  },
  natrang: {
    minPrice: 96400,
    bars: [
      { date: '3/24', price: 115000 },
      { date: '3/25', price: 108000 },
      { date: '3/26', price: 125000 },
      { date: '3/27', price: 99000 },
      { date: '3/28', price: 132000 },
      { date: '3/29', price: 112000 },
      { date: '3/30', price: 105000 },
      { date: '3/31', price: 128000 },
      { date: '4/1',  price: 140000 },
      { date: '4/2',  price: 118000 },
      { date: '4/3',  price: 96400, highlighted: true },
      { date: '4/4',  price: 102000 },
      { date: '4/5',  price: 109000 },
      { date: '4/6',  price: 125000 },
      { date: '4/7',  price: 133000 },
      { date: '4/8',  price: 110000 },
      { date: '4/9',  price: 105000 },
      { date: '4/10', price: 120000 },
    ],
  },
  phuquoc: {
    minPrice: 111400,
    bars: [
      { date: '3/24', price: 130000 },
      { date: '3/25', price: 122000 },
      { date: '3/26', price: 138000 },
      { date: '3/27', price: 115000 },
      { date: '3/28', price: 145000 },
      { date: '3/29', price: 128000 },
      { date: '3/30', price: 111400, highlighted: true },
      { date: '3/31', price: 135000 },
      { date: '4/1',  price: 152000 },
      { date: '4/2',  price: 132000 },
      { date: '4/3',  price: 118000 },
      { date: '4/4',  price: 125000 },
      { date: '4/5',  price: 140000 },
      { date: '4/6',  price: 136000 },
      { date: '4/7',  price: 148000 },
      { date: '4/8',  price: 125000 },
      { date: '4/9',  price: 118000 },
      { date: '4/10', price: 130000 },
    ],
  },
  kagoshima: {
    minPrice: 128000,
    bars: [
      { date: '3/24', price: 148000 },
      { date: '3/25', price: 138000 },
      { date: '3/26', price: 155000 },
      { date: '3/27', price: 128000, highlighted: true },
      { date: '3/28', price: 162000 },
      { date: '3/29', price: 145000 },
      { date: '3/30', price: 135000 },
      { date: '3/31', price: 152000 },
      { date: '4/1',  price: 168000 },
      { date: '4/2',  price: 148000 },
      { date: '4/3',  price: 132000 },
      { date: '4/4',  price: 140000 },
      { date: '4/5',  price: 155000 },
      { date: '4/6',  price: 150000 },
      { date: '4/7',  price: 162000 },
      { date: '4/8',  price: 142000 },
      { date: '4/9',  price: 135000 },
      { date: '4/10', price: 148000 },
    ],
  },
  tokushima: {
    minPrice: 135000,
    bars: [
      { date: '3/24', price: 155000 },
      { date: '3/25', price: 145000 },
      { date: '3/26', price: 162000 },
      { date: '3/27', price: 138000 },
      { date: '3/28', price: 170000 },
      { date: '3/29', price: 152000 },
      { date: '3/30', price: 142000 },
      { date: '3/31', price: 160000 },
      { date: '4/1',  price: 175000 },
      { date: '4/2',  price: 155000 },
      { date: '4/3',  price: 135000, highlighted: true },
      { date: '4/4',  price: 145000 },
      { date: '4/5',  price: 160000 },
      { date: '4/6',  price: 157000 },
      { date: '4/7',  price: 168000 },
      { date: '4/8',  price: 150000 },
      { date: '4/9',  price: 142000 },
      { date: '4/10', price: 155000 },
    ],
  },
};

export interface Notice {
  id: string;
  title: string;
  date: string;
}

export const notices: Notice[] = [
  { id: '1', title: '인천국제공항 수속 카운터 이전 안내 (26년 1월 22일 부)', date: '2026-01-15' },
  { id: '2', title: '이스타항공 홈페이지 작업 공지', date: '2026-01-13' },
  { id: '3', title: '유실물 취득 제기 등록 안내 (2026년 1월 19일 부)', date: '2026-01-13' },
  { id: '4', title: '국내선 유류할증료 (2026년 2월)', date: '2026-01-09' },
];

export interface FaqItem {
  id: string;
  label: string;
}

export const faqItems: FaqItem[] = [
  { id: '1', label: '수하물 한인' },
  { id: '2', label: '기내수하물 무게' },
  { id: '3', label: '온라인체크인 방법' },
  { id: '4', label: '탑승확인서' },
  { id: '5', label: '지연/결항 확인서' },
  { id: '6', label: '영수증(세금계산서) 확인' },
  { id: '7', label: '최대 비즈니스 7가지 팁' },
];

export interface FooterColumn {
  title: string;
  links: string[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: '이스타항공',
    links: ['스타소개', '뉴스룸', '투자정보', '인재채용', '광고 및 제휴', '이스타항공 플레이스타 작업 공지'],
  },
  {
    title: '운항 정보',
    links: ['노선 안내', '스케줄 조회', '운항 노선'],
  },
  {
    title: '항공권 예매',
    links: ['항공권예매', '재기기정보', '자기 탑승권'],
  },
  {
    title: '서비스 안내',
    links: ['좌석 선택', '수하물 안내', '체크인 서비스', '기내 서비스', '비행기 서비스', '입국심사 서비스', '실제 항공편 서비스', '도심지 서비스'],
  },
];
