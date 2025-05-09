import React from "react";
import './style.scss';

const BlogCTASection =()=>{
    return(
        <>
            <section className="Blog-CTA-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 align-center">                            
                            <h1>Ready to turn thought into action <br/>for your business?</h1>

                            <h5>Let’s start a conversation.</h5>

                            <div className="btn-wrapper d-flex gap-4 align-items-center justify-content-center">
                                <button className="btnprimary">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCTASection;