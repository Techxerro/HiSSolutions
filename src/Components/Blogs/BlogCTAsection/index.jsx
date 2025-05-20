import React from "react";
import CallToAction from "../../../Utils/CTA";
import { image } from "../../../Assets/img";

const BlogCTASection =()=>{
    return(
        <>
            <CallToAction
                head={ <>Ready to turn thought into action <br/>for your business?</>} 
                primarybtn= "Contact Us"
                primarybtnlink="/contact"
                secondarybtn=""
                img={image.cncellipse}
                imgclassname="right-ellipse-bg"
                midcontent ={ 
                    <>    
                        <h5>Let’s start a conversation.</h5>
                        <br />  
                    </>
                }
            />
        </>
    )
}

export default BlogCTASection;