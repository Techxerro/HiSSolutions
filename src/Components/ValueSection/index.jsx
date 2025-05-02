import React from "react";
import { image } from "../../Assets/img";
import './style.scss';

const Valuesection=()=>{
    return(
        <>
            <div className="valuesection">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <h1 data-aos="fade-up" data-aos-delay="200">Our Values Proposition</h1>
                        </div>

                        <div className="col-sm-4 col-12">
                            <div className="iconbox" >
                                <img src={image.icon1} alt="" />
                                <h3>Strategic Clarity</h3>
                                <p>Know what to do, when, and why.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 col-12">
                            <div className="iconbox"  >
                                <img src={image.icon2} alt="" />
                                <h3>Structured Growth</h3>
                                <p>Build operations that scale.</p>
                            </div>
                        </div>

                        <div className="col-sm-4 col-12">
                            <div className="iconbox"  >
                                <img src={image.icon3} alt="" />
                                <h3>Global Readiness</h3>
                                <p>Cross-border playbooks that work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
}
export default Valuesection;
