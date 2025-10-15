import { PiInfinityBold } from "react-icons/pi";
import SwiperSlides from "../swiper/Swiper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import AnimatedHeading from "../AnimatedHeading/AnimatedHeading";


export default function Hero() {
  const [visible, setVisible] = useState(false);

  // مراقبة السكول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // فانكشن ترجع لفوق
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { scrollYProgress } = useScroll();

  function scrollDown(pixels: number) {
    window.scrollBy({
      top: pixels,   // عدد البيكسلات اللي بدك تنزل فيها
      behavior: "smooth",
    });
  }

  const xRange = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const x = useSpring(xRange, { stiffness: 50, damping: 30 });

  const x2Range = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useSpring(x2Range, { stiffness: 50, damping: 30 })

  const yRange = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y = useSpring(yRange, { stiffness: 50, damping: 30 })

  return (

    <div className="relative  w-full px-2   md:px-10 lg:px-44 heroSection pt-35 flex xl:flex-row lg:flex-row md:flex-col flex-col lg:items-start items-center md:items-start  lg:justify-between overflow-hidden" >
      <div className="absolute z-[-1] inset-0 bg-[url(/hero-bg-2.png)] bg-no-repeat bg-cover scale-x-[-1]"></div>
      <div className="flex flex-col gap-15  pt-10" >
        <div className="flex flex-col gap-10" >
          <AnimatedHeading />
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="campaigns" className="lg:w-[226px] xl:w-[226px] md:w-full w-full text-2xl border-0 py-1.5 px-4.5 font-semibold rounded-[10px]  lg:flex md:block items-center justify-center bg-[linear-gradient(180deg,#ffd15d_-23%,#ff9900_100%)] text-[#357faf]
            hover:-translate-y-3 flex text-center hover:shadow-lg transform transition-all duration-1000 " >
                اشترك
            </a>
          </motion.div>
        </div>

        <div className="lg:block md:block mt-8 hidden md:mx-auto lg:mx-0 xl:mx-0" >
          <p className="text-[#ffffffa1]" >إنترنت غير محدود</p>
          <p className="text-white pr-4">تجربة فريدة</p>
          <PiInfinityBold size={84} color="#ff9900" />
        </div>
        {/* svg line */}
        <div className="absolute lg:block md:hidden hidden md:left-[40%] 
        lg:left-[50%] 
        xl:left-[50%] 
        xl:top-[60%]
        lg:top-[60%] 
        -translate-y-1/2 
        scale-x-[-1]">
          <svg width="238" height="159" viewBox="0 0 238 159" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              className="line-2"
              d="M234.344 52.0221C223.737 68.476 166.957 94.3438 103.492 41.3862C75.8453 16.8451 105.128 -10.4919 114.849 24.3323C124.571 59.1564 92.7914 100.54 68.4537 105.873C44.1161 111.206 27.3149 102.11 30.0997 91.4562C34.0369 76.394 74.0714 111.53 2.64231 134.089"
              stroke="white"
              strokeWidth="2"
            />

            <path
              className="line-2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.0625 133.958C2.41561 133.237 3.42407 131.16 3.56794 130.842C3.9652 129.948 4.03834 129.444 4.05489 128.923C4.06249 128.505 4.01353 128.07 4.12522 127.291C4.19178 126.861 3.87842 126.464 3.44849 126.405C3.01856 126.345 2.62947 126.648 2.56291 127.077C2.47204 127.784 2.47586 128.238 2.48453 128.637C2.48792 129.095 2.47134 129.451 2.12998 130.203C1.96731 130.57 0.83986 132.515 0.507014 133.501C0.331505 134.015 0.368942 134.416 0.454587 134.597C0.576866 134.857 0.815639 135.113 1.20469 135.308C1.70511 135.556 2.55838 135.75 3.5093 135.988C4.40364 136.21 5.40968 136.481 6.2686 136.942C6.98849 137.334 7.59496 137.863 7.84287 138.677C7.96607 139.092 8.3949 139.33 8.81178 139.207C9.22866 139.084 9.47003 138.645 9.34683 138.23C8.99025 137 8.10724 136.153 7.01332 135.56C6.04391 135.035 4.91164 134.714 3.88939 134.463C3.27915 134.309 2.71001 134.182 2.27274 134.041C2.20216 134.019 2.13233 133.988 2.0625 133.958Z"
              fill="white"
            />
          </svg>

        </div>
      </div>
      <div className="relative z-40 lg:w-[40%] xl:w-[40%] md:w-[90%] md:m-auto w-full lg:ml-26 md:ml-26 ml-0" >
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SwiperSlides />
        </motion.div>

        {/* shape image */}
        <img
          className="absolute lg:block md:hidden hidden top-[10%] -left-8 -translate-y-1/2 scale-x-[-1]"
          src="/hero-shape-2-2.png"
        />

        {/* image_02.png */}
        <div className="absolute lg:block md:block hidden w-[300px] h-[164px] 
        lg:left-[-20%] 
        xl:left-[45%] 
        md:translate-x-[-180%]  
       translate-x-[-60%] 
        top-[20%] 
        -translate-y-1/2  z-40">
          <motion.div
            style={{
              x,
              width: "100%",
              height: "100%",
              perspective: 800,
              margin: "100px auto",
            }}
          >
            <img
              src="/image_02.png"
              alt="parallax"
              draggable="false"
              className="w-full h-full object-cover backdrop-blur-md rounded-[20px]"
            />
          </motion.div>
        </div>

        {/* hero-img-2-3.png */}
        <div className="absolute lg:block md:block hidden w-[255px] h-[58px] 
        left-[-25%] 
        top-[32%] 
        translate-y-[40%] 
        lg:translate-x-[%]
        xl:translate-x-[70%]
        md:translate-x-[240%] 
        z-40">
          <motion.div
            style={{
              x: x2,
              width: "100%",
              height: "100%",
              perspective: 800,
              margin: "100px auto",
            }}
          >
            <img
              src="/hero-img-2-3.png"
              alt="hero-img-2-3"
              draggable="false"
              className="w-full h-full object-cover backdrop-blur-md rounded-[20px]"
            />
          </motion.div>
        </div>

        {/* hero-img-2-4.png */}
        <div className="absolute lg:block md:block hidden w-[164px] h-[144px] left-[40%]
        xl:translate-x-[70%]
        lg:translate-x-[4%]
        md:translate-x-[170%]
        top-[35%] -translate-y-[120%] z-40">
          <motion.div
            style={{
              y,
              width: "100%",
              height: "100%",
              perspective: 800,
              margin: "100px auto",
            }}
          > <img className="w-full h-full object-cover backdrop-blur-md rounded-[20px] tp-hero-2__sub-img-4" src="/hero-img-2-4.png" alt="" draggable="false" /></motion.div>


        </div>

        {/* scroll down */}
        <div className="absolute bottom-0 left-1/2 
        lg:-translate-x-[-15%]
        xl:-translate-x-[-50%]
        translate-x-[-40%]
         w-[260px] lg:block md:block hidden ">
          <div className="absolute bottom-0 left-0 w-full">
            <img src="/scroll-down.png" alt="" />
          </div>

          <div onClick={() => scrollDown(100)} className=" flex-col lg:flex md:flex hidden ">
            <span className=" text-center mt-44 lg:block md:block hidden text-sm text-gray-600 absolute bottom-[0.5rem] left-1/2 -translate-x-1/2">
              Aşağı kaydır
            </span>
            <a
              href="#feature-area"
              className="mouse-scroll-btn lg:inline-block md:inline-block hidden  w-4 h-[25px] border-2 border-[#5F6168] rounded-[30px] outline-none absolute left-1/2 -translate-x-1/2 bottom-[2rem] z-[5]"
            ></a>

          </div>
        </div>

      </div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] leading-[50px] fixed  bottom-6 right-6 flex items-center justify-center

         text-[16px] rounded-[6px] z-[9] text-tp-common-white text-center 
         cursor-pointer bg-[#3983b2] transition-all duration-1000 ease-in-out border-0"
        >
          <FaAngleDoubleUp color="white" />
        </button>
      )}
    </div>

  )
}