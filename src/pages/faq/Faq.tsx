import Box from "../../components/box/Box";
import FaqSection from "../../components/FaqSection/FaqSection";
import HeroAbout from "../../components/heroAbout/HeroAbout";


export default function Faq() {
    return (
        <div className="w-full max-w-full scroll-smooth"  >
            <HeroAbout title="الأسئلة الشائعة" />
            <FaqSection />
            <Box />
        </div>
    )
}
