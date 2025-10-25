
import BundlleDetils from "../../components/bundlleDetils/BundlleDetils";
import Crad from "../../components/bundlleDetils/Crad";
import PersonCard from "../../components/personCard/PersonCard";
import { Helmet } from 'react-helmet';



export default function ApplyPage() {

    return (
        <>
            <Helmet>
                <title>اللورد لخدمات الانترنت | المزود</title>
            </Helmet>
            <div className="w-full max-w-full scroll-smooth pb-18"  >
                <div className="w-full bg-[#3983b2] h-32" >
                </div>
                <div className="
            lg:w-[80%]
            xl:w-[80%]
            md:w-[80%]
            w-[90%]
             mx-auto bg-[#F5F7FA] pt-12 lg:pt-0 xl:pt-0 md:pt-0 rounded-xl gap-12  mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between  
            lg:px-12
            xl:px-12
            md:px-8
            px-4
            h-fit items-center">
                    <Crad />
                    <BundlleDetils />
                    <PersonCard />
                </div>
            </div>
        </>
    )
}
