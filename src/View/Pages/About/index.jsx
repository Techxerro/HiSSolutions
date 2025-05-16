import React from "react";
import WhoWeAreSection from "../../../Components/About/WWASection";
import Motivesection from "../../../Components/About/MotiveSection";
import FounderIntro from "../../../Components/About/Founderintro";
import VoiceSection from "../../../Components/About/VoiceSection";
import EdgeSection from "../../../Components/About/EdgeSection";
import Introduction from "../../../Components/About/Introduction";
import Team from "../../../Components/About/Team";

const About = () =>{
    return(
        <>
            <Introduction/>
            <WhoWeAreSection/>
            <Motivesection/>
            <FounderIntro/>
            <VoiceSection/>
            <Team/>
            <EdgeSection/>
        </>
    )
}

export default About;