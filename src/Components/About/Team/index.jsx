import React from "react";
import "./style.scss";
import { image } from "../../../Assets/img";

const Team = ()=>{
    return(
        <>
            <section className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 title text-center">
                            <h1  data-aos="fade-down" data-aos-delay="200"><span>HIS</span> Leadership Team </h1>              
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-xl-4 col-lg-4 col-12">
                            <img src={image.team1} alt="HiS founder" data-aos="zoom-in" data-aos-delay="400"/>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-12 d-flex align-items-end">
                            <div className="foundercontent" data-aos="fade-left" data-aos-delay="600">
                                <h5>Peter Baics</h5>
                                <p><b>VP, Brand Operations – Fine Dining &amp; Experiential Concepts</b></p>
                                <p>Strategic hospitality leader with global expertise in luxury and high-end dining operations</p>
                                <p>
                                    Peter Baics is a seasoned F&B operations executive with over two decades of international
                                    experience spanning Europe, the Middle East, Southeast Asia, the Caribbean, and the luxury
                                    cruise industry. His leadership spans an array of premium hospitality environments,
                                    including private members clubs, elite restaurant groups, five-star hotels, and award-
                                    winning dining venues.
                                </p>
                                <p>
                                    Throughout his career, Peter has been instrumental in developing and elevating restaurant
                                    and F&B concepts ranging from fine dining, cocktail bars, and cigar lounges to steak houses
                                    and specialty venues. His operations have consistently achieved and sustained top-tier
                                    industry recognition, including Michelin distinctions, AAA Five Diamond ratings, and Forbes
                                    Five-Star accolades.
                                </p>
                                <p>
                                    Recognized for his strategic acumen and results-driven leadership, Peter has successfully
                                    led multi-regional teams, improved profitability, and enhanced operational standards
                                    across diverse business units. His core strengths include strategic planning, KPI
                                    development, workflow optimization, cost containment, and team building—all executed
                                    with a sharp focus on guest experience and brand differentiation.

                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <p data-aos="fade-left" data-aos-delay="500">
                                Peter brings a dynamic, entrepreneurial mindset to every engagement. He is passionate about creating memorable guest experiences,
                                fostering a positive workplace culture, and delivering measurable results through innovation and collaboration. His ability to 
                                launch new concepts, reposition brands, and exceed client expectations makes him a valued asset to any hospitality venture.  
                            </p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-4 col-12">
                            <img src={image.team2} alt="HiS founder" data-aos="zoom-in" data-aos-delay="400"/>
                        </div>
                        <div className="col-lg-8 col-12 d-flex align-items-end">
                            <div className="foundercontent" data-aos="fade-left" data-aos-delay="600">
                                <h5>Sudesh Singh</h5>
                                <p><b>VP, Brand Operations – QSR, Fast Casual &amp; Casual Dining</b></p>
                                <p>Strategic operations leader in scalable restaurant growth, multi-unit management, and turnaround success</p>
                                <p>
                                    Sudesh Singh is a transformational F&amp;B executive with over 20 years of cross-market
                                    leadership experience across the Middle East and India, specializing in QSR, fast casual, and
                                    casual dining formats. His expertise lies in launching, scaling, and revitalizing high-volume,
                                    guest-centric restaurant brands through strategic innovation and disciplined operational
                                    execution.
                                </p>
                                <p>
                                    With a strong foundation in managing complex multi-unit operations, Sudesh has led over
                                    100 successful store openings, turned around multimillion-dollar business units, and
                                    introduced new revenue streams such as delivery platforms and dark kitchens. He is
                                    recognized for his ability to build empowered, high-performing teams, drive sustainable
                                    topline growth, and implement centralized systems that enhance efficiency, profitability,
                                    and brand consistency.
                                </p>
                                <p>
                                    A commercially minded and hands-on leader, Sudesh excels at aligning operational
                                    execution with strategic business goals. His initiatives have generated substantial cost
                                    savings through supply chain optimization, process engineering, and market-focused
                                    adaptation. His leadership philosophy combines data-driven strategy, innovation, and a
                                    commitment to excellence in customer experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <p data-aos="fade-left" data-aos-delay="500">
                                Peter brings a dynamic, entrepreneurial mindset to every engagement. He is passionate about creating memorable guest experiences,
                                fostering a positive workplace culture, and delivering measurable results through innovation and collaboration. His ability to 
                                launch new concepts, reposition brands, and exceed client expectations makes him a valued asset to any hospitality venture.  
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Team;