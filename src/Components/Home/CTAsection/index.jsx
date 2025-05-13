import React from "react";
import CallToAction from "../../../Utils/CTA";
import { image } from "../../../Assets/img";

const CTASection =()=>{
    return(
        <>
            <CallToAction
                head={ <>Let’s create lasting<br/>results—together.</>} 
                primarybtn= "Book Your Discovery Call"
                secondarybtn="Download Our Capabilities Deck"
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"
                midcontent ={ 
                    <>  
                            <p>Big brand or small team, your ambition deserves more than<br/> advice. Let’s architect what’s next.</p>
                            <br />
                    </>
                }
            
            />
        </>
    )
}

export default CTASection;