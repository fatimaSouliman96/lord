import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export default function SwiperSlides() {
    return (
        <div className="lg:w-[590px] md:w-[500px] w-[90%] hero" >
            <Swiper className="mySwiper"
                effect={'fade'}
                modules={[Autoplay, EffectFade]} // تفعيل الـ autoplay
                autoplay={{
                    delay: 1000, // الوقت بين كل سلايد (2.5 ثانية)
                    disableOnInteraction: false, // يضل شغال حتى لو المستخدم لمس السلايدر
                }}
                speed={1700}
                loop={true} // بيخلي السلايدر يلف من الأول بعد الأخير
            >
                <SwiperSlide><img className="scale-x-[-1] " src={"/hero-img-2-1.png"} /></SwiperSlide>
                <SwiperSlide><img className="scale-x-[-1] " src="/hero-img-2-1a.png" /></SwiperSlide>
            </Swiper>
        </div>
    );
}