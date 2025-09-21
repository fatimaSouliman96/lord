import Box from "../../components/box/Box";
import FaqSection from "../../components/FaqSection/FaqSection";
import Hero from "../../components/Hero/Hero";
import BundelsSection from "../../components/secations/BundelsSection";
import ExpSecation from "../../components/secations/ExpSecation";
import Map from "../../components/secations/Map";
import Rating from "../../components/secations/Rating";



export default function Home() {
  return (
    <div className="w-full max-w-full scroll-smooth" >
              <Hero />
              <ExpSecation />
              <Map />
              <BundelsSection />
              <Rating />
              <FaqSection />
              <Box />
    </div>
  )
}

