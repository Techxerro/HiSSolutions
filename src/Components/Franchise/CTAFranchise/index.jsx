import React from "react";
import { image } from "../../../Assets/img";
import CallToAction from "../../../Utils/CTA";

const CTAFranchise = () =>{
    return(
        <>
            <CallToAction 
                head={ <>Ready to Build a Franchise Legacy <br/>— Not Just a Brand?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Our Full Franchise Solutions"
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"
            />
        </>
    )
}

export default CTAFranchise;