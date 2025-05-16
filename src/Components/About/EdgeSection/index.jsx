import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const EdgeSection=()=>{
    return(
        <>
            <section className="edge-section">
                <div className="container ct1">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos="fade-up" data-aos-delay="100">Our Edge</h1>                            
                        </div>

                        <div className="col-sm-4 col-12 d-flex align-items-center">
                            <div className="iconbox">
                                <div className="imgicon" data-aos="zoom-out" data-aos-delay="200">
                                    <img src={image.abticon1} alt="" data-aos="zoom-in" data-aos-delay="300"style={{width:'45px'}}/>
                                </div>
                                <h4>Strategic Consulting</h4>
                                <p>Grounded in operational realities, customized for every client.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12 box-wrapper-2">
                            <div className="iconbox">
                                <div className="imgicon" data-aos="zoom-out" data-aos-delay="200">
                                    <img src={image.abticon2} alt="" data-aos="zoom-in" data-aos-delay="300"/>
                                </div>
                                <h4>Global Reach</h4>
                                <p>Insights honed across major world markets and cultures.</p>
                            </div>
                            <div className="iconbox">
                                <div className="imgicon" data-aos="zoom-out" data-aos-delay="200">
                                    <img src={image.abticon4} alt="" data-aos="zoom-in" data-aos-delay="300"/>
                                </div>
                                <h4>Sustainable Growth</h4>
                                <p>Long-term impact, not temporary wins.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12 d-flex align-items-center">
                            <div className="iconbox">
                                <div className="imgicon" data-aos="zoom-out" data-aos-delay="200">
                                    <img src={image.abticon3} alt="" data-aos="zoom-in" data-aos-delay="300"/>
                                </div>
                                <h4>Technology Forward</h4>
                                <p>Integrated tech solutions that future-proof businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container ct-2">
                    <div className="row">
                        <div className="col-12">
                            <h1 data-aos="fade-down" data-aos-delay="400">Ready to Lead the Future
                            of Hospitality?</h1>
                            <p>At HIS Business Solutions, we don’t just talk about better businesses — <b>we build them with you.</b><br/> If you're ready to unlock your next stage of growth, we’re ready to lead the way.</p>
                            <h4>Discover how we can partner in your success. Contact us today.</h4>
                            <button className="btnprimary" data-aos="fade-up" data-aos-delay="600">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>                
                <img src={image.cncellipse} alt="" className="cnc-ellipse"/>
            </section>
        </>
    )
}

export default EdgeSection