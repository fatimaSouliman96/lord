import { FaCheck, FaRegStar } from "react-icons/fa";


export default function BundlleDetils() {

    return (
        <div  >
            <h1 className="text-5xl font-semibold text-black" >
                واي فاي إسنيورت
                24 ميجابت في الثانية
            </h1>
            <p className="text-sm font-normal text-[#5F6368] pt-8" >فاتورة آخر 9 أشهر 580₺</p>
            <div className="flex gap-1 items-center pt-4" >
                <FaRegStar color="#e6bd49" />
                <p className="text-xl font-semibold" >ميزات التعرفة</p>
            </div>
            <ul className="pt-4 space-y-2" >
                <li className="flex gap-2 items-center text-md font-normal text-[#5F6368]" >
                    <FaCheck color="#0d9669" />
                    <p>سرعة التنزيل تصل إلى 24 ميجابايت في الثانية</p>
                </li>
                <li className="flex gap-2 items-center text-md font-normal text-[#5F6368]" >
                    <FaCheck color="#0d9669" />
                    <p>سرعة التحميل تصل إلى 24 ميجابايت في الثانية</p>
                </li>
                <li className="flex gap-2 items-center text-md font-normal text-[#5F6368]" >
                    <FaCheck color="#0d9669" />
                    <p>الأشهر الثلاثة الأولى</p>
                </li>
                <li className="flex gap-2 items-center text-md font-normal text-[#5F6368]" >
                    <FaCheck color="#0d9669" />
                    <p>غير محدود</p>
                </li>
            </ul>
        </div>
    )

}
