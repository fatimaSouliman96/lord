import { useEffect, useState } from "react";
import AboutSection from "../../components/aboutSection/AboutSection";
import Box from "../../components/box/Box";
import HeroAbout from "../../components/heroAbout/HeroAbout";
import ExpSecation from "../../components/secations/ExpSecation";
import { Helmet } from 'react-helmet';
import { getData } from "../../api/services/getData";
import type { packegeInfo } from "../../types/types";

export default function About() {

  const [info, setInfo] = useState<packegeInfo>()

  const fetchData = async () => {
    const data: packegeInfo = await getData("show-about")
    setInfo(data)
  }
  useEffect(() => {
    fetchData()

  }, [])

  return (
    <>

      <Helmet>
        <title>اللورد لخدمات الانترنت | معلومات عنا</title>
      </Helmet>
      <div className="w-full max-w-full scroll-smooth"  >
        <HeroAbout title="تعرف علينا" />
        {info&&<AboutSection info={info} />}
        <ExpSecation />
        <Box />
      </div>
    </>
  )
}
