import type { packegeInfo } from "../../types/types";



export default function AboutSection({info} : {info: packegeInfo}) {
    return (
        <div className='w-full max-w-full 
        lg:px-44
        md:px-44
        px-4 
         xl:mt-44
            lg:mt-44
            md:mt-44
            mt-28 
            flex justify-between 
            lg:flex-row
            md:flex-row
            flex-col
            ' >
            <div className="text-right lg:w-1/2 md:w-1/2 w-full" >
                <span className="text-sm text-[#3983b2] font-medium" >نبذة عنا</span>
                <h1 className="
                lg:text-[50px]  md:text-[40px] text-[30px] 
                font-semibold text-black" >
                    {info.title}
                  {/* سرعة عالية <br className={`lg:block md:block hidden`} />مصممة لابقائك<br className={`lg:block md:block hidden`} /> على اتصال. */}

                     
            
                </h1>
            </div>

            <div className="text-right lg:w-1/2 md:w-1/2 w-full" >
                <p className="text-sm text-[#5F6168] font-normal leading-6" 
                >
                    {info.description}
                </p>
            </div>
        </div>
    )
}
