import BundlleDetils from "../../components/bundlleDetils/BundlleDetils";
import Crad from "../../components/bundlleDetils/Crad";
import PersonCard from "../../components/personCard/PersonCard";



export default function ApplyPage() {

    return (
        <div className="w-full max-w-full scroll-smooth pb-18"  >
            <div className="w-full bg-[#3983b2] h-32" >
            </div>
            <div className="w-[80%] mx-auto bg-[#F5F7FA] pt-12 lg:pt-0 xl:pt-0 md:pt-0 rounded-xl gap-12  mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between  px-12 h-fit items-center">
                <Crad />
                <BundlleDetils/>
                <PersonCard/>              
            </div>
        </div>
    )
}
