import React from "react";
import { image } from "../../Assets/img";
import './style.scss';


const brandsection=()=>{
    return(
        <>
            <section className="brandsection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>We Work With the Willing<span style={{color:'#ff4d00'}}>—</span><br/>
                            From Single Stores to Global Chains</h1>
                            <h3>Our impact is measured in real-world turnarounds<span style={{color:'#ff4d00'}}>—</span>
                            <br/>not just PowerPoints.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="blob-outer-wrap">
                                <div className="blob-inner-wrap">
                                    <div className="blob"></div>
                                </div>
                            </div>

                            <div className="brands d-flex align-item-center justify-content-center">
                                <img src={image.logo4} alt="" />
                                <img src={image.logo1} alt="" />
                                <img src={image.logo3} alt="" />
                                <img src={image.logo2} alt="" />
                            </div>
                            <p>We’ve helped drive growth and transformation for some of the world’s most recognizable<br/>
                            names and quietly powered up emerging independents with equal care.</p>
                            <p>From scaling Sbarro internationally to turning around underperforming brands in under 120<br/>
                            days, we treat every client’s challenge like our own.</p>
                        </div>
                    </div>
                </div>

                <div className="container cont2">
                    <div className="row">
                        <div className="col-12">
                            <h1  data-aos="fade-up" data-aos-delay="100">Real Outcomes. Real Confidence.</h1>
                        </div>
                    </div>       
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6 cont-ct">
                            <h4>Sbarro</h4>
                            <p>Expanded into <span>35+</span> new markets in <span>3 years</span></p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 cont-ct">
                            <h4>Johnny Rockets</h4>
                            <p><span>365+</span> global franchise units</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 cont-ct">
                            <h4>PE Client</h4>
                            <p>Achieved <span>40%</span> cost reduction in <span>120 days</span></p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 cont-ct">
                            <h4>New Brand Launch</h4>
                            <p>Break-even achieved in under <span>6 months</span></p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="d-flex gap-2 align-item-center justify-content-center">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                <path d="M44.3479 24H55.6522L52.8262 50H47.174L44.3479 24Z" fill="white"/>
                                <path d="M44.3479 76H55.6522L52.8262 50H47.174L44.3479 76Z" fill="white"/>
                                <path d="M76 44.3479L76 55.6522L50 52.8261L50 47.174L76 44.3479Z" fill="white"/>
                                <path d="M24 44.3479L24 55.6522L50 52.8261L50 47.174L24 44.3479Z" fill="white"/>
                                <path d="M64.3882 27.6186L72.3816 35.612L51.9984 51.9984L48.0018 48.0017L64.3882 27.6186Z" fill="white"/>
                                <path d="M27.6187 64.3883L35.612 72.3817L51.9985 51.9986L48.0018 48.0019L27.6187 64.3883Z" fill="white"/>
                                <path d="M72.3813 64.3883L64.388 72.3817L48.0015 51.9986L51.9982 48.0019L72.3813 64.3883Z" fill="white"/>
                                <path d="M35.6118 27.6186L27.6184 35.612L48.0016 51.9984L51.9982 48.0017L35.6118 27.6186Z" fill="white"/>
                                </svg>
                                <h6>We don’t offer short-term fixes—we build long-term performance.<br/> Confidence in the process, success in the outcome.</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default brandsection;