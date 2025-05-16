import React from "react";
import './style.scss';

const VoiceSection = () =>{
    return(
        <>
            <section className="v-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-12">
                            <h1 data-aos="fade-down" data-aos-delay="200">Beyond Consulting:</h1>
                            <h1 data-aos="fade-up" data-aos-delay="400">The Voice of Lane Stephens</h1>
                            <br/>
                            <p>
                            Many know Stephen O’Connor professionally. Fewer knew he also wrote under the pen name Lane Stephens — a voice for deeper 
                            reflections on leadership, resilience, and operational wisdom.
                            </p>
                            <p>
                            Now, that voice comes home. <br/>Lane Stephens and Stephen O’Connor are one and the same — and both are part of HIS Business Solutions' 
                            DNA.
                            </p>
                            <p>
                            Because behind every system we build is a philosophy:<br/>
                            <b> Success isn’t just what you achieve. It’s how sustainably you achieve it.</b>
                           </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VoiceSection;