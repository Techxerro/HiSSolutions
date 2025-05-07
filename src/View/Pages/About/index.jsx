import React from "react";
import Introduction from "../../../Components/Blogs/About/Introduction";
import WhoWeAreSection from "../../../Components/Blogs/About/WWASection";
import Motivesection from "../../../Components/Blogs/About/MotiveSection";
import FounderIntro from "../../../Components/Blogs/About/Founderintro";

const About = () =>{
    return(
        <>
        <Introduction/>
        <WhoWeAreSection/>
        <Motivesection/>
        <FounderIntro/>
        </>
    )
}

export default About;