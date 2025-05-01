import React, {useRef} from "react";
import { image } from "../../Assets/img";
import './style.scss';

// core version + navigation, pagination modules:
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const TestimonySection = () =>{
    
    const swiperRef = useRef();
    
    // const animation = () =>{                
    //     let tl = gsap.timeline({duration:0.2})
    //     tl.fromTo('.content',{x:'-100%',y:'-50%',opacity:0,},{x:'-5%',y:'-50%',opacity:1})
    // }

    const sliders = [
        {
            id:1,
            image:image.banner1,
            title:'– VP, International QSR Brand',
            titlespan:'“Stephen doesn’t act like a consultant—he thinks like a partner. We opened 100+ stores and saw a 30% EBITDA jump. HIS changed the trajectory of our business.”'
        },
        {
            id:2,
            image:image.banner2,
            title:'– VP, International QSR Brand',
            titlespan:'“Stephen doesn’t act like a consultant—he thinks like a partner. We opened 100+ stores and saw a 30% EBITDA jump. HIS changed the trajectory of our business.”',
        },
        {
            id:3,
            image:image.banner3,
            title:'– VP, International QSR Brand',
            titlespan:'“Stephen doesn’t act like a consultant—he thinks like a partner. We opened 100+ stores and saw a 30% EBITDA jump. HIS changed the trajectory of our business.”',
        },
        {
            id:4,
            image:image.banner4,
            title:'– VP, International QSR Brand',
            titlespan:'“Stephen doesn’t act like a consultant—he thinks like a partner. We opened 100+ stores and saw a 30% EBITDA jump. HIS changed the trajectory of our business.”',
        }
    ]

    return(
        <>
            <section className="testimony-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>What Our Clients Say</h1>
                        </div>
                        <div className="col-12">
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
                            autoplay={{delay:4000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                            modules={[Navigation,Autoplay,Pagination]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            
                                {
                                    sliders.map((obj)=>{
                                        return(
                                            <SwiperSlide>
                                                <div className="testimony" key={obj.id}>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-sm-4 col-12">
                                                                <img src={image.profileimg1} alt="" />
                                                            </div>
                                                            <div className="col-sm-8 col-12 d-flex align-items-center">
                                                                <div className="testimony-content">
                                                                    <p>{obj.titlespan}</p>
                                                                    <h4>{obj.title}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonySection;