import React from "react";
import CSIntro from "./CSIntro";
import CallToAction from "../../Utils/CTA";
import { image } from "../../Assets/img";
import Companydetails from "./CompanyDetails";


const CaseStudiesComponents = () =>{
    return(
        <>
            <CSIntro/>  
            <Companydetails/>  
            <CallToAction
                head="Let's Build Your Next Success Story"
                primarybtn="Schedule a Consultation"
                secondary="Explore Our Services"                
                img={image.cncellipse}
                imgclassname="right-ellipse-bg"
            />   
        </>
    )
}

export default CaseStudiesComponents;