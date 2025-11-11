
import { useEffect, useState } from "react";
import Box from "../../components/box/Box";
import BranchCard from "../../components/branchCard/BranchCard";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import { Helmet } from 'react-helmet';
import type { branch } from "../../types/types";
import { getData } from "../../api/services/getData";
import { useLoading } from "../../components/LoadingContext/LoadingContext";

export default function Contact() {

    const [branchs, setBranchs] = useState<branch[]>()
    const { startLoading, stopLoading } = useLoading();

    const fetchData = async () => {

        try {
            startLoading()
            const data: branch[] = await getData("show-branches")
            setBranchs(data)
        }finally{
            stopLoading()
        }
    }
    useEffect(() => {
        fetchData()

    }, [])
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
                        branchs && branchs.map((ele: branch) => {
                            return <BranchCard address={ele.address} name={ele.name} span={ele.status} />
                        })
                    }
                </div>
                <Box />
            </div>
        </>
    )
}
