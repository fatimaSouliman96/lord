import type { showPackege } from "../../types/types";
import HoverButton from "../hoverBtn/HoverBtn";


export default function Crad({info} : {info: showPackege}) {
    console.log(info)
    return (
        <div className="relative  border border-gray-200 bg-white shadow-[0_1px_0px_rgba(1,16,61,0.1),0_-20px_70px_rgba(1,16,61,0.03)] overflow-visible rounded-[30px] p-[50px_60px] text-center  transition-all duration-500 hover:bg-[#3983b2] group">

            <div className="w-[40%] transform -translate-x-8 mx-auto bg-black rounded-full h-8 text-white flex items-center justify-center absolute 
            -top-5" >{info?.package.speed}</div>
            <div className="mb-5">
                <h1 className="text-[40px] font-bold text-[#3983b2] group-hover:text-white">{info?.package.price}</h1>
            </div>
            <hr className="w-[80%] mx-auto text-gray-200 " />
            <div className="mb-5 mt-5">
                <p className="font-medium text-sm text-[#5f6368] group-hover:text-white"> {info?.package.description} </p>

            </div>
            <hr className="w-[85%] mx-auto text-gray-200 " />


            <hr className="w-[85%] mx-auto text-gray-200 " />
            <HoverButton text={"تواصل معنا"} link={`https://wa.me/${info.provider.phone}`} />

        </div>
    )
}
