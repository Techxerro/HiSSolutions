import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const CSIntro = () =>{
    return(
        <>
            <section className="cs-intro-section">
                <div className="container IS-1">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                <h1 data-aos="fade-down" data-aos-delay='400'>Global Leadership Experience <br/>That Powers Our Solutions</h1>
                                
                                <p>Before founding HIS Business Solutions, Stephen O’Connor led international operations and strategic transformations at some of the world’s most recognizable hospitality brands.</p>
                                <p>Today, HIS Business Solutions draws on this executive experience to deliver practical, results-driven strategies to clients worldwide.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <img src={image.abtbgellipse} alt="" className="ellipse" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="co-cs-box">
                                <div className="co-cs-box-inner">
                                    <div className="imgcover d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                                        <img src={image.logo2} alt="" className="ifirstimg" />
                                        <img src={image.whitelogo2} alt="" className="isecimg"/>
                                    </div>
                                    <h5>M.H. Alshaya – Building a Multi-Brand Powerhouse</h5>
                                    <p>As a founding executive of M.H. Alshaya’s Food & Beverage division, Stephen...</p>
                                    <button className="btnprimary"><a href="/case-studies/Alshaya-Group"
                                    //  target="_blank"
                                     >Read More</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="co-cs-box">
                                <div className="co-cs-box-inner">
                                    <div className="imgcover d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                                        <img src={image.logo4} alt="" className="ifirstimg" />
                                        <img src={image.whitelogo4} alt="" className="isecimg"/>
                                    </div>
                                    <h5>Sbarro – Global Expansion During Turnaround</h5>
                                    <p>Joining Sbarro at a pivotal moment, Stephen was a key architect of the...</p>
                                    <button className="btnprimary"><a href="/case-studies/Sbarro"
                                    //  target="_blank"
                                     >Read More</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="co-cs-box">
                                <div className="co-cs-box-inner">
                                    <div className="imgcover d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                                        <img src={image.logo3} alt="" className="ifirstimg" />
                                        <img src={image.whitelogo3} alt="" className="isecimg"/>
                                    </div>
                                    <h5>TGI Fridays – From the Line to Global Leadership</h5>
                                    <p>Stephen’s hospitality journey began at TGI Fridays, where he...</p>
                                    <button className="btnprimary"><a href="/case-studies/TGI-Friday"
                                    //  target="_blank"
                                     >Read More</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-lg-4 col-12">
                            <div className="co-cs-box">
                                <div className="co-cs-box-inner">
                                    <div className="imgcover d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                                        <img src={image.logo1} alt="" className="ifirstimg" />
                                        <img src={image.whitelogo1} alt="" className="isecimg"/>
                                    </div>
                                    <h5>Johnny Rockets – Global Turnaround Amid Crisis</h5>
                                    <p>At Johnny Rockets — a global restaurant brand with over 200 locations...</p>
                                    <button className="btnprimary">
                                        <a href="/case-studies/Jhonny-Rocket"
                                        //  target="_blank"
                                        >
                                            Read More
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>
        </>
    )
}
export default CSIntro;