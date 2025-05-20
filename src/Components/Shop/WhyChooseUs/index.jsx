import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const WhyItMatters=()=>{
    return(
        <>
            <section className='detail-sec-bottom'>
                <div className="container">
                    <div className="row justify-content-center text-center text-center">
                        <div className="col-lg-10 col-12">
                            <h1>Why Lane Stephens — </h1>
                            <h1>And Why It Matters</h1>
                            <h5>Lane Stephens is Stephen O’Connor.</h5>
                            <p>Lane Stephens began as a pen name — a platform for honest insights on leadership, resilience, and strategic depth. Today, that voice is fully revealed as part of the HIS Business Solutions journey.</p>
                            <p>Through these books, you’re not only gaining thought leadership — you’re learning from the lived experience of a global executive who built and scaled some of the world’s most recognized hospitality brands.</p>
                            <h5>“Two names. One mission. Real impact.”</h5>
                        </div>
                    </div>
                     <img src={image.cncellipse} alt="" />       
                </div>
            </section>
        </>
    )
}

export default WhyItMatters;
