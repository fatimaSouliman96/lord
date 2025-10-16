import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import SwiperRating from "../../components/swiperRating/SwiperRating";
import './style.css'

export default function Testemonials() {
    return (
        <div className="w-full max-w-full scroll-smooth"  >
            <HeroAbout title="ماذا يقول الناس عن السرعة العالية؟" />

            <div className='test h-fit pb-4 w-full px-4 md:px-2 lg:px-44 pt-40' >
                <SwiperRating />
            </div>

            <Box />
        </div>
    )
}
