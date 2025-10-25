import AboutSection from "../../components/aboutSection/AboutSection";
import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import ExpSecation from "../../components/secations/ExpSecation";
import { Helmet } from 'react-helmet';

export default function About() {

  return (
    <>
      
      <Helmet>
        <title>اللورد لخدمات الانترنت | معلومات عنا</title>
      </Helmet>
      <div className="w-full max-w-full scroll-smooth"  >
        <HeroAbout title="تعرف علينا" />
        <AboutSection />
        <ExpSecation />
        <Box />
      </div>
    </>
  )
}
