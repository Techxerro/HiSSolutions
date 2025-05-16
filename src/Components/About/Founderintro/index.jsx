import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const FounderIntro = () => {
    return(
        <>
            <section className="FounderIntro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title">
                            <h1  data-aos="fade-down" data-aos-delay="200">Our Story</h1>
                            <h1 data-aos="fade-up" data-aos-delay="500">From Strategy to Substance</h1>                            
                        </div>
                        <div className="col-sm-4 col-12">
                            <img src={image.abtfounderimg} alt="HiS founder" data-aos="zoom-in" data-aos-delay="700"/>
                        </div>
                        <div className="col-sm-8 col-12 d-flex align-items-end">
                            <div className="foundercontent" data-aos="fade-left" data-aos-delay="1000">
                                <p>Founded by Stephen O’Connor, HIS Business Solutions reflects decades of frontline leadership in restaurant and hospitality 
                                    growth across North America, Europe, the Middle East, and Asia.</p>
                                <p>Through every turnaround, expansion, and transformation project, one truth stood clear:<b>Business success demands clarity, 
                                    resilience, and execution.</b></p>
                                <p>Today, HIS Business Solutions serves companies ready to lead — not just compete — in a new era of hospitality excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FounderIntro;