import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../..//Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const StartupConsulting = ()=>{

    const challenge = [
        { id: '1', text: 'Inadequate market validation before launch' },
        { id: '2', text: 'Poor business modeling and financial planning' },
        { id: '3', text: 'Limited understanding of customer needs and acquisition strategies' },
        { id: '4', text: 'Disorganized operations and unclear roles' },
        { id: '5', text: 'Lack of strategic mentorship and experienced guidance' }
    ]

    const sliderservice= [
        {   id: '1', 
            slidertitle:'Idea Validation & Business Modeling',
            slidetitlesubhead:'Test before you invest.',
            sliderpoint:[  
                { sliderid: '1', text: 'Market research and competitor benchmarking'}, 
                { sliderid: '2', text: 'MVP (Minimum Viable Product) strategy' },
                { sliderid: '3', text: 'Customer persona development' },
                { sliderid: '4', text: 'Business model canvas and monetization strategy' },
                { sliderid: '5', text: 'Go-to-market risk assessment' }        
            ],
            deliverable:'Validated Business Model Report + MVP Launch Plan',
        }, 
        {   id: '2', 
            slidertitle:'Startup Financials & Capital Strategy',
            slidetitlesubhead:'Get your numbers right from Day 1.',
            sliderpoint:[  
                { sliderid: '1', text: 'Startup budgeting and cash flow planning'}, 
                { sliderid: '2', text: 'Funding strategy (bootstrapping, angel, VC)' },
                { sliderid: '3', text: 'Financial pitch readiness' },
                { sliderid: '4', text: 'Burn rate and runway management' },
                { sliderid: '5', text: 'Unit economics and scalability assessment' }        
            ],
            deliverable:'Startup Financial Roadmap + Funding Deck Support',
        }, 
        {   id: '3', 
            slidertitle:'Team Structuring & Operational Setup',
            slidetitlesubhead:'Build a startup that runs — not just exists',
            sliderpoint:[  
                { sliderid: '1', text: 'Founding team roles and governance'}, 
                { sliderid: '2', text: 'Core process setup and SOPs' },
                { sliderid: '3', text: 'Legal structuring and compliance' },
                { sliderid: '4', text: 'Technology stack recommendations' },
                { sliderid: '5', text: 'Early-stage hiring strategy' }        
            ],
            deliverable:'Startup Ops Blueprint + Org Framework',
        }, 
        {   id: '4', 
            slidertitle:'Growth & Customer Acquisition Strategy',
            slidetitlesubhead:'Find your market. Build your tribe.',
            sliderpoint:[  
                { sliderid: '1', text: 'Customer journey mapping'}, 
                { sliderid: '2', text: 'Early adopter outreach strategies' },
                { sliderid: '3', text: 'Lead generation and digital funnel design' },
                { sliderid: '4', text: 'Performance tracking and iteration loops' },
                { sliderid: '5', text: 'Brand messaging and positioning' }        
            ],
            deliverable:'Customer Acquisition & Growth Playbook',
        }, 
    ]

    return(
        <>
            <IntrosectionFranchise 
                headone="From Vision to Venture. " 
                headtwo="Launch with Confidence."
                description="At HIS Business Solutions, we specialize in turning bold ideas into thriving businesses. We support startups from concept 
                validation through market entry, providing tailored strategies that lay the foundation for long-term success."
            />
            <ChallengeSection 
                head="Why Most Startups Don’t Make It"
                subhead="Great ideas fail when they lack structured execution:"
                challenge={challenge} 
                Footer="We guide you through the chaos of startup life with frameworks, tools, and insight that help you launch and scale smarter."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Startups succeed when vision is backed by executional excellence."
                philosophypara="We believe in lean, smart, and resource-efficient growth. Our approach helps founders reduce risk, build traction, and get to market with clarity and speed."
                slidetitle="Our Startup Consulting Services"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Startup Consulting Solutions"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default StartupConsulting;