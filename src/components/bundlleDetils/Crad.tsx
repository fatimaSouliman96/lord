import HoverButton from "../hoverBtn/HoverBtn";


export default function Crad() {
    return (
        <div className="relative  h-[357px] border border-gray-200 bg-white shadow-[0_1px_0px_rgba(1,16,61,0.1),0_-20px_70px_rgba(1,16,61,0.03)] overflow-visible rounded-[30px] p-[50px_60px] text-center  transition-all duration-500 hover:bg-[#3983b2] group">

            <div className="w-[40%] transform -translate-x-8 mx-auto bg-black rounded-full h-8 text-white flex items-center justify-center absolute 
            -top-5" >إسنيورت</div>
            <div className="mb-5">
                <h1 className="text-[40px] font-bold text-[#3983b2] group-hover:text-white">480 TL</h1>
            </div>
            <hr className="w-[80%] mx-auto text-gray-200 " />
            <div className="mb-5 mt-5">
                <p className="font-medium text-sm text-[#5f6368] group-hover:text-white">الأسعار المذكورة تشمل 20% ضريبة القيمة المضافة و 10% ضريبة الاستهلاك الخاصة.</p>

            </div>
            <hr className="w-[85%] mx-auto text-gray-200 " />


            <hr className="w-[85%] mx-auto text-gray-200 " />
            <HoverButton text={"تواصل معنا"} link={`#`} />
        </div>
    )
}
