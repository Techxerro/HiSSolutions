import React from "react";
import IntrosectionFranchise from "./IntroSection";
import ChallengeSection from "./ChallengeSection";
import Philosophy from "./Philosophy";
import FaqAccordion from "./FaqAccordion";
import TestimonySection from "../Home/Testimonialsection";
import AdditionalInsights from "./AdditionalInsights";
import CallToAction from "../../Utils/CTA/index";
import { image } from "../../Assets/img";

const FranchisePageSections = ()=>{

    const challenge = [
        { id: '1', text: 'Confusing or generic brand messaging' },
        { id: '2', text: 'Lack of emotional or value-driven connection with the audience' },
        { id: '3', text: 'Visually inconsistent brand systems' },
        { id: '4', text: 'Business models that don’t align with consumer demand or trends' },
        { id: '5', text: 'No clear differentiation from the competition' }
    ]

    const sliderservice= [
        {   id: '1', 
            slidertitle: 'Brand Discovery & Positioning',
            slidetitlesubhead: 'We start by uncovering what makes your business unique.',
            sliderpoint:[  
                { sliderid: '1', text: 'Competitive landscape analysis'}, 
                { sliderid: '2', text: 'Core values and mission articulation' },
                { sliderid: '3', text: 'Target audience persona development' },
                { sliderid: '4', text: 'Brand personality and tone definition' },
                { sliderid: '5', text: 'Strategic positioning framework' }        
            ],
            deliverable: 'Foundational Brand Strategy Report.',
        }, 
        {   id: '2', 
            slidertitle: 'Brand Discovery & Positioning',
            slidetitlesubhead: 'We start by uncovering what makes your business unique.',
            sliderpoint:[  
                { sliderid: '1', text: 'A Competitive landscape analysis'}, 
                { sliderid: '2', text: 'Core values and mission articulation' },
                { sliderid: '3', text: 'Target audience persona development' },
                { sliderid: '4', text: 'Brand personality and tone definition' },
                { sliderid: '5', text: 'Strategic positioning framework' }        
            ],
            deliverable: 'Foundational Brand Strategy Report.',
        },
    ]

    return( 
        <>
            <IntrosectionFranchise 
                headone="Build a Brand That Resonates." 
                headtwo="Design a Concept That Lasts."
                description="At HIS Business Solutions, brand and concept development is more than just logos and taglines — it's about crafting an identity that 
                connects, converts, and endures. We work with startups, scaling businesses, and legacy brands to define their positioning, create meaningful 
                differentiation, and build concepts with lasting market relevance."
            />
            <ChallengeSection 
                head="Why Good Ideas Fail Without a Strong Brand Foundation"
                subhead="Inconsistent branding and unclear positioning are silent killers of business momentum:"
                challenge={challenge}
                Footer="At HIS Business Solutions, we help you build brand clarity, strategic consistency, and a market-ready concept from the ground up."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Your brand is your promise — and every touchpoint should deliver on it."
                philosophypara="We believe that a strong concept comes from aligning internal vision with external relevance. We help you create a brand that is not only beautiful, but also rooted in business logic, audience insights, and cultural context."
                slidetitle="Our Brand & Concept Development Services"
                slidetitlehead="Brand Discovery & Positioning"
                slidetitlesubhead="We start by uncovering what makes your business unique."
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                primarybtnlink=""
                secondarybtn="Explore Our Full Franchise Solutions"  
                secondarybtnlink=""        
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default FranchisePageSections;