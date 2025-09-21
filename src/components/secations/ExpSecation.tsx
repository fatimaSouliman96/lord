import { services } from "../../constant/services";
import ServiceCard from "../ServiseCard/ServiceCrad";


export default function ExpSecation() {
    return (
        <div className="max-w-full  " >
            <h1 className="xl:text-[90px]  md:text-[65px] text-[32px] font-semibold text-center pt-30" >
                تجربة إنترنت <br />فائقة السرعة وبدون انقطاع
            </h1>

                <div className="max-w-full pt-16 w-[90%] m-auto gap-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 justify-center" >
                    {
                        services?.map((ele, index) => {
                            return <ServiceCard key={index} iconAnimation={ele.iconAnimation} title={ele.title} bgColor={ele.bgColor} description={ele.description} />
                        })
                    }
                </div>
     

        </div>
    )
}
