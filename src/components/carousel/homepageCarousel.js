import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import "./homepageCarousel.scss";
import "swiper/css/effect-cube";
import { EffectCube, Pagination } from "swiper";
export default function Carousel() {
    return (
        <>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}


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
                // navigation={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectCube]}
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
                            src={require("../images/turingMixEventsImages/img1.jpg")}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src={require("../images/turingMixEventsImages/img2.jpg")}
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
                            src={require("../images/turingMixEventsImages/img9.jpg")}
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
                            src={require("../images/turingMixEventsImages/img8.jpg")}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}