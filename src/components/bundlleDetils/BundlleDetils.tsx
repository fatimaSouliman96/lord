import { FaCheck, FaRegStar } from "react-icons/fa";
import type { provider } from "../../types/types";


export default function BundlleDetils({info} : {info: provider}) {

    console.log(info)
    return (
        <div  >
            <h1 className="
            xl:text-5xl
            lg:text-5xl
            md:text-3xl
            text-2xl
             font-semibold text-black" >
               {info.name}
            </h1>
            <p className="text-sm font-normal text-[#5F6368] pt-8" >{info.address}</p>
            <div className="flex gap-1 items-center pt-4" >
                <FaRegStar color="#e6bd49" />
                <p className="text-xl font-semibold" >ميزات التعرفة</p>
            </div>
            <ul className="pt-4 space-y-2 items-center text-md font-normal text-[#5F6368]" >
                
                <li className="flex gap-2 items-center text-md font-normal text-[#5F6368]" >
                    <FaCheck color="#0d9669" />
                    <p>{info.description}</p>
                </li>
            
            </ul>
        </div>
    )

}
