import React, { useState } from 'react';

const imgLogoEastarjet = "https://www.figma.com/api/mcp/asset/3884c8cc-fda0-4df2-9972-58c7eec5a349";
const imgLogoEastarjetGrey = "https://www.figma.com/api/mcp/asset/8b73cf9b-c631-405e-a3aa-178f4742c665";

/* ══════════════════════════════════════════════════════════
   i18n
   ══════════════════════════════════════════════════════════ */
type Lang = 'ko' | 'en' | 'ru' | 'zh';

interface NoticeSection { title: string; items: React.ReactNode[] }

interface T {
  bookingDate: string; bookingNo: string;
  itinerarySection: string; fareSection: string;
  departure: string; arrival: string; terminal: string;
  airTransport: string; airFareItem: string; discount: string;
  fuelSurcharge: string; airportFee: string;
  ancillaryService: string; outbound: string; inbound: string;
  subtotal: string;
  adult: string; child: string; infant: string;
  preSeat: string; prepaidBaggage: string; travelInsurance: string;
  extraBaggage: string; inFlightMeal: string; petService: string; ancillaryBundle: string;
  paymentSection: string; airFarePayment: string; taxFees: string;
  total: string; paymentMethodSection: string;
  methodLabel: string; cardLabel: string;
  approvalLabel: string; dateLabel: string; amountLabel: string;
  noticesSection: string; noticeSections: NoticeSection[];
  ancillaryPayment: string;
  cities: Record<string, string>;
  fareTypeSpecial: string;
  fareTypeRegular: string;
  baggageBase: string;
  baggageNotIncluded: string;
  scheduleNote: string;
  flightLabel: string;
  docTitle: string;
  confirmed: string;
  baggageBtn: string; homepageBtn: string;
}

const translations: Record<Lang, T> = {
  ko: {
    bookingDate: '예매날짜', bookingNo: '예약번호',
    itinerarySection: '여정정보', fareSection: '운임정보',
    departure: 'DEPARTURE', arrival: 'ARRIVAL', terminal: 'Terminal',
    airTransport: '항공 운송료', airFareItem: '항공 운임', discount: '할인 내역',
    fuelSurcharge: '유류할증료', airportFee: '공항시설이용료',
    ancillaryService: '부가 서비스', outbound: '가는편', inbound: '오는편',
    subtotal: '합계',
    adult: '성인', child: '소아', infant: '유아',
    preSeat: '사전좌석', prepaidBaggage: '사전구매 위탁수하물', travelInsurance: '여행자 보험',
    extraBaggage: '위탁수화물 추가 제공', inFlightMeal: '기내식', petService: '반려동물 동반 서비스', ancillaryBundle: '부가서비스 세트',
    paymentSection: '결제정보', airFarePayment: '항공운임', taxFees: '세금 및 수수료',
    total: 'Total', paymentMethodSection: '결제 수단',
    methodLabel: '결제수단', cardLabel: '신용카드',
    approvalLabel: '승인번호', dateLabel: '결제일', amountLabel: '금액',
    noticesSection: '안내사항',
    noticeSections: [
      { title: '항공권 계약 조건', items: [
        '이스타항공 국제 여객 운송 약관이 적용되며, 국제 여객 운송 약관은 이스타항공 홈페이지를 통해 확인하실 수 있습니다.',
        '타인에게 양도할 수 없으며, 여권 상의 성명과 예매확인서 상의 이름이 반드시 일치해야 합니다.',
        <>기내 휴대수하물 허용량은 10kg이며, 자세한 사항은 홈페이지 서비스 안내 &gt; 공항서비스 &gt; 수하물 서비스에서 확인하실 수 있습니다. <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">수하물 규정 상세 보기</span></>,
        '폭발물, 압축가스, 인화성 물질(고체 또는 액체), 부식성 물질, 자극성 물질, 자기성 물질, 방사성 물질, 기타 항공기 및 인체 또는 타 재산에 위험을 초래할 수 있는 물질 등은 수하물로 운송할 수 없습니다.',
        '파손되기 쉬운 물품, 부패나 변질 우려가 있는 물품, 화폐, 보석류 기타 귀중품 및 전자제품(노트북 등)은 수하물로 위탁이 불가하오니 직접 휴대하시기 바랍니다. 책임 제한을 포함한 수하물 관련 사항은 당사 여객 운송 약관을 참고하여 주시기 바랍니다.',
      ]},
      { title: '탑승 수속 규정', items: [
        '탑승 수속 마감 시간은 출발 1시간 전에 마감되오니 출발 2시간 전까지(인천공항은 3시간 전) 공항에 도착해 주시기 바랍니다.',
        '이스타항공은 도착지의 비자 또는 여행 정보에 대해 책임이 없으므로, 여행지 국가 입국에 필요한 출입국 규정을 사전에 확인해 주시기 바랍니다.',
        '필요한 여행 서류가 구비되지 않는 경우 탑승 수속이 불가할 수 있으며 이에 따르는 모든 손해 및 비용은 당사에서 부담하지 않음을 안내드립니다.',
      ]},
      { title: '항공권 변경 및 취소 안내', items: [
        '항공권에 대한 규정은 구매처에 따라 상이할 수 있습니다.',
        '공항 지점 또는 예약센터에서 변경/취소 시 편도 5,000원의 서비스 수수료가 추가로 부과됩니다.',
        '여정 변경/취소 시 사전 좌석, 기내식, 사전 구매 위탁수하물도 함께 취소되며, 해당 부가서비스 환불 규정에 따릅니다.',
        '좌석을 점유하지 않는 유아는 변경/취소 수수료가 부과되지 않습니다.',
        '구매 후 24시간 이내 변경/취소 시 수수료가 면제됩니다. (단, 국제선 출발 1시간 이내는 수수료 부과)',
        '지불 운임보다 수수료가 더 큰 경우에는 지불한 운임만 수수료로 적용되며, 공항시설이용료 및 유류할증료는 전액 환불됩니다.',
        '국제선의 경우 출발편 취소(미탑승) 시 돌아오는 편은 자동 취소되며, 구간별 취소 수수료가 부과됩니다.',
        '환불은 결제한 수단으로만 진행되며, 결제 수단이 여러 개인 경우에는 수단 중 하나로 임의 처리될 수 있습니다.',
      ]},
      { title: '문의 안내', items: [
        '예약센터 번호: 1544-0080',
        '상담 시간: 09:00 ~ 18:00 (한국 지역)',
      ]},
    ],
    ancillaryPayment: '부가 서비스',
    flightLabel: '편명',
    docTitle: '예매내역서 - 이스타항공',
    confirmed: '확약',
    baggageBtn: '수하물 규정 상세보기', homepageBtn: '홈페이지 바로가기',
    cities: { ICN: '서울/인천', NRT: '도쿄/나리타' },
    fareTypeSpecial: '특가 운임',
    fareTypeRegular: '일반 운임',
    baggageBase: '기본 위탁수하물',
    baggageNotIncluded: '불포함',
    scheduleNote: '해당 항공 스케줄은 정부인가 조건에 따라 예고없이 변경될 수 있습니다.',
  },

  en: {
    bookingDate: 'Booking Date', bookingNo: 'Booking No.',
    itinerarySection: 'Itinerary', fareSection: 'Fare Details',
    departure: 'DEPARTURE', arrival: 'ARRIVAL', terminal: 'Terminal',
    airTransport: 'Air Transport', airFareItem: 'Base Fare', discount: 'Discount',
    fuelSurcharge: 'Fuel Surcharge', airportFee: 'Airport Fee',
    ancillaryService: 'Ancillary', outbound: 'Outbound', inbound: 'Inbound',
    subtotal: 'Subtotal',
    adult: 'Adult', child: 'Child', infant: 'Infant',
    preSeat: 'Pre-seat', prepaidBaggage: 'Prepaid Baggage', travelInsurance: 'Travel Insurance',
    extraBaggage: 'Extra Baggage', inFlightMeal: 'In-flight Meal', petService: 'Pet Service', ancillaryBundle: 'Ancillary Bundle',
    paymentSection: 'Payment', airFarePayment: 'Air Fare', taxFees: 'Taxes & Fees',
    total: 'Total', paymentMethodSection: 'Payment Method',
    methodLabel: 'Payment Method', cardLabel: 'Card',
    approvalLabel: 'Approval No.', dateLabel: 'Payment Date', amountLabel: 'Amount',
    noticesSection: 'Notices',
    noticeSections: [
      { title: 'Ticket Terms & Conditions', items: [
        "Eastar Jet's domestic passenger transport terms apply; these can be found on the Eastar Jet website.",
        'Tickets are non-transferable. The name on your ID must exactly match the name on your booking confirmation.',
        'Dangerous goods — including explosives, compressed gases, flammable substances, corrosive materials, irritants, magnetic/radioactive materials, and other hazardous substances — may not be transported as baggage.',
        'Fragile items, perishables, currency, jewelry, valuables, and electronic devices (laptops, etc.) may not be checked as baggage; please carry them with you. For liability limitations, refer to our passenger transport terms.',
      ]},
      { title: 'Check-in Procedures', items: [
        <>Check-in closes <span className="text-[#D6001C]">30 minutes</span> before departure. Please arrive at the airport at least <span className="text-[#D6001C]">1 hour</span> before your flight.</>,
        'If an identity-based discount has been applied, you must bring supporting documents.',
      ]},
      { title: 'Change & Cancellation Policy', items: [
        'Ticket regulations may vary depending on where the ticket was purchased.',
        'A service fee of KRW 5,000 per one-way journey will be charged for changes or cancellations made at the airport counter or reservation center.',
        <>Pre-selected seats, in-flight meals, and pre-purchased baggage will also be cancelled when an itinerary is changed/cancelled, subject to their respective refund policies. <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">Baggage Policy Details</span></>,
        'Infants not occupying a seat are exempt from change/cancellation fees.',
        'Changes or cancellations within 24 hours of purchase are fee-exempt. (Except for domestic flights after departure.)',
        'If the applicable fee exceeds the fare paid, only the fare paid will be charged; airport facility charges and fuel surcharges will be fully refunded.',
        'Refunds are processed to the original payment method only. If multiple methods were used, the refund may be applied to one of them at our discretion.',
      ]},
      { title: 'Contact', items: [
        'Reservation Center: 1544-0080',
        <>Hours: <span className="font-bold">09:00 – 18:00 (Korea Standard Time)</span></>,
        'This email is for outgoing messages only; replies will not be received.',
        <>For inquiries, please use Customer Center &gt; <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">Customer Feedback</span> on our website.</>,
      ]},
    ],
    ancillaryPayment: 'Ancillary',
    flightLabel: 'Flight',
    docTitle: 'Booking Confirmation - Eastar Jet',
    confirmed: 'Confirmed',
    baggageBtn: 'Baggage Policy', homepageBtn: 'Visit Homepage',
    cities: { ICN: 'Seoul/Incheon', NRT: 'Tokyo/Narita' },
    fareTypeSpecial: 'Special Fare',
    fareTypeRegular: 'Standard Fare',
    baggageBase: 'Checked baggage',
    baggageNotIncluded: 'not included',
    scheduleNote: 'Flight schedules are subject to change without notice based on government approval conditions.',
  },

  ru: {
    bookingDate: 'Дата бронир.', bookingNo: 'Номер бронир.',
    itinerarySection: 'Маршрут', fareSection: 'Тариф',
    departure: 'ВЫЛЕТ', arrival: 'ПРИЛЁТ', terminal: 'Терм.',
    airTransport: 'Авиатариф', airFareItem: 'Базовый тариф', discount: 'Скидка',
    fuelSurcharge: 'Топл. сбор', airportFee: 'Аэроп. сбор',
    ancillaryService: 'Доп. услуги', outbound: 'Туда', inbound: 'Обратно',
    subtotal: 'Итого',
    adult: 'Взрослый', child: 'Ребёнок', infant: 'Младенец',
    preSeat: 'Выбор места', prepaidBaggage: 'Платный багаж', travelInsurance: 'Страховка',
    extraBaggage: 'Доп. багаж', inFlightMeal: 'Питание', petService: 'Перевозка питомца', ancillaryBundle: 'Комплект услуг',
    paymentSection: 'Оплата', airFarePayment: 'Авиатариф', taxFees: 'Налоги и сборы',
    total: 'Итого', paymentMethodSection: 'Способ оплаты',
    methodLabel: 'Способ оплаты', cardLabel: 'Карта',
    approvalLabel: '№ одобрения', dateLabel: 'Дата оплаты', amountLabel: 'Сумма',
    noticesSection: 'Важная информация',
    noticeSections: [
      { title: 'Условия договора', items: [
        'Применяются условия внутренних пассажирских перевозок Eastar Jet; ознакомиться с ними можно на сайте авиакомпании.',
        'Авиабилет не подлежит передаче третьим лицам; имя в удостоверяющем личность документе должно точно совпадать с именем в подтверждении бронирования.',
        'Запрещено перевозить в качестве багажа: взрывчатые вещества, сжатые газы, легковоспламеняющиеся материалы, едкие, радиоактивные вещества и другие предметы, представляющие опасность для воздушного судна, людей или имущества.',
        'Хрупкие предметы, скоропортящиеся товары, валюта, ювелирные украшения, ценности и электроника (ноутбуки и др.) не принимаются к перевозке в зарегистрированном багаже — просим взять их с собой.',
      ]},
      { title: 'Правила регистрации', items: [
        <>Регистрация заканчивается за <span className="text-[#D6001C]">30 минут до вылета</span>. Просим прибыть в аэропорт не позднее чем за <span className="text-[#D6001C]">1 час до вылета</span>.</>,
        'При применении льготной скидки необходимо предъявить подтверждающие документы.',
      ]},
      { title: 'Изменение и отмена', items: [
        'Условия могут отличаться в зависимости от места покупки билета.',
        'При изменении/отмене в аэропорту или центре бронирования взимается сбор 5 000 вон за каждое направление.',
        <>При изменении/отмене маршрута также отменяются предварительно выбранные места, питание и предоплаченный багаж согласно политике возврата. <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">Подробнее о правилах багажа</span></>,
        'Младенцы, не занимающие отдельное место, освобождаются от сборов за изменение/отмену.',
        'Изменения/отмены в течение 24 часов после покупки не облагаются сборами. (Кроме внутренних рейсов после вылета.)',
        'Если сбор превышает оплаченный тариф, взимается только оплаченный тариф; аэропортовые сборы и топливные надбавки возвращаются полностью.',
        'Возврат производится только на исходное средство оплаты; при нескольких — на одно из них по усмотрению компании.',
      ]},
      { title: 'Контакты', items: [
        'Центр бронирования: 1544-0080',
        'Часы работы: 09:00 – 18:00 (по корейскому времени)',
        'Данное письмо является исходящим; ответы на него не принимаются.',
        <>По вопросам обращайтесь в раздел <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">«Отзывы клиентов»</span> на сайте.</>,
      ]},
    ],
    ancillaryPayment: 'Доп. услуги',
    flightLabel: 'Рейс',
    docTitle: 'Подтверждение бронирования - Eastar Jet',
    confirmed: 'Подтверждено',
    baggageBtn: 'Правила багажа', homepageBtn: 'На сайт',
    cities: { ICN: 'Сеул/Инчхон', NRT: 'Токио/Нарита' },
    fareTypeSpecial: 'Спец. тариф',
    fareTypeRegular: 'Стандартный тариф',
    baggageBase: 'Багаж',
    baggageNotIncluded: 'не включён',
    scheduleNote: 'Расписание рейсов может быть изменено без предупреждения в соответствии с условиями государственного разрешения.',
  },

  zh: {
    bookingDate: '预订日期', bookingNo: '预订编号',
    itinerarySection: '行程信息', fareSection: '票价信息',
    departure: '出发', arrival: '到达', terminal: '航站楼',
    airTransport: '航空运费', airFareItem: '基本票价', discount: '折扣',
    fuelSurcharge: '燃油附加费', airportFee: '机场设施费',
    ancillaryService: '附加服务', outbound: '去程', inbound: '返程',
    subtotal: '合计',
    adult: '成人', child: '儿童', infant: '婴儿',
    preSeat: '预选座位', prepaidBaggage: '预付托运行李', travelInsurance: '旅行保险',
    extraBaggage: '额外行李', inFlightMeal: '机上餐食', petService: '宠物服务', ancillaryBundle: '附加服务套餐',
    paymentSection: '付款信息', airFarePayment: '机票价格', taxFees: '税费',
    total: '合计', paymentMethodSection: '支付方式',
    methodLabel: '支付方式', cardLabel: '信用卡',
    approvalLabel: '批准号', dateLabel: '付款日期', amountLabel: '金额',
    noticesSection: '重要须知',
    noticeSections: [
      { title: '机票合同条款', items: [
        '适用易斯达航空国内旅客运输条款，相关条款可在易斯达航空官网查询。',
        '机票不可转让他人，身份证件上的姓名必须与预订确认书上的姓名完全一致。',
        '以下物品不得作为行李托运：爆炸物、压缩气体、易燃物质（固体或液体）、腐蚀性物质、刺激性物质、磁性物质、放射性物质及其他可能对航空器、人员或财产造成危险的物质。',
        '易碎物品、易腐物品、货币、珠宝首饰及其他贵重物品、电子设备（笔记本电脑等）不得托运，请随身携带。有关行李责任限制，请参阅本公司旅客运输条款。',
      ]},
      { title: '值机规定', items: [
        <>值机截止时间为起飞前<span className="text-[#D6001C]">30分钟</span>，请在起飞前至少<span className="text-[#D6001C]">1小时</span>抵达机场。</>,
        '如享有身份折扣，请务必携带相关证明文件。',
      ]},
      { title: '机票变更及取消', items: [
        '机票规定可能因购买渠道不同而有所差异。',
        '在机场柜台或预订中心办理变更/取消时，每单程将额外收取5,000韩元服务费。',
        <>变更/取消行程时，预选座位、机上餐食及预付托运行李将一并取消，并依相应附加服务退款规定处理。 <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">行李规定详情</span></>,
        '不占座位的婴儿免收变更/取消费用。',
        '购票后24小时内变更/取消免收手续费。（国内航班起飞后除外）',
        '若手续费高于已支付票价，则以已支付票价为上限；机场设施使用费及燃油附加费将全额退还。',
        '退款仅退至原支付方式；如使用多种支付方式，可能退至其中一种。',
      ]},
      { title: '联系方式', items: [
        '预订中心电话：1544-0080',
        '服务时间：09:00 – 18:00（韩国时间）',
        '本邮件为发送专用，不接受回复。',
        <>如有疑问，请通过客服中心 &gt; <span className="font-extrabold text-[#D6001C] underline underline-offset-2 decoration-[#D6001C]">客户留言板</span>与我们联系。</>,
      ]},
    ],
    ancillaryPayment: '附加服务',
    flightLabel: '航班',
    docTitle: '预订确认书 - 易斯达航空',
    confirmed: '已确认',
    baggageBtn: '行李规定详情', homepageBtn: '前往官网',
    cities: { ICN: '首尔/仁川', NRT: '东京/成田' },
    fareTypeSpecial: '特价票',
    fareTypeRegular: '普通运价',
    baggageBase: '托运行李',
    baggageNotIncluded: '不含',
    scheduleNote: '航班时刻表可能根据政府批准条件随时变更，恕不另行通知。',
  },
};

/* ══════════════════════════════════════════════════════════
   Data types
   ══════════════════════════════════════════════════════════ */
interface FareItem { label: string; detail?: string; amount: number | null; isDiscount?: boolean }
interface FareLeg  { direction: '가는편' | '오는편'; total: number; items: FareItem[] }
interface PassengerFare {
  airTransport: { total: number; items: FareItem[] };
  ancillary: { total: number; legs: FareLeg[] };
  total: number;
}
interface Passenger { name: string; seat: string; type: string; ticketNo: string; fare?: PassengerFare }
interface Location  { city: string; code: string; date: string; time: string; terminal: string }
interface Itinerary { id: number; type: string; flightNo: string; airline: string; departure: Location; arrival: Location; duration: string; fareType?: 'special' | 'regular'; baggageKg?: number | null }
interface PaymentRow { date: string; method: string; amount: number }
interface Payment   { fare: number; tax: number; ancillary?: number; total: number; currency: string; rows: PaymentRow[] }
interface Reservation { pnr: string; bookingDate: string; bookingNo: string; status: string; passengers: Passenger[]; itineraries: Itinerary[]; payment: Payment }

/* ══════════════════════════════════════════════════════════
   날짜 문자열의 요일 부분을 언어에 맞게 변환
   예) '2026.03.30(Mon)' + ko → '2026.03.30(월)'
                             + en/ru/zh → '2026.03.30(MON)'
   ══════════════════════════════════════════════════════════ */
const DAY_KO: Record<string, string> = {
  Mon: '월', Tue: '화', Wed: '수', Thu: '목', Fri: '금', Sat: '토', Sun: '일',
};
const formatDate = (dateStr: string, lang: Lang): string =>
  dateStr.replace(/\(([A-Za-z]+)\)/, (_, day) =>
    lang === 'ko' ? `(${DAY_KO[day] ?? day})` : `(${day.toUpperCase()})`
  );

/* ══════════════════════════════════════════════════════════
   FareRow — layout-safe (no truncate, break-words)
   ══════════════════════════════════════════════════════════ */
const FareRow = ({
  label, detail, amount, isDiscount = false, bold = false, indent = 0, t,
}: {
  label: string; detail?: string; amount: number | null;
  isDiscount?: boolean; bold?: boolean; indent?: number; t: T;
}) => {
  // Map Korean internal key → translated label
  const labelMap: Record<string, string> = {
    '항공 운송료': t.airTransport,
    '항공 운임': t.airFareItem,
    '할인 내역': t.discount,
    '유류할증료': t.fuelSurcharge,
    '공항시설이용료': t.airportFee,
    '부가 서비스': t.ancillaryService,
    '사전좌석': t.preSeat,
    '사전구매 위탁수하물': t.prepaidBaggage,
    '여행자 보험': t.travelInsurance,
    '위탁수화물 추가 제공': t.extraBaggage,
    '기내식': t.inFlightMeal,
    '반려동물 동반 서비스': t.petService,
    '부가서비스 세트': t.ancillaryBundle,
  };
  const displayLabel = labelMap[label] ?? label;
  const amountText   = amount === null ? '-' : amount.toLocaleString();
  // Figma spacing: section header pt-[16px] pb-[8px], sub-item py-[8px] pl-[8px], deep-item py-[4px] pl-[16px]
  const rowClass = bold
    ? 'pt-4 pb-2'
    : indent === 1
      ? 'py-2 pl-2'
      : indent === 2
        ? 'py-1 pl-4'
        : 'py-2';

  return (
    <div className={`flex justify-between items-baseline gap-2 ${rowClass}`}>
      {/* label + detail — allow wrapping, no truncate */}
      <div className="flex items-baseline gap-1 min-w-0 flex-1 flex-wrap">
        {isDiscount && <span className="text-[#6B7280] text-xs flex-shrink-0">•</span>}
        <span className={`leading-[1.3] break-words ${bold ? 'text-[16px] font-bold text-[#374151] tracking-[0.16px]' : 'text-[14px] text-[#6B7280]'}`}>
          {displayLabel}
        </span>
        {detail && (
          <span className="text-[14px] text-[#6B7280] flex-shrink-0 whitespace-nowrap">• {detail}</span>
        )}
      </div>
      {/* amount — never wraps */}
      <span className={`flex-shrink-0 tabular-nums ${bold ? 'text-[14px] font-extrabold text-[#374151] leading-none' : 'text-[14px] text-[#374151]'} ${amount !== null && amount < 0 ? 'text-[#D6001C]' : ''}`}>
        {amountText}
      </span>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════
   Version data
   ══════════════════════════════════════════════════════════ */
type Ver = 'v1' | 'v2' | 'v3';

const ITINERARIES: Itinerary[] = [
  {
    id: 1, type: '가는 편', flightNo: 'ZE260', airline: '이스타항공',
    departure: { city: '서울/인천', code: 'ICN', date: '2026.03.30(Mon)', time: '09:30', terminal: '' },
    arrival:   { city: '도쿄/나리타', code: 'NRT', date: '2026.03.30(Mon)', time: '12:10', terminal: '' },
    duration: '2H 40M', fareType: 'special', baggageKg: null,
  },
  {
    id: 2, type: '오는 편', flightNo: 'ZE261', airline: '이스타항공',
    departure: { city: '도쿄/나리타', code: 'NRT', date: '2026.04.04(Sat)', time: '09:30', terminal: '' },
    arrival:   { city: '서울/인천', code: 'ICN', date: '2026.04.04(Sat)', time: '12:10', terminal: 'T1' },
    duration: '2H 40M', fareType: 'regular', baggageKg: 15,
  },
];

const PAYMENT_ROWS_V1: PaymentRow[] = [
  { date: '2026-03-23 11:26:45 (GMT+9)', method: '신용카드', amount: 353500 },
  { date: '2026-03-23 12:26:45 (GMT+9)', method: '신용카드', amount: 429800 },
];
const PAYMENT_ROWS_V2: PaymentRow[] = [
  { date: '2026-03-23 11:26:45 (GMT+9)', method: '신용카드', amount: 353500 },
];
const PAYMENT_ROWS_V3: PaymentRow[] = [
  { date: '2026-03-23 11:26:45 (GMT+9)', method: '신용카드', amount: 118000 },
];

const RESERVATIONS: Record<Ver, Reservation> = {
  /* ── Ver1: 성인+소아+유아 3명, 현재 전체 화면 ── */
  v1: {
    pnr: 'ABC123D', bookingDate: '2026-03-23', bookingNo: 'WD9TQX', status: '확약',
    itineraries: ITINERARIES,
    passengers: [
      {
        name: 'HONG / GILDONG', seat: '12A', type: '성인', ticketNo: '180-1234567890',
        fare: {
          airTransport: { total: 118000, items: [
            { label: '항공 운임', amount: 78000 },
            { label: '할인 내역', amount: -20000, isDiscount: true },
            { label: '유류할증료', amount: 32000 },
            { label: '공항시설이용료', amount: 32000 },
          ]},
          ancillary: { total: 381500, legs: [
            { direction: '가는편', total: 306500, items: [
              { label: '사전좌석', detail: '6B', amount: 15000 },
              { label: '사전구매 위탁수하물', detail: '15kg', amount: 45000 },
              { label: '위탁수화물 추가 제공', detail: '5kg', amount: null },
              { label: '기내식', detail: '함박스테이크와 볶음밥', amount: 15000 },
              { label: '반려동물 동반 서비스', detail: '', amount: 11500 },
              { label: '여행자 보험', detail: '기본형', amount: 11500 },
            ]},
            { direction: '오는편', total: 41500, items: [
              { label: '부가서비스 세트', detail: '풀세트', amount: 55000 },
              { label: '사전좌석', detail: '6B', amount: null },
              { label: '사전구매 위탁수하물', detail: '15kg', amount: null },
              { label: '위탁수화물 추가 제공', detail: '5kg', amount: null },
              { label: '기내식', detail: '함박스테이크와 볶음밥', amount: null },
              { label: '반려동물 동반 서비스', detail: '', amount: 120000 },
            ]},
          ]},
          total: 499500,
        },
      },
      {
        name: 'HONG / GILAH', seat: '6A', type: '소아', ticketNo: '180-1234567891',
        fare: {
          airTransport: { total: 146000, items: [
            { label: '항공 운임', amount: 78000 },
            { label: '할인 내역', amount: -20000, isDiscount: true },
            { label: '유류할증료', amount: 32000 },
            { label: '공항시설이용료', amount: 28000 },
          ]},
          ancillary: { total: 41500, legs: [
            { direction: '가는편', total: 26500, items: [
              { label: '사전좌석', detail: '6A', amount: 15000 },
              { label: '사전구매 위탁수하물', detail: '15kg', amount: 45000 },
              { label: '위탁수화물 추가 제공', detail: '5kg', amount: null },
              { label: '기내식', detail: '함박스테이크와 볶음밥', amount: 11500 },
              { label: '여행자 보험', detail: '기본형', amount: 11500 },
            ]},
            { direction: '오는편', total: 15000, items: [
              { label: '부가서비스 세트', detail: '풀세트', amount: 15000 },
              { label: '사전좌석', detail: '6B', amount: 15000 },
              { label: '사전구매 위탁수하물', detail: '5kg', amount: null },
              { label: '위탁수화물 추가 제공', detail: '5kg', amount: null },
              { label: '기내식', detail: '함박스테이크와 볶음밥', amount: null },
            ]},
          ]},
          total: 244500,
        },
      },
      {
        name: 'HONG / GILAHH', seat: '-', type: '유아', ticketNo: '180-1234567892',
        fare: {
          airTransport: { total: 89500, items: [
            { label: '항공 운임', amount: 60000 },
            { label: '유류할증료', amount: null },
            { label: '공항시설이용료', amount: 29500 },
          ]},
          ancillary: { total: 6800, legs: [
            { direction: '가는편', total: 6800, items: [
              { label: '여행자 보험', detail: '기본형', amount: 6800 },
            ]},
          ]},
          total: 36800,
        },
      },
    ],
    payment: { fare: 127000, tax: 64000, total: 783300, currency: 'KRW', rows: PAYMENT_ROWS_V1 },
  },

  /* ── Ver2: 성인+소아+유아 3명, 부가서비스 미포함 ── */
  v2: {
    pnr: 'ABC123D', bookingDate: '2026-03-23', bookingNo: 'WD9TQX', status: '확약',
    itineraries: ITINERARIES,
    passengers: [
      {
        name: 'HONG / GILDONG', seat: '12A', type: '성인', ticketNo: '180-1234567890',
        fare: {
          airTransport: { total: 118000, items: [
            { label: '항공 운임', amount: 78000 },
            { label: '할인 내역', amount: -20000, isDiscount: true },
            { label: '유류할증료', amount: 32000 },
            { label: '공항시설이용료', amount: 28000 },
          ]},
          ancillary: { total: 0, legs: [] },
          total: 118000,
        },
      },
      {
        name: 'HONG / GILAH', seat: '6A', type: '소아', ticketNo: '180-1234567891',
        fare: {
          airTransport: { total: 146000, items: [
            { label: '항공 운임', amount: 78000 },
            { label: '할인 내역', amount: -20000, isDiscount: true },
            { label: '유류할증료', amount: 32000 },
            { label: '공항시설이용료', amount: 28000 },
          ]},
          ancillary: { total: 0, legs: [] },
          total: 146000,
        },
      },
      {
        name: 'HONG / GILAHH', seat: '-', type: '유아', ticketNo: '180-1234567892',
        fare: {
          airTransport: { total: 89500, items: [
            { label: '항공 운임', amount: 60000 },
            { label: '유류할증료', amount: null },
            { label: '공항시설이용료', amount: 29500 },
          ]},
          ancillary: { total: 0, legs: [] },
          total: 89500,
        },
      },
    ],
    payment: { fare: 78000, tax: 40000, total: 353500, currency: 'KRW', rows: PAYMENT_ROWS_V2 },
  },

  /* ── Ver3: 성인 1명 + 부가서비스 없음 (섹션 자동 제거 확인용) ── */
  v3: {
    pnr: 'ABC123D', bookingDate: '2026-03-23', bookingNo: 'WD9TQX', status: '확약',
    itineraries: ITINERARIES,
    passengers: [
      {
        name: 'HONG / GILDONG', seat: '12A', type: '성인', ticketNo: '180-1234567890',
        fare: {
          airTransport: { total: 118000, items: [
            { label: '항공 운임', amount: 78000 },
            { label: '할인 내역', amount: -20000, isDiscount: true },
            { label: '유류할증료', amount: 32000 },
            { label: '공항시설이용료', amount: 28000 },
          ]},
          ancillary: { total: 0, legs: [] },
          total: 118000,
        },
      },
    ],
    payment: { fare: 78000, tax: 40000, total: 118000, currency: 'KRW', rows: PAYMENT_ROWS_V3 },
  },
};

/* ══════════════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════════════ */
const EmailReceiptPage = () => {
  const [lang, setLang] = useState<Lang>('ko');
  const [ver, setVer]   = useState<Ver>('v1');
  const tr = translations[lang];

  const LANG_LABELS: Record<Lang, string> = { ko: '한국어', en: 'English', ru: 'Русский', zh: '中文' };
  const VER_LABELS: Record<Ver, string>   = { v1: '부가서비스 3인포함 Ver', v2: '부가서비스 미포함 Ver', v3: 'Default' };

  const itTypeMap: Record<string, string> = { '가는 편': tr.outbound, '오는 편': tr.inbound };
  const pasTypeMap: Record<string, string> = { '성인': tr.adult, '소아': tr.child, '유아': tr.infant };
  const dirMap: Record<string, string>    = { '가는편': tr.outbound, '오는편': tr.inbound };

  const reservation = RESERVATIONS[ver];

  return (
    <div className="min-h-screen bg-gray-100 md:py-10 md:px-4 font-sans text-slate-900 print:bg-white print:p-0">

      {/* 버전 + 언어 선택 바 */}
      <div className="mx-auto max-w-[800px] flex justify-between items-center pb-2 px-1 print:hidden">
        {/* 버전 선택 (좌) */}
        <div className="flex items-center gap-1">
          {(Object.keys(VER_LABELS) as Ver[]).map(v => (
            <button
              key={v}
              onClick={() => setVer(v)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                ver === v
                  ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {VER_LABELS[v]}
            </button>
          ))}
        </div>
        {/* 언어 선택 (우) */}
        <div className="flex items-center gap-1">
          {(Object.keys(LANG_LABELS) as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === l
                  ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      </div>

      <div
        className="mx-auto max-w-[800px] bg-white shadow-2xl overflow-hidden rounded-none md:rounded-3xl print:shadow-none print:rounded-none"
        style={{ fontFamily: "'Pretendard', 'Nanum Gothic', '나눔고딕', 'Noto Sans KR', 'Noto Sans CJK KR', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >

        {/* 헤더 — 흰 배경, 하단 보더 */}
        <header className="flex justify-between items-center px-8 py-8 bg-white border-b border-[#D8DAE0]">
          {/* 로고 + 서브타이틀 */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <div className="h-[34px] w-[158px]">
              <img src={imgLogoEastarjet} alt="Eastar Jet" className="h-full w-full object-contain object-left" />
            </div>
            <p className="text-[14px] text-[#6B7280] leading-none tracking-[-0.5px] whitespace-nowrap">{tr.docTitle}</p>
          </div>
          <button className="border border-[#374151] rounded-[5px] px-[10px] py-[10px] text-[14px] font-medium tracking-[-0.5px] text-[#001B2A] hover:bg-slate-50 whitespace-nowrap">
            {tr.homepageBtn}
          </button>
        </header>

        {/* 메인 콘텐츠 — 1열 */}
        <div className="px-6 py-8 flex flex-col gap-8">

          {/* 예약번호 + 예매날짜 행 */}
          <div className="flex justify-end items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px]">{tr.bookingNo}</span>
              <span className="text-[16px] font-bold text-[#D6001C] leading-[1.3] tracking-[0.16px]">{reservation.bookingNo}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px]">{tr.bookingDate}</span>
              <span className="text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px]">{reservation.bookingDate}</span>
            </div>
          </div>

          {/* 여정정보 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[18px] font-extrabold text-[#111827] leading-[1.3]">{tr.itinerarySection}</h2>
            <div className="space-y-4">
              {reservation.itineraries.map(it => {
                const depCity = tr.cities[it.departure.code] ?? it.departure.city;
                const arrCity = tr.cities[it.arrival.code] ?? it.arrival.city;
                return (
                  <div key={it.id} className="bg-[#F3F4F6] px-6 py-4 rounded-xl border border-[#D8DAE0] flex flex-col gap-3">
                    {/* 배지(좌) + 편명(우) */}
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-medium leading-none tracking-[-0.5px] px-2 py-1 rounded-full bg-[#FDF2F3] text-[#D6001C] border border-[#D6001C] whitespace-nowrap">
                        {itTypeMap[it.type] ?? it.type}
                      </span>
                      <span className="flex items-center gap-1 text-[16px] font-bold leading-[1.3] tracking-[0.16px] text-[#374151]">
                        <span>{tr.flightLabel}</span>
                        <span className="text-[#D6001C]">{it.flightNo}</span>
                      </span>
                    </div>
                    {/* 루트 + 날짜/시간 */}
                    <div className="flex flex-col gap-2">
                      <p className="text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px] break-words">
                        {depCity}({it.departure.code}) → {arrCity}({it.arrival.code})
                      </p>
                      <div className="flex items-center gap-1 text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px] flex-wrap">
                        <span>{formatDate(it.departure.date, lang)}</span>
                        <span className="tabular-nums">{it.departure.time} - {it.arrival.time}</span>
                      </div>
                    </div>
                    {/* 운임 / 수하물 정보 */}
                    {it.fareType && (
                      <div className="flex items-center gap-1 text-[14px] text-[#6B7280] leading-[1.3] flex-wrap">
                        <span>{it.fareType === 'special' ? tr.fareTypeSpecial : tr.fareTypeRegular}</span>
                        <span>/</span>
                        <span>{tr.baggageBase}: {it.baggageKg === null ? tr.baggageNotIncluded : `${it.baggageKg}kg`}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* 스케줄 안내 */}
            <div className="flex items-start gap-2">
              <span className="w-[3px] h-[3px] rounded-full bg-[#374151] flex-shrink-0 mt-[7px]" />
              <p className="text-[14px] text-[#374151] leading-[1.3] break-words">{tr.scheduleNote}</p>
            </div>
          </section>

          {/* 운임정보 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-[18px] font-extrabold text-[#111827] leading-[1.3]">{tr.fareSection}</h2>
            <div className="space-y-4">
              {reservation.passengers.map((p, i) => (
                <div key={i} className="rounded-xl border border-[#D8DAE0] bg-white overflow-hidden">
                  {/* 승객 헤더 */}
                  <div className="flex justify-between items-center px-4 py-3 bg-[#F3F4F6] border-b border-[#D8DAE0] gap-3">
                    <div className="min-w-0 flex flex-col gap-2 flex-1 pr-2">
                      <span className="text-[12px] font-bold leading-[1.5] px-2 py-0.5 rounded bg-[#D1D5DB] text-[#374151] self-start">
                        {pasTypeMap[p.type] ?? p.type}
                      </span>
                      <p className="text-[16px] font-bold text-[#001B2A] leading-[1.3] tracking-[0.16px] break-words">{p.name}</p>
                    </div>
                    {p.fare && (() => {
                      const color = 'text-[#D6001C]';
                      return (
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <span className={`text-[14px] font-medium leading-none tracking-[-0.5px] ${color}`}>KRW</span>
                          <span className={`text-[18px] font-extrabold leading-[1.3] ${color} tabular-nums`}>{(ver === 'v2' ? p.fare.airTransport.total : p.fare.airTransport.total + p.fare.ancillary.total).toLocaleString()}</span>
                        </div>
                      );
                    })()}
                  </div>
                  {/* 운임 상세 */}
                  {p.fare && (
                    <div className="px-4">
                      <div>
                        <FareRow label="항공 운송료" amount={p.fare.airTransport.total} bold t={tr} />
                        {p.fare.airTransport.items.map((item, j) => (
                          <FareRow key={j} label={item.label} amount={item.amount} isDiscount={item.isDiscount} indent={1} t={tr} />
                        ))}
                      </div>
                      {ver !== 'v2' && p.fare.ancillary.legs.length > 0 && (
                        <div className="border-t border-[#E5E7EB]">
                          <FareRow label="부가 서비스" amount={p.fare.ancillary.total} bold t={tr} />
                          {p.fare.ancillary.legs.map((leg, j) => (
                            <div key={j}>
                              <div className="flex justify-between items-baseline gap-2 py-2 pl-2">
                                <span className="text-[14px] font-extrabold text-[#1F2937] leading-none">{dirMap[leg.direction] ?? leg.direction}</span>
                                <span className="text-[14px] font-extrabold text-[#1F2937] tabular-nums leading-none flex-shrink-0">{leg.total.toLocaleString()}</span>
                              </div>
                              {leg.items.map((item, k) => (
                                <FareRow key={k} label={item.label} detail={item.detail} amount={item.amount} indent={2} t={tr} />
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="pb-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 결제정보 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[18px] font-extrabold text-[#1F2937] leading-[1.3]">{tr.paymentSection}</h2>
            <div className="border border-[#D8DAE0] rounded-xl overflow-hidden text-[14px]">
              {/* 헤더 */}
              <div className="bg-[#F9FAFB] flex items-start justify-between px-4 py-4 text-[#374151]">
                <span className="flex-[1.2]">{tr.dateLabel}</span>
                <span className="flex-1 text-center">{tr.methodLabel}</span>
                <span className="flex-1 text-right">{tr.amountLabel}</span>
              </div>
              {/* 행 */}
              {reservation.payment.rows.map((row, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 text-[#1F2937] border-t border-[#D8DAE0]">
                  <span className="flex-[1.2] break-all pr-2">{row.date}</span>
                  <span className="flex-1 text-center">{row.method}</span>
                  <span className="flex-1 text-right tabular-nums">{row.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 안내사항 */}
          <section className="flex flex-col gap-4">
            <h2 className="text-[18px] font-extrabold text-[#111827] leading-[1.3]">{tr.noticesSection}</h2>
            <div className="space-y-6">
              {tr.noticeSections.map((sec) => (
                <div key={sec.title}>
                  <p className="text-[16px] font-bold text-[#374151] leading-[1.3] tracking-[0.16px] mb-2">{sec.title}</p>
                  <ul className="space-y-1">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#374151] leading-[1.3]">
                        <span className="mt-[7px] w-[3px] h-[3px] rounded-full bg-[#374151] flex-shrink-0" />
                        <span className="break-words min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── 푸터 ── */}
        <footer className="bg-[#F3F4F6] border-t border-[#D8DAE0] flex flex-col items-center gap-6 px-6 py-6">
          {/* 회사 정보 + 로고 */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-[12px] text-[#6B7280] text-center leading-[1.3]">이스타항공(주) 대표이사 조중석 / 서울특별시 강서구 공항대로236 이스타항공(주)</p>
            <p className="text-[12px] text-[#6B7280] text-center leading-[1.3]">사업자 등록번호 : 401-81-32460 / 통신판매업 신고번호 2008-전북군산-00073호</p>
            <p className="text-[12px] text-[#6B7280] text-center leading-[1.3]">개인정보관리책임자 : 이경민 / 예약센터&nbsp;&nbsp;1544-0080 / FAX 02-2665-7470</p>
            <p className="text-[12px] text-[#6B7280] text-center leading-[1.3]">COPYRIGHT (C) 2022 EASTARJET. ALL RIGHTS RESERVED.</p>
            <img src={imgLogoEastarjetGrey} alt="Eastar Jet" className="h-[24px] w-[114px] object-contain mt-1 opacity-60" />
          </div>
          {/* 발신전용 안내 */}
          <p className="text-[12px] text-[#6B7280] text-center leading-[1.3]">
            본 메일은 발신전용이므로 회신되지 않습니다. 문의사항이 있으시면 고객센터의{' '}
            <span className="text-[14px] font-bold text-[#6B7280] underline underline-offset-2">고객의말씀</span>을 이용해주십시오.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default EmailReceiptPage;
