import Tabs from "../Tabs/Tabs";

export const tabsData = [
  {
    id: "damascus",
    label: "دمشق",
    cards: [
      {
        link: "#",
        speed: "50 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "دمشق",
        price: "500 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "100 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "دمشق",
        price: "800 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "aleppo",
    label: "حلب",
    cards: [
      {
        link: "#",
        speed: "40 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "حلب",
        price: "450 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "80 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "حلب",
        price: "750 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "latakia",
    label: "اللاذقية",
    cards: [
      {
        link: "#",
        speed: "60 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "اللاذقية",
        price: "480 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "120 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "اللاذقية",
        price: "900 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "homs",
    label: "حمص",
    cards: [
      {
        link: "#",
        speed: "50 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "حمص",
        price: "470 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "90 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "حمص",
        price: "820 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "hama",
    label: "حماة",
    cards: [
      {
        link: "#",
        speed: "40 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "حماة",
        price: "450 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "80 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "حماة",
        price: "780 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "tartous",
    label: "طرطوس",
    cards: [
      {
        link: "#",
        speed: "60 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "طرطوس",
        price: "500 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "100 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "طرطوس",
        price: "850 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "deir-ez-zor",
    label: "دير الزور",
    cards: [
      {
        link: "#",
        speed: "30 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "دير الزور",
        price: "400 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "60 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "دير الزور",
        price: "700 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "sweida",
    label: "السويداء",
    cards: [
      {
        link: "#",
        speed: "40 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "السويداء",
        price: "430 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "80 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "السويداء",
        price: "780 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
  {
    id: "idlib",
    label: "إدلب",
    cards: [
      {
        link: "#",
        speed: "30 Mbps",
        unlimited: "غير محدود",
        offerDuration: "3 أشهر",
        city: "إدلب",
        price: "420 TL",
        buttonText: "اشترك الآن",
      },
      {
        link: "#",
        speed: "70 Mbps",
        unlimited: "غير محدود",
        offerDuration: "6 أشهر",
        city: "إدلب",
        price: "750 TL",
        buttonText: "اشترك الآن",
      },
    ],
  },
];

export default function BundelsSection() {

  return (
    <div className='w-full max-w-full 
        lg:px-44
        md:px-44
        px-4 
         xl:mt-44
            lg:mt-44
            md:mt-44
            mt-28 ' >
      <h1 className='xl:text-[58px]  md:text-[56px] text-[32px] font-medium text-center text-black' >باقات عائلية</h1>
      <h1 className='text-[18px] font-normal text-center text-[#5f6368]' >باقات عائلية</h1>
      <Tabs tabs={tabsData} />
    </div>
  )
}
