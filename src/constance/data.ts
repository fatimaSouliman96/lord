export interface CardType {
  link: string;
  speed: string;
  unlimited: string;
  offerDuration: string;
  price: string;
  buttonText: string;
  city: string; // اسم المدينة
}

export interface CityType {
  id: string;          // معرف فريد لكل مدينة
  city: string;
  cards: CardType[];
}

export interface TabType {
  id: string;
  label: string;
  cities: CityType[];
}

export interface tabs {
  tabs: TabType[]
}

export const tabsData: TabType[] = [
  {
    id: "SY-DI",
    label: "دمشق",
    cities: [
      {
        id: "SY-DI-1",
        city: "دمشق",
        cards: [
          {
            link: "#",
            speed: "100 Mbps",
            unlimited: "غير محدود",
            offerDuration: "6 أشهر",
            price: "800 TL",
            buttonText: "اشترك الآن",
            city: "دمشق",
          },
        ],
      },
      { id: "SY-DI-2", city: "المزة", cards: [] },
      { id: "SY-DI-3", city: "باب توما", cards: [] },
      { id: "SY-DI-4", city: "برزة", cards: [] },
      { id: "SY-DI-5", city: "المالكي", cards: [] },
    ],
  },
  {
    id: "SY-RD",
    label: "ريف دمشق",
    cities: [
      { id: "SY-RD-1", city: "جرمانا", cards: [] },
      { id: "SY-RD-2", city: "دوما", cards: [] },
      { id: "SY-RD-3", city: "قدسيا", cards: [] },
      { id: "SY-RD-4", city: "التل", cards: [] },
      { id: "SY-RD-5", city: "يبرود", cards: [] },
    ],
  },
  {
    id: "SY-HL",
    label: "حلب",
    cities: [
      { id: "SY-HL-1", city: "حلب", cards: [] },
      { id: "SY-HL-2", city: "اعزاز", cards: [] },
      { id: "SY-HL-3", city: "الباب", cards: [] },
      { id: "SY-HL-4", city: "منبج", cards: [] },
    ],
  },
  {
    id: "SY-LA",
    label: "اللاذقية",
    cities: [
      { id: "SY-LA-1", city: "اللاذقية", cards: [] },
      { id: "SY-LA-2", city: "جبلة", cards: [] },
      { id: "SY-LA-3", city: "القرداحة", cards: [] },
      { id: "SY-LA-4", city: "الحفة", cards: [] },
    ],
  },
  {
    id: "SY-HI",
    label: "حمص",
    cities: [
      { id: "SY-HI-2", city: "تلكلخ", cards: [] },
      { id: "SY-HI-3", city: "الرستن", cards: [] },
      { id: "SY-HI-4", city: "القصير", cards: [] },
    ],
  },
  {
    id: "SY-HM",
    label: "حماة",
    cities: [
      { id: "SY-HM-1", city: "حماة", cards: [] },
      { id: "SY-HM-2", city: "مصياف", cards: [] },
      { id: "SY-HM-3", city: "السلمية", cards: [] },
      { id: "SY-HM-4", city: "محردة", cards: [] },
    ],
  },
  {
    id: "SY-T",
    label: "طرطوس",
    cities: [
      { id: "SY-T-1", city: "طرطوس", cards: [] },
      { id: "SY-T-2", city: "بانياس", cards: [] },
      { id: "SY-T-3", city: "صافيتا", cards: [] },
      { id: "SY-T-4", city: "الدريكيش", cards: [] },
    ],
  },
  {
    id: "SY-ID",
    label: "إدلب",
    cities: [
      { id: "SY-ID-1", city: "إدلب", cards: [] },
      { id: "SY-ID-2", city: "سراقب", cards: [] },
      { id: "SY-ID-3", city: "معرة النعمان", cards: [] },
      { id: "SY-ID-4", city: "جسر الشغور", cards: [] },
    ],
  }
];

