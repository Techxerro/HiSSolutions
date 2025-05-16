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

const Philosophy = (props)=>{
    
    const swiperRef = useRef();

    return(
        <>
            <section className="philosophy-section">
                <div className="lightorgcontainer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12 text-center py-5">
                            <h1 data-aos="fade-down" data-aos-delay="200">Our Philosophy</h1>
                            <h5 data-aos="fade-down" data-aos-delay="200">{props.philosophysubtitle}</h5> 
                            
                            <p data-aos="fade-up" data-aos-delay="300">{props.philosophypara}</p> 
                        </div>
                    </div>
                </div>
                <div className="container orgcontainer">
                    <div className="row head-philosophy justify-content-center">
                        <div className="col-lg-10 col-12">
                            <h1 data-aos="fade-down" data-aos-delay="200">{props.slidetitle}</h1>                            
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
                            navigation= {{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }} 
                            // onSlideChange={()=>animation()}               
                            className="hero-slider-wrapper"        
                            autoplay={{delay:6000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                            modules={[Navigation,Autoplay,Pagination]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                        {props.SlideService.map(item=>(
                                <SwiperSlide>                                   
                                    <div className="slideouter" key={item.id}>
                                        <div className="slideinner">
                                            <div className="row">
                                                <div className="col-lg-4 col-12">
                                                    <div className="slideno">{item.id}</div>
                                                </div>
                                                <div className="col-lg-8 col-12">
                                                    <div className="slidetitles">
                                                        <h3><b>{props.slidetitlehead}</b></h3>
                                                        <h5>{props.slidetitlesubhead}</h5>                                            
                                                    </div>
                                                    <div className="row slidecontent">  
                                                        {item.sliderpoint.map(slideitem=>(
                                                            <div className="col-lg-6 col-12" key={slideitem.sliderid}>
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
                                                                    <h5>{slideitem.text}</h5>
                                                                </div>
                                                            </div> 
                                                            ))
                                                        }
                                                        <div className="col-12 d-flex slidefoot">                                                
                                                            <h5><span style={{color:'#ff4c00'}}>Deliverable</span>: Foundational Brand Strategy Report.</h5>                                                
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div> 
                                </SwiperSlide>
                            ))}
                            <div className="swiperbtn">
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                        </Swiper>

                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Philosophy;