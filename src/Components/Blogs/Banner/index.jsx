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
                            <br/>
                            <h1 data-aos="fade" data-aos-delay="400">Where Thought Meets Action</h1>
                            <p data-aos="fade" data-aos-delay="800">At HIS Business Solutions, we don’t just consult — we think deeply about the forces shaping today's<br/> businesses and tomorrow's leaders.<br/>Our 
                            Insights page is your place to explore ideas that spark change, challenge norms, and inspire real growth — <br/>both personally and professionally.</p>
                            <p data-aos="fade" data-aos-delay="800">We invite you to dive into our latest reflections on leadership, operational wisdom, <br/>ethics, and modern business dynamics.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogBanner;