import React from "react";
import './style.scss'

const CallToAction = (props)=>{
    return(
        <>
            <section className="CTA-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 style={{fontSize:'90px'}}>{props.head}</h1>
                            <br/> 
                            {props.midcontent}
                            <div className="d-flex gap-4 justify-content-center">
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