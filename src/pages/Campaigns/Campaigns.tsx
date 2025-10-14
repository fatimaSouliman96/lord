import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import Tabs from "../../components/Tabs/Tabs";
import { tabsData } from "../../constance/data";


export default function Campaigns() {

    return (

        <div className="w-full max-w-full scroll-smooth"  >
            <HeroAbout title="حملات واي فاي" />
            <div className="pt-10 px-28" >
                <Tabs tabs={tabsData} />
            </div>
            <Box />
        </div>

    )
}
