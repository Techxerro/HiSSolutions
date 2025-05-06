import React from "react";
import './style.scss';

const BlogBanner=()=>{
    return(
        <>
        <div className="blogbanner-section">        
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content-hero">
                            <h4 style={{color:'#ff4c00'}}>Featured</h4>
                            <h1 data-aos="fade" data-aos-delay="400">Breaking into Hospitality Business
                            advice from untitled founder, Frank Mule</h1>
                            <p data-aos="fade" data-aos-delay="800">From startups to global brands, we help hospitality businesses unlock profitability, scale<br/> with
                            clarity, and build structures that stand the test of time.</p>
                            <button className="btnprimary" data-aos="fade-up" data-aos-delay="800">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogBanner;