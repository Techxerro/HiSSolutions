import React from "react";
import './style.scss';

const AdditionalInsights = () =>{
    return(
        <>
            <section className="Additional-Insight-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <h1>Additional Insights for <br/>Strategic Growth</h1>
                            <h4>Looking for deeper insights into sustainable business growth and leadership?</h4>
                            <p>
                            Explore Stephen O’Connor’s books — <b>"No More Band-Aids</b>" and "<b>The Sage Commander’s Guide to Modern <br/>Leadership</b>" — where real-world challenges meet strategic thinking.
                            </p>

                            <div className="d-flex gap-4 justify-content-center">
                                <h3><b>Learn more about our books</b></h3>
                                <button className="btnprimary">Like on this link to Pre-Order or Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdditionalInsights;