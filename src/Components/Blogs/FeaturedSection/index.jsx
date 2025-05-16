import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const FeaturedSection =() =>{
    return(
        <>
            <section className="featured-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 data-aos="fade-down" data-aos-anchor-placement="top-center">Featured Books</h1>
                            <h4 data-aos="fade-down"  data-aos-anchor-placement="top-center">Our thought leadership isn’t limited to articles.</h4>
                            <br/>
                            <p data-aos="fade-up"  data-aos-anchor-placement="top-center">
                            We are hands-on business builders, not theorists. With real-world leadership experience across global markets and major 
                            international brands, our team brings uncommon insight and actionability to every client engagement.
                            </p>

                            <p data-aos="fade-up" data-aos-anchor-placement="top-center">
                            We partner with restaurant groups, investors, startups, and established brands ready to rethink, realign, and reignite their 
                            businesses for a competitive edge.
                            </p>
                        </div>
                    </div>
                    <div className="row productbox-outer-wrapper">
                        <div className="col-md-6 col-12">
                            <div className="row productbox">
                                <div className="col-4">
                                    <img src={image.book} alt="" />
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <div className="productbox-wrapper">
                                        <h5>No More Band-Aids: Building Systems for Lasting Success</h5>
                                        <h6>By Stephen O'Connor</h6>
                                        <p>A call to rethink quick fixes and build sustainable business frameworks that withstand real-world challenges.</p>
                                        <button className="btnprimary">
                                            Comming Soon - Stay Tuned!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row productbox">
                                <div className="col-4">
                                    <img src={image.book} alt="" />
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <div className="productbox-wrapper">
                                        <h5>The Sage Commander’s Guide to Modern Leadership</h5>
                                        <h6>By Stephen O'Connor</h6>
                                        <p>Timeless wisdom for today’s leaders navigating complexity, change, and cultural shifts.</p>
                                        <button className="btnprimary">
                                            Comming Soon - Stay Tuned!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="col-12 ft-fs pt-5 d-flex gap-5 align-items-center justify-content-center">
                            <h4 data-aos="fade-right" data-aos-anchor-placement="top-center"> Pre-Order or Learn More</h4> 
                            <button className="btnprimary"data-aos="fade-left" data-aos-anchor-placement="top-center"> Like on this link to Pre-Order or Learn More </button>
                        </div>                     
                    </div>
                </div>
            </section>
        </>
    )
}
export default FeaturedSection;
