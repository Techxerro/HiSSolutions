import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../..//Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const BrandnConceptPlanning = ()=>{

    const challenge = [
        { id: '1', text: 'Confusing or generic brand messaging' },
        { id: '2', text: 'Lack of emotional or value-driven connection with the audience' },
        { id: '3', text: 'Visually inconsistent brand systems' },
        { id: '4', text: 'Business models that don’t align with consumer demand or trends' },
        { id: '5', text: 'No clear differentiation from the competition' }
    ]

    const sliderservice= [
        {   id: '1', 
            slidertitle:'Brand Discovery & Positioning',
            slidetitlesubhead:'We start by uncovering what makes your business unique.',
            sliderpoint:[  
                { sliderid: '1', text: 'Competitive landscape analysis'}, 
                { sliderid: '2', text: 'Core values and mission articulation' },
                { sliderid: '3', text: 'Target audience persona development' },
                { sliderid: '4', text: 'Brand personality and tone definition' },
                { sliderid: '5', text: 'Strategic positioning framework' }        
            ],
            deliverable:'Foundational Brand Strategy Report.',
        }, 
        {   id: '2', 
            slidertitle:'Brand Identity Design',
            slidetitlesubhead:' Translate strategy into powerful visuals and voice.',
            sliderpoint:[  
                { sliderid: '1', text: 'Logo and identity system design'}, 
                { sliderid: '2', text: 'Brand color palette and typography selection' },
                { sliderid: '3', text: 'Visual brand guidelines' },
                { sliderid: '4', text: 'Messaging playbook (taglines, tone of voice, elevator pitch)' },
                { sliderid: '5', text: 'Brand story development' }        
            ],
            deliverable:'Full Brand Identity Toolkit.',
        }, 
        {   id: '3', 
            slidertitle:'Concept Development & Testing',
            slidetitlesubhead:'Develop and validate your core business concept.',
            sliderpoint:[  
                { sliderid: '1', text: 'Business model canvas creation'}, 
                { sliderid: '2', text: 'Concept differentiation mapping' },
                { sliderid: '3', text: 'Audience validation and feedback loops' },
                { sliderid: '4', text: 'Concept stress testing and refinement' },
                { sliderid: '5', text: 'Value proposition articulation' }        
            ],
            deliverable:'Validated Concept Strategy Deck.',
        }, 
        {   id: '4', 
            slidertitle:'Go-to-Market Narrative & Assets',
            slidetitlesubhead:'Prepare your brand for a confident market debut.',
            sliderpoint:[  
                { sliderid: '1', text: 'Launch messaging framework'}, 
                { sliderid: '2', text: 'Key communication pillars' },
                { sliderid: '3', text: 'Sales pitch and investor deck alignment ' },
                { sliderid: '4', text: 'Initial campaign concepts' },
                { sliderid: '5', text: 'Website and collateral alignment' }        
            ],
            deliverable:'Go-to-Market Messaging Package.',
        }, 
    ]

    return(
        <>
            <IntrosectionFranchise 
                headone="Build a Brand That Resonates." 
                headtwo="Design a Concept That Lasts."
                description="At HIS Business Solutions, brand and concept development is more than just logos and taglines — it's about crafting an identity that connects, converts, and endures. We work with startups, scaling businesses, and legacy brands to define their positioning, create meaningful differentiation, and build concepts with lasting market relevance"
            />
            <ChallengeSection 
                head="Why Good Ideas Fail Without a Strong Brand Foundation"
                subhead=" Inconsistent branding and unclear positioning are silent killers of business momentum:"
                challenge={challenge} 
                Footer="At HIS Business Solutions, we help you build brand clarity, strategic consistency, and a market-ready concept from the ground up."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Your brand is your promise — and every touchpoint should deliver on it."
                philosophypara="We believe that a strong concept comes from aligning internal vision with external relevance. We help you create a brand that is not only beautiful, but also rooted in business logic, audience insights, and cultural context."
                slidetitle="Our Brand & Concept Development Services"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Our Brand & Concept Solutions"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default BrandnConceptPlanning;