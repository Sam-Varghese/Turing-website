import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./homepageCarousel.scss"
export default function Carousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                centeredSlides={true}
                centeredSlidesBounds={true}
                centerInsufficientSlides={true}
            >
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img1.webp")}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img2.webp")}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img7.jpg")}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img9.jpeg")}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img10.jpg")}
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img8.jpeg")}
                        />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}