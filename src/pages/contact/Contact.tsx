
import Box from "../../components/box/Box";
import BranchCard from "../../components/branchCard/BranchCard";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import { branches, type branchType } from "../../constance/branches";
import { Helmet } from 'react-helmet';

export default function Contact() {

    return (
        <>
            <Helmet>
                <title>اللورد لخدمات الانترنت | تواصل معنا</title>
            </Helmet>
            <div className="w-full max-w-full scroll-smooth"  >
                <HeroAbout title="اتصل بنا" />
                <ContactInfo />
                <div className="grid grid-cols-1  gap-8 justify-center lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 w-[90%] mx-auto h-fit pt-16" >
                    {
                        branches.map((ele: branchType) => {
                            return <BranchCard address={ele.address} name={ele.name} span={ele.span} />
                        })
                    }
                </div>
                <Box />
            </div>
        </>
    )
}
