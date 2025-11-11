import { useEffect, useState } from "react";
import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
// import Tabs from "../../components/Tabs/Tabs";
import { Helmet } from 'react-helmet';
import type { city } from "../../types/types";
import { getData } from "../../api/services/getData";
import Tabs from "../../components/Tabs/Tabs";
import { useLoading } from "../../components/LoadingContext/LoadingContext";

export default function Campaigns() {

    const [cities, setCities] = useState<city[]>()
    const { startLoading, stopLoading } = useLoading();

    const fetchData = async () => {
        try {
            startLoading()
            const data: city[] = await getData("cities")
            setCities(data)
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
                <title>اللورد لخدمات الانترنت | الباقات</title>
            </Helmet>
            <div className="w-full max-w-full scroll-smooth"  >
                <HeroAbout title="باقات واي فاي" />
                <div className="pt-10 px-4 md:px-2 lg:px-28" >
                    <Tabs cities={cities ?? []} />
                </div>
                <Box />
            </div>
        </>

    )
}
