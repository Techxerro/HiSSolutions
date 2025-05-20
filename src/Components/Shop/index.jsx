import React from "react";
import ShopIntro from "./Intro";
import Productsection from "./Products";
import WhyItMatters from "./WhyChooseUs";
import CallToAction from "../../Utils/CTA";
import { image } from "../../Assets/img";

const ShopComponents = ()=>{
    return(
        <>
            <ShopIntro/>
            <Productsection/>
            <WhyItMatters/>
            <CallToAction
                head={ <>Want to Bring These Ideas to <br/>Your Team or Event?</>} 
                midcontent={<h3 style={{padding:'10px 0 25px'}}>Interested in author talks, executive workshops, or <br/>licensing content for your organization?</h3>}
                primarybtn= "Contact HIS Business Solutions"
                primarybtnlink="/contact"
                secondarybtn="start the conversation."   
                secondarybtnlink="/"             
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"
            />
        </>
    )
}

export default ShopComponents;