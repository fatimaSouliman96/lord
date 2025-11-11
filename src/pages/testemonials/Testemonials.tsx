
import { useEffect, useState } from "react";
import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import SwiperRating from "../../components/swiperRating/SwiperRating";
import './style.css'
import { Helmet } from 'react-helmet';
import type { testimonial } from "../../types/types";
import { getData } from "../../api/services/getData";
import { useLoading } from "../../components/LoadingContext/LoadingContext";


export default function Testemonials() {

    const [comments, setComments] = useState<testimonial[]>()
    const { startLoading, stopLoading } = useLoading();

    const fetchData = async () => {
        try {
            startLoading()
            const data: testimonial[] = await getData("testimonials")
            setComments(data)
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
                <title>اللورد لخدمات الانترنت | شكاوى المستهلكين</title>
            </Helmet>
            <div className="w-full max-w-full scroll-smooth"  >
                <HeroAbout title="ماذا يقول الناس عن السرعة العالية؟" />

                <div className='test h-fit pb-4 w-full px-4 md:px-2 lg:px-44 pt-40' >
                    <SwiperRating testimonials={comments ?? []} />
                </div>

                <Box />
            </div>
        </>
    )
}
