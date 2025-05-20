import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../../Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const OperationalTurnaround = ()=>{

    const challenge = [
        { id: '1', text: 'Misaligned priorities and unfocused operations' },
        { id: '2', text: 'Underestimated financial requirements or overleveraging' },
        { id: '3', text: 'Unclear performance metrics or ROI benchmarks' },
        { id: '4', text: 'Missed market opportunities due to poor forecasting' },
        { id: '5', text: 'Lack of financial resilience in volatile markets' }
    ]

    const sliderservice= [
        {
            id: '1',
            slidertitle: 'Comprehensive Operational Audit',
            slidetitlesubhead: 'Identify bottlenecks and inefficiencies.',
            sliderpoint: [
                { sliderid: '1', text: 'Process mapping and analysis' },
                { sliderid: '2', text: 'Cost and resource evaluation' },
                { sliderid: '3', text: 'Performance and KPI assessment' }
            ],
            deliverable: 'Operational Audit Report + Improvement Plan',
        },
        {
            id: '2',
            slidertitle: 'Process Redesign & Automation',
            slidetitlesubhead: 'Streamline workflows for speed and accuracy.',
            sliderpoint: [
                { sliderid: '1', text: 'Workflow optimization' },
                { sliderid: '2', text: 'Technology and automation integration' },
                { sliderid: '3', text: 'Standard operating procedures (SOPs) development' }
            ],
            deliverable: 'Process Redesign Blueprint',
        },
        {
            id: '3',
            slidertitle: 'Workforce Alignment & Training',
            slidetitlesubhead: 'Engage and empower your team.',
            sliderpoint: [
                { sliderid: '1', text: 'Role clarity and capacity assessment' },
                { sliderid: '2', text: 'Leadership coaching and team development' },
                { sliderid: '3', text: 'Customized training programs' }
            ],
            deliverable: 'Workforce Alignment Strategy',
        },
        {
            id: '4',
            slidertitle: 'Performance Management Systems',
            slidetitlesubhead: 'Create accountability and transparency.',
            sliderpoint: [
                { sliderid: '1', text: 'KPI development and tracking systems' },
                { sliderid: '2', text: 'Reporting dashboards and analytics' },
                { sliderid: '3', text: 'Continuous improvement frameworks' }
            ],
            deliverable: 'Performance Management Toolkit',
        },
        {
            id: '5',
            slidertitle: 'Customer Experience Revamp',
            slidetitlesubhead: 'Rebuild loyalty through better service.',
            sliderpoint: [
                { sliderid: '1', text: 'Customer journey mapping' },
                { sliderid: '2', text: 'Feedback loop implementation' },
                { sliderid: '3', text: 'Service quality improvement plans' }
            ],
            deliverable: 'Customer Experience Strategy',
        }
    ]

    return(
        <>
            <IntrosectionFranchise 
                // headone="Plan Smarter. Invest " 
                headtwo="Revive. Realign. Rebuild."
                description="When business operations falter, the impact can ripple across every part of your organization. We specialize in helping struggling businesses identify root causes, stabilize operations, and implement strategies that restore profitability and efficiency."
            />
            <ChallengeSection 
                head="Why Operational Issues Persist"
                subhead="Common operational challenges include:"
                challenge={challenge} 
                Footer="At HIS Business Solutions, we bring clarity and structure to chaotic operations, helping businesses regain control and momentum."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Operational turnaround isn’t about patchwork fixes — it’s about systemic change that creates lasting improvements."
                philosophypara="We believe that success requires understanding the full picture, empowering teams, and building scalable processes that support growth."
                slidetitle="Our Operational Turnaround Solutions"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Opertaional Turnaround Services "                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default OperationalTurnaround;