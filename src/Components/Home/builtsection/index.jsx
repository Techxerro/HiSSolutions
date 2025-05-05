import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const BuiltSection=()=>{
    return(
        <>
        <div className="built-section">        
            <div className="container ">
                <div className="row">
                    <div className="col-sm-7 col-12">
                    <h1  data-aos="fade-up" data-aos-delay="100">Built for the Bold—<br/>At Any Stage</h1></div>
                    <div className="col-sm-5 col-12"></div>
                </div>       

                <div className="row align-items-center built-content">
                    <div className="col-md-7 col-sm-12 col-12">
                        <img src={image.img1} alt=""  data-aos="zoom-out-right" data-aos-delay="500"/>
                    </div>
                    <div className="col-md-5 col-sm-12 col-12 ">
                        <div className="blob-outer-wrap">
                            <div className="blob-inner-wrap">
                                <div className="blob"></div>
                            </div>
                        </div>
                        <p data-aos="fade-in" data-aos-delay="800"> 
                        Some firms deliver slides. We deliver solutions.
                        Whether you're a first-time operator or a multinational group, we embed proven frameworks
                        tailored to your scale, ambition, and operating realities. <b>Our experience spans more than 30
                        years, 80+ countries, and hundreds of concepts.</b> 
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default BuiltSection;