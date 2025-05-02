import React from "react";
import './style.scss';
import { image } from "../../Assets/img";

const FounderSection=()=>{
    return(
        <>
            <section className="founder-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Our Founder –<br/>
                            A Legacy of Results
                            </h1>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src={image.founderimg} alt="" className="founderimg"/>
                        </div>  
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12 founder-content-wrapper">
                            <div>

                                <p>Stephen O’Connor, the driving force behind HIS, brings over three decades of global executive leadership to every engagement. He has led transformations for brands across the Middle East, Europe, Asia, and North America—taking ventures from vision to velocity.</p>

                                <div className="d-flex achievements">
                                    <div>30+ Years of Operational<br/> Leadership</div>
                                    <div className="vl"></div>
                                    <div>Brands like Johnny Rockets,<br/> Sbarro, MH Alshaya</div>
                                </div>
                                
                                <div className="d-flex achievements">
                                    <div>Expertise across 80+ <br/>international markets</div>
                                    <div className="vl"></div>
                                    <div>Recognized speaker, coach, <br/>and trusted industry advisor</div>
                                </div>

                                <div className="d-flex end-note">
                                    <h4>Why It Matters</h4>
                                    <p>You’re not just hiring a firm—<br/>you’re gaining a partner with skin in the game.</p>
                                </div>                            
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FounderSection;