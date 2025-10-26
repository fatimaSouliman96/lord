import { useEffect, useRef } from "react";
import Box from "../../components/box/Box";
import FaqSection from "../../components/FaqSection/FaqSection";
import Hero from "../../components/Hero/Hero";
import BundelsSection from "../../components/secations/BundelsSection";
import ExpSecation from "../../components/secations/ExpSecation";
import Map from "../../components/secations/Map";
import Rating from "../../components/secations/Rating";
import { Helmet } from 'react-helmet';
import { getData } from "../../api/services/getData";

export default function HomePage() {
  const bundlesRef = useRef<HTMLDivElement | null>(null);

  const handleRegionClick = (region?: { id: string }) => {
    // خزّني المدينة إذا بتحبي
    region && localStorage.setItem("city", region.id);

    // مرّري للقسم
    if (bundlesRef.current) {
      bundlesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    localStorage.setItem("city", "SY-DI")

    
  }, [])


  return (
    <>
      <Helmet>
        <title>اللورد لخدمات الانترنت | الرئيسية</title>
      </Helmet>
      <div className="w-full max-w-full scroll-smooth">
        <Hero onRegionClick={handleRegionClick} />
        <ExpSecation />
        <Map onRegionClick={handleRegionClick} />
        <div ref={bundlesRef}>
          <BundelsSection />
        </div>
        <Rating />
        <FaqSection />
        <Box />
      </div>
    </>
  );
}

