
import Box from "../../components/box/Box";
import FaqSection from "../../components/FaqSection/FaqSection";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import { Helmet } from 'react-helmet';

export default function Faq() {

    return (
        <>
            <Helmet>
                <title>اللورد لخدمات الانترنت | الأسئلة الشائعة</title>
            </Helmet>
            <div className="w-full max-w-full scroll-smooth"  >
                <HeroAbout title="الأسئلة الشائعة" />
                <FaqSection />
                <Box />
            </div>
        </>
    )
}
