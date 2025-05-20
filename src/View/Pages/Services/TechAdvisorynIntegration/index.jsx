import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../../Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const TechAdvisorynIntegration = ()=>{

    const challenge = [
        { id: '1', text: 'Misaligned technology choices with business goals' },
        { id: '2', text: 'Complex, siloed systems hindering collaboration' },
        { id: '3', text: 'Poor user adoption due to inadequate training' },
        { id: '4', text: 'Security vulnerabilities and compliance risks' },
    ]

    const sliderservice = [
        {
            id: '1',
            slidertitle: 'Technology Strategy & Roadmap',
            slidetitlesubhead: 'Define clear tech priorities aligned with your goals.',
            sliderpoint: [
                { sliderid: '1', text: 'IT infrastructure assessment' },
                { sliderid: '2', text: 'Future-state technology planning' },
                { sliderid: '3', text: 'Budgeting and vendor evaluation' }
            ],
            deliverable: 'Customized Tech Strategy & Roadmap',
        },
        {
            id: '2',
            slidertitle: 'Systems Integration & Optimization',
            slidetitlesubhead: 'Streamline workflows by connecting disparate systems.',
            sliderpoint: [
                { sliderid: '1', text: 'API integrations and automation' },
                { sliderid: '2', text: 'Platform consolidation' },
                { sliderid: '3', text: 'Performance tuning' }
            ],
            deliverable: 'Integration Plan & Execution Support',
        },
        {
            id: '3',
            slidertitle: 'Cybersecurity & Compliance',
            slidetitlesubhead: 'Protect your data and maintain regulatory compliance.',
            sliderpoint: [
                { sliderid: '1', text: 'Security audits and risk assessments' },
                { sliderid: '2', text: 'Policy development and training' },
                { sliderid: '3', text: 'Incident response planning' }
            ],
            deliverable: 'Cybersecurity Framework & Compliance Checklist',
        },
        {
            id: '4',
            slidertitle: 'User Training & Change Management',
            slidetitlesubhead: 'Ensure smooth adoption of new tools.',
            sliderpoint: [
                { sliderid: '1', text: 'Customized training programs' },
                { sliderid: '2', text: 'Change communication plans' },
                { sliderid: '3', text: 'Support and feedback mechanisms' }
            ],
            deliverable: 'Training Materials & Change Management Plan',
        },
        {
            id: '5',
            slidertitle: 'Vendor Selection & Management',
            slidetitlesubhead: 'Make informed decisions on technology partners.',
            sliderpoint: [
                { sliderid: '1', text: 'Market research and RFP management' },
                { sliderid: '2', text: 'Contract negotiation and SLA review' },
                { sliderid: '3', text: 'Ongoing vendor performance oversight' }
            ],
            deliverable: 'Vendor Evaluation Report & Management Plan',
        }
    ];

    return(
        <>
            <IntrosectionFranchise 
                // headone="" 
                headtwo="Innovate. Integrate. Elevate."
                description="Technology drives modern business success, but without the right strategy and integration, it can create more challenges than solutions.
                            At HIS Business Solutions, we guide organizations through smart technology adoption and seamless integration to unlock efficiency, agility, and growth."
            />
            <ChallengeSection 
                head="Why Tech Initiatives Often Fall Short"
                subhead="Common issues include:"
                challenge={challenge} 
                Footer="We help you navigate these pitfalls by aligning tech strategy with your operational needs and scaling capabilities."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Technology should empower people, not overwhelm them. The best solutions are simple, scalable, and strategically aligned."
                philosophypara="We believe in pragmatic tech advisory that accelerates digital transformation with minimal disruption."
                slidetitle="Our Tech Advisory & Integration Solutions"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Tech Advisory Solutions"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default TechAdvisorynIntegration;