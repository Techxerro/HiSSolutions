import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const CTAFranchise = () =>{
    return(
        <>
            <section className="CTA-Franchise-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 style={{fontSize:'90px'}}>Ready to Build a Franchise Legacy <br/>— Not Just a Brand?</h1>
                            <br/>                          

                            <div className="d-flex gap-4 justify-content-center">
                                <button className="btnprimary">Schedule a Free Consultation</button>
                                <button className="btnsecondary">Explore Our Full Franchise Solutions</button>
                            </div>    
                            <img src={image.abtbgellipse} alt="" />                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTAFranchise;