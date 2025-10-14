import Lottie from "lottie-react";
import email from '../../../public/Email2.json'
import call from '../../../public/costum call.json'

export default function ContactInfo() {
    return (
        <div className="w-[90%] mx-auto 
        lg:rounded-full
        md:rounded-xl
        rounded-xl
        bg-[#f7f7f7]  mt-24 flex 
        lg:flex-row
        md:flex-col
        flex-col
        lg:h-40
        md:h-56
        h-72
        items-center
        justify-center" >
            <div className="w-1/2 flex  flex-wrap items-center justify-center 
            lg:border-2 
            md:border-0
            border-0
             border-[#ffffff] rounded-tr-full rounded-br-full h-full" >
                <p className="lg:text-xl
                            md:text-lg
                            text-md
                            text-[#5F6168] font-normal" >
                    destek@highspeed.com.tr</p>
                <div className="w-24 h-24 ">
                    <Lottie animationData={email} loop={true} />
                </div>

            </div>
            <div className="w-1/2 flex-wrap  flex items-center justify-center lg:border-2 
            md:border-0
            border-0 border-[#ffffff] rounded-tl-full rounded-bl-full h-full " >
                <p className="lg:text-xl
                            md:text-lg
                            text-md text-[#5F6168] font-normal" >0850 850 31 31</p>
                <div className="w-24 h-24 ">
                    <Lottie animationData={call} loop={true} />
                </div>

            </div>

        </div>
    )
}
