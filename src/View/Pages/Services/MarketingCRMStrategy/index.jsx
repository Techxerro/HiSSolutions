import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../../Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const MarketingnCRMStrategy = ()=>{

    const challenge = [
        { id: '1', text: 'Fragmented marketing efforts lacking clear direction' },
        { id: '2', text: 'Poor customer data management and segmentation' },
        { id: '3', text: 'Inefficient lead nurturing and follow-up' },
        { id: '4', text: 'Low customer retention and engagement' },
    ]

    const sliderservice= [
            {
            id: '1',
            slidertitle: 'Marketing Strategy Development',
            slidetitlesubhead: 'Define your unique market position and plan.',
            sliderpoint: [
                { sliderid: '1', text: 'Market research and competitor analysis' },
                { sliderid: '2', text: 'Customer segmentation and targeting' },
                { sliderid: '3', text: 'Multi-channel campaign planning' }
            ],
            deliverable: 'Customized Marketing Strategy Document',
        },
        {
            id: '2',
            slidertitle: 'CRM System Selection & Implementation',
            slidetitlesubhead: 'Choose and deploy the right CRM for your business.',
            sliderpoint: [
                { sliderid: '1', text: 'Needs assessment and platform evaluation' },
                { sliderid: '2', text: 'CRM setup, customization, and integration' },
                { sliderid: '3', text: 'User training and adoption support' }
            ],
            deliverable: 'CRM Implementation Roadmap',
        },
        {
            id: '3',
            slidertitle: 'Data-Driven Campaign Management',
            slidetitlesubhead: 'Execute and optimize marketing campaigns.',
            sliderpoint: [
                { sliderid: '1', text: 'Lead generation and nurturing workflows' },
                { sliderid: '2', text: 'A/B testing and performance analytics' },
                { sliderid: '3', text: 'Conversion rate optimization' }
            ],
            deliverable: 'Campaign Performance Reports',
        },
        {
            id: '4',
            slidertitle: 'Customer Retention & Loyalty Programs',
            slidetitlesubhead: 'Build lasting customer relationships.',
            sliderpoint: [
                { sliderid: '1', text: 'Loyalty program design and rollout' },
                { sliderid: '2', text: 'Customer feedback and satisfaction tracking' },
                { sliderid: '3', text: 'Personalized communication strategies' }
            ],
            deliverable: 'Retention & Loyalty Program Blueprint',
        },
        {
            id: '5',
            slidertitle: 'Marketing Automation & Analytics',
            slidetitlesubhead: 'Maximize efficiency and insight.',
            sliderpoint: [
                { sliderid: '1', text: 'Marketing automation setup (email, social, ads)' },
                { sliderid: '2', text: 'Integration with CRM and sales tools' },
                { sliderid: '3', text: 'Real-time dashboards and ROI tracking' }
            ],
            deliverable: 'Automation & Analytics Toolkit',
        }
    ]

    return(
        <>
            <IntrosectionFranchise 
                // headone="" 
                headtwo="Connect. Convert. Cultivate."
                description="In today’s competitive landscape, effective marketing and customer relationship management (CRM) are the backbone of sustained growth.
                        We help businesses design and execute data-driven marketing strategies combined with smart CRM systems that turn prospects into loyal customers.
                        "
            />
            <ChallengeSection 
                head="Why Marketing & CRM Often Miss the Mark"
                subhead="Common hurdles include:"
                challenge={challenge} 
                Footer="At HIS Business Solutions, we align your marketing and CRM to create seamless customer journeys that drive results."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="Great strategy is a balance between bold vision and disciplined execution"
                philosophypara="We believe financial and strategic planning go hand in hand — one drives purpose, the other ensures sustainability. Our job is to bring clarity, structure, and foresight to every decision you make."
                slidetitle="Our Strategic & Financial Planning Services"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Our Marketing & CRM Strategy"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default MarketingnCRMStrategy;