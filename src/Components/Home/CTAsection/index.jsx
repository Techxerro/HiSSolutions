import React from "react";
import './style.scss';

const CTASection =()=>{
    return(
        <>
            <section className="CTA-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 align-center">                            
                            <h1>Let’s create lasting<br/>
                            results—together.</h1>

                            <p>Big brand or small team, your ambition deserves more than<br/> advice.  Let’s architect what’s next.</p>

                            <div className="btn-wrapper d-flex gap-4 align-items-center justify-content-center">
                                <button className="btnprimary">Book Your Discovery Call</button>
                                <button className="btnsecondary" style={{border:'2px solid #ff4c00', color:'#ff4c00'}}>Download Our Capabilities Deck</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection;