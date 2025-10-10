import AboutSection from "../../components/aboutSection/AboutSection";
import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import ExpSecation from "../../components/secations/ExpSecation";


export default function About() {
  return (
    <div className="w-full max-w-full scroll-smooth"  >
      <HeroAbout title="تعرف علينا" />
      <AboutSection />
      <ExpSecation />
      <Box />
    </div>
  )
}
