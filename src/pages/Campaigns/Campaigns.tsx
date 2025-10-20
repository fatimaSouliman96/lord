import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import Tabs from "../../components/Tabs/Tabs";
import { tabsData } from "../../constance/data";


export default function Campaigns() {

    return (

        <div className="w-full max-w-full scroll-smooth"  >
            <HeroAbout title="باقات واي فاي" />
            <div className="pt-10 px-4 md:px-2 lg:px-28" >
                <Tabs tabs={tabsData} />
            </div>
            <Box />
        </div>

    )
}
