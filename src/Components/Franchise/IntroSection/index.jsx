import React from "react";
import './style.scss';

const IntrosectionFranchise = (props) =>{
    return(
        <>
            <section className="introsec-franchise">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <h1 data-aos="fade-down" data-aos-delay="400">{props.headone}</h1>
                            <h1 style={{color:'#FF4C00'}} data-aos="fade-down" data-aos-delay="400">{props.headtwo}</h1>
                            <p data-aos="fade-up" data-aos-delay="800">
                            {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntrosectionFranchise;