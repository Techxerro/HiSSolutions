import React, {useRef} from "react";
import './style.scss';

// core version + navigation, pagination modules:
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Philosophy = ()=>{
    
    const swiperRef = useRef();

    return(
        <>
            <section className="philosophy-section">
                <div className="container">
                    <div className="row head-philosophy justify-content-center">
                        <div className="col-lg-10 col-12">
                            <h1>Our Philosophy</h1>
                            <h5>Franchising done right is about empowering others while protecting the integrity of your brand.</h5>
                            <br/>
                            <p>We believe that successful franchises are built not just on great products — but on clear systems, shared values, strong support infrastructure, and thoughtful expansion strategies.This is the foundation we help you build.</p>
                        </div>
                    </div>
                    <div className="row slider-philosophy">
                            
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index,className) {
                                    return ('<span class="' + className + '">'+'</span>');
                                }
                            }} 
                            // onSlideChange={()=>animation()}               
                            className="hero-slider-wrapper"        
                            autoplay={{delay:6000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                            modules={[Navigation,Autoplay,Pagination]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            <SwiperSlide>
                                <div className="slideouter">
                                    <div className="slideinner">
                                        <div className="slidetitles">
                                            <h3>Franchise Readiness Assessment</h3>
                                            <h6>Franchise Readiness Assessment</h6>
                                            <p>We evaluate your organization’s operational, financial, and cultural readiness to franchise or acquire a brand:</p>

                                        </div>
                                        <div className="row slidecontent">
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Operational system review</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Financial stability analysis</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Organizational capacity assessment</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Brand positioning audit</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="d-flex gap-2 ">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Franchise scalability potential</h5>
                                                </div>                                                
                                            </div>
                                            <div className="col-12 d-flex text-center justify-content-center slidefoot">                                                
                                                <h5><b>Deliverable: A detailed Franchise Readiness Report + Go/No-Go Recommendation.</b></h5>                                                
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slideouter">
                                    <div className="slideinner">
                                        <div className="slidetitles">
                                            <h3>Franchise Readiness Assessment</h3>
                                            <h6>Franchise Readiness Assessment</h6>
                                            <p>We evaluate your organization’s operational, financial, and cultural readiness to franchise or acquire a brand:</p>

                                        </div>
                                        <div className="row slidecontent">
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Operational system review</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Financial stability analysis</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Organizational capacity assessment</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="d-flex gap-2">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Brand positioning audit</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-center">
                                                <div className="d-flex gap-2 ">
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="30" cy="30" r="30" fill="#FF4C00"/>
                                                        <path d="M26.6084 14.4H33.391L31.6954 30H28.3041L26.6084 14.4Z" fill="white"/>
                                                        <path d="M26.6084 45.6H33.391L31.6954 30H28.3041L26.6084 45.6Z" fill="white"/>
                                                        <path d="M45.5996 26.6088L45.5996 33.3914L29.9996 31.6957L29.9996 28.3044L45.5996 26.6088Z" fill="white"/>
                                                        <path d="M14.4004 26.6088L14.4004 33.3914L30.0004 31.6957L30.0004 28.3044L14.4004 26.6088Z" fill="white"/>
                                                        <path d="M38.6328 16.5712L43.4288 21.3672L31.199 31.1991L28.801 28.801L38.6328 16.5712Z" fill="white"/>
                                                        <path d="M16.5713 38.6331L21.3673 43.4291L31.1992 31.1992L28.8012 28.8012L16.5713 38.6331Z" fill="white"/>
                                                        <path d="M43.4287 38.6331L38.6327 43.4291L28.8008 31.1992L31.1988 28.8012L43.4287 38.6331Z" fill="white"/>
                                                        <path d="M21.3672 16.5712L16.5712 21.3672L28.801 31.1991L31.199 28.801L21.3672 16.5712Z" fill="white"/>
                                                    </svg>
                                                    <h5>Franchise scalability potential</h5>
                                                </div>                                                
                                            </div>
                                            <div className="col-12 d-flex text-center justify-content-center">                                                
                                                <h5><b>Deliverable: A detailed Franchise Readiness Report + Go/No-Go Recommendation.</b></h5>                                                
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Philosophy;