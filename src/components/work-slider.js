import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Ppaws from '../images/ppaws-new-2.png'
import nycua from '../images/nycua-new-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const WorkSlider = () => (
    <>
        <section className="work-slider">
            <div className="slider-wrapper">
                <div className="slider-section">
                    <p>I don't have a lot of pictures of myself, but here are some random ones</p>
                </div>
                <div className="slider-section">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={2.5}
                        // navigation={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img src={Ppaws} alt="Slide 2" />
                            <h1 className="name">slide 1</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Ppaws} alt="Slide 2" />
                            <h1 className="name">slide 2</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 3</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 4</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 5</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 6</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 7</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={nycua} alt="Slide 3" />
                            <h1 className="name">slide 8</h1>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    </>
);

export default WorkSlider;