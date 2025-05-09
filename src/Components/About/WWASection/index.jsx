import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const WhoWeAreSection=()=>{
    return(
        <>
        <div className="whoweare-section">        
            <div className="container">
                <div className="row align-items-center built-content">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">  
                        <h1  data-aos="fade-up" data-aos-delay="100">Who We Are</h1>                      
                        <p data-aos="fade-in" data-aos-delay="800"> 
                        We are hands-on business builders, not theorists. With real-world leadership experience across global markets and major international brands, our team brings uncommon insight and actionability to every client engagement.
                        </p>
                        <p data-aos="fade-in" data-aos-delay="800">We partner with restaurant groups, investors, startups, and established brands ready to rethink, realign, and reignite their businesses for a competitive edge.</p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                        <img src={image.img1} alt=""  data-aos="zoom-out-right" data-aos-delay="500"/>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default WhoWeAreSection;