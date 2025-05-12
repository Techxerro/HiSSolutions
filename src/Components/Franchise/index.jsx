import React from "react";
import IntrosectionFranchise from "./IntroSection";
import ChallengeSection from "./ChallengeSection";
import Philosophy from "./Philosophy";
import FaqAccordion from "./FaqAccordion";
import TestimonySection from "../Home/Testimonialsection";
import AdditionalInsights from "./AdditionalInsights";
import CTAFranchise from "./CTAFranchise";

const FranchisePageSections = ()=>{
    return(
        <>
            <IntrosectionFranchise/>
            <ChallengeSection/>
            <Philosophy/>
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CTAFranchise/>
        </>
    )
}

export default FranchisePageSections;