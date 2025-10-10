import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import KvkSection from "../../components/kvkSection'/KvkSection";


export default function Kvk() {
    return (
        <div className="w-full max-w-full scroll-smooth"  >
            <HeroAbout title="سياسة الخصوصية" />
            <KvkSection />
            <Box />
        </div>
    )
}
