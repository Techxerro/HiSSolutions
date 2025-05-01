import React from "react";
import './style.scss';

const HeroSection=()=>{
    return(
        <>
        <div className="hero-section">        
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="content-hero">
                            <h1 data-aos="fade" data-aos-delay="400">Hospitality Consulting with Precision,
                            Purpose, and Global Perspective.</h1>
                            <p data-aos="fade" data-aos-delay="800">From startups to global brands, we help hospitality businesses unlock profitability, scale with<br/>
                            clarity, and build structures that stand the test of time.</p>
                            <div className="d-flex gap-4 justify-content-center pt-3">
                                <button className="btnprimary" data-aos="fade-up" data-aos-delay="800">Let’s Talk Strategy</button>
                                <button className="btnsecondary"  data-aos="fade-up" data-aos-delay="800">See Our Work</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection;