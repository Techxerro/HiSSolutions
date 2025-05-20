import React, {useRef} from "react";
import './style.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation,Pagination, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { image } from "../../../Assets/img";
import caseStudiesData from "./CaseStudiesData";


const CaseStudySlider = ()=>{
    
    const swiperRef = useRef();

    return(
        <>
            <section className="case-study-section">
                <div className="container">
                    <div className="row head-philosophy justify-content-center">
                        <div className="col-lg-10 col-12 text-center">
                            <h1 data-aos="fade-up" data-aos-delay="300">Case Studies</h1>                            
                        </div>
                    </div>
                    <div className="row slider-philosophy">
                            
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return ('<span class="' + className + '"></span>');
                                }
                            }}
                            mousewheel={{ forceToAxis: true }} 
                            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                            modules={[Navigation, Autoplay, Pagination, Mousewheel]}
                            className="hero-slider-wrapper"
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {caseStudiesData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="slideouter">
                                        <div className="slideinner">
                                            <div className="row slidecontent">
                                                <div className="col-lg-2 col-12">
                                                    <div className="d-flex align-items-start justify-content-center">
                                                        <img src={item.logo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-12">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <button className="btnprimary"> <a href={item.link}> {item.linkText}</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                                {/* <div className="swiperbtn">
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div> */}
                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}
export default CaseStudySlider;