import React from "react";
import './style.scss'

const CallToAction = (props)=>{
    return(
        <>
            <section className="CTA-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 style={{fontSize:'90px'}} data-aos="fade-down" data-aos-anchor-placement="top-center">{props.head}</h1>
                            <br/>
                            <div data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
                            {props.midcontent}                            
                            </div>
                            <div className="d-flex gap-4 justify-content-center" data-aos="fade-up">
                                <button className="btnprimary">{props.primarybtn}</button>
                                {props.secondarybtn ? <button className="btnsecondary">{props.secondarybtn}</button> : ''}
                            </div>    
                            <img src={props.img} alt="" className={props.imgclassname}/>                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;