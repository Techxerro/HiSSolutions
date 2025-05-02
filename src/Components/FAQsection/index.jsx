import React from "react";
import './style.scss';

const FAQSection =()=>{
    return(
        <>
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Frequently Asked Questions (FAQ)</h1>
                        </div>

                        <div className="qna-wrapper d-flex">

                            <div>
                                <div className="qna">
                                    <h5>Do you only work with large restaurant groups?</h5>
                                    <p>No. We proudly work with both large-scale brands and small independents. Whether you're opening your first location or managing a portfolio, our solutions are tailored to your stage and goals.</p>
                                </div>
                                <div className="qna">
                                    <h5>What’s your approach to working with startups?</h5>
                                    <p>No. We proudly work with both large-scale brands and small independents. Whether you're opening your first location or managing a portfolio, our solutions are tailored to your stage and goals.</p>
                                </div>
                                <div className="qna">
                                    <h5>What kind of ROI can we expect?</h5>
                                    <p>No. We proudly work with both large-scale brands and small independents. Whether you're opening your first location or managing a portfolio, our solutions are tailored to your stage and goals.</p>
                                </div>
                            </div>
                            
                            <div>
                                <div className="qna">
                                    <h5>How long does a typical engagement last?</h5>
                                    <p>No. We proudly work with both large-scale brands and small independents. Whether you're opening your first location or managing a portfolio, our solutions are tailored to your stage and goals.</p>
                                </div>
                                <div className="qna">
                                    <h5>What kind of technology support do you provide?</h5>
                                    <p>No. We proudly work with both large-scale brands and small independents. Whether you're opening your first location or managing a portfolio, our solutions are tailored to your stage and goals.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQSection;