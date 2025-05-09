import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const Introduction = () => {
    return (
        <section className="intro-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-12">
                        <h1>Turning Possibilities Into Performance</h1>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12">
                        <p>
                            At HIS Business Solutions, we don't just consult — we build pathways to lasting growth. <br />
                            In a world where restaurant and hospitality businesses face ever-changing challenges, we deliver
                            strategic clarity, operational excellence, and sustainable results.
                        </p>
                    </div>
                </div>

                <img src={image.abtbgellipse} alt="Background Ellipse Design" className="ellipsebg" />

                <div className="row">
                    <div className="col-12 c-text">
                        <h4>Our DNA is simple</h4>
                        <h2>Strategize<span>.</span> Organize<span>.</span> Globalize<span>.</span></h2>
                        <p>
                            We embed proven frameworks that move businesses from surviving to scaling, tailored<br />
                            to your unique vision, markets, and opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
