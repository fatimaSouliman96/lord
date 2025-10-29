import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import CardRating from '../cardRating/CardRating';
import type { testimonial } from '../../types/types';

export default function SwiperRating({ testimonials }: { testimonials: testimonial[] }) {
    return (
        <div className='rating'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000, // الوقت بين كل سلايد (2.5 ثانية)
                    disableOnInteraction: false, // يضل شغال حتى لو المستخدم لمس السلايدر
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },   // sm
                    768: { slidesPerView: 2 },   // md
                    1024: { slidesPerView: 3 },  // lg
                }}
                modules={[Pagination, Autoplay]}
                speed={1700}
                loop={true}
                className="mySwiper"
            >
                {
                    testimonials.map(testimonial => {
                        return <SwiperSlide key={testimonial.id} >
                            <CardRating name={testimonial.name} service={testimonial.position} text={testimonial.comment} />
                        </SwiperSlide>
                    })
                }


            </Swiper>
        </div>
    );
}
