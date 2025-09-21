import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import CardRating from '../cardRating/CardRating';

export default function SwiperRating() {
    return (
        <div className='rating'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000, // الوقت بين كل سلايد (2.5 ثانية)
                    disableOnInteraction: false, // يضل شغال حتى لو المستخدم لمس السلايدر
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },   // sm
                    768: { slidesPerView: 2 },   // md
                    1024: { slidesPerView: 3 },  // lg
                }}
                modules={[Pagination, Autoplay]}
                speed={1400}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>
                <SwiperSlide> <CardRating name="احمد" service="مستخدم فردي عالي السرعة" text="كنت مترددًا في البداية، لكنني الآن سعيدٌ لأنني انتقلتُ إلى السرعة العالية. لا تجمد أثناء مشاهدة الأفلام، ولا مزيد من الانقطاعات في عملي!"
                /></SwiperSlide>

            </Swiper>
        </div>
    );
}
