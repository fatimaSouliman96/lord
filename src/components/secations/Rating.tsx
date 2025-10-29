import { useEffect, useState } from "react";
import type { testimonial } from "../../types/types";
import SwiperRating from "../swiperRating/SwiperRating";
import { motion } from "framer-motion";
import { getData } from "../../api/services/getData";

export default function Rating() {
    const [comments, setComments] = useState<testimonial[]>()

    const fetchData = async () => {
        const data: testimonial[] = await getData("testimonials")
        setComments(data)
    }
    useEffect(() => {
        fetchData()

    }, [])
    return (
        <div className='relative h-fit pb-4 w-full px-4 md:px-2 lg:px-44 pt-40' >
            <h1 className='xl:text-[58px]  md:text-[56px] text-[32px] font-medium text-center text-white' > ماذا يقول الناس عن السرعة العالية؟</h1>
            <div className="absolute z-[-1] inset-0 bg-[url(/hero-bg-2.png)] bg-no-repeat bg-cover scale-x-[-1]"></div>
            <motion.div
                viewport={{ once: true, amount: 0.5 }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <SwiperRating testimonials={comments ?? []} />
            </motion.div>

        </div>
    )
}
