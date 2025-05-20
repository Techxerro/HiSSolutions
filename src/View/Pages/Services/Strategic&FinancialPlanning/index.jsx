import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../..//Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const StrategicnFinancialPlanning = ()=>{

    const challenge = [
        { id: '1', text: 'Misaligned priorities and unfocused operations' },
        { id: '2', text: 'Underestimated financial requirements or overleveraging' },
        { id: '3', text: 'Unclear performance metrics or ROI benchmarks' },
        { id: '4', text: 'Missed market opportunities due to poor forecasting' },
        { id: '5', text: 'Lack of financial resilience in volatile markets' }
    ]

    const sliderservice= [
        {   id: '1', 
            slidertitle:'Business Strategy Development',
            slidetitlesubhead:"Define where you're going and how you'll get there.",
            sliderpoint:[  
                { sliderid: '1', text: 'Vision and mission alignment'}, 
                { sliderid: '2', text: 'Long-term goal and milestone mapping' },
                { sliderid: '3', text: 'SWOT and market opportunity analysis' },
                { sliderid: '4', text: 'Core capabilities and resource planning' },
                { sliderid: '5', text: 'KPI and success metrics definition' }        
            ],
            deliverable:'Strategic Business Plan Document',
        }, 
        {   id: '2', 
            slidertitle:'Financial Planning & Forecasting',
            slidetitlesubhead:'Bring your numbers in line with your ambitions.',
            sliderpoint:[  
                { sliderid: '1', text: 'Detailed financial modeling and projections'}, 
                { sliderid: '2', text: 'Budgeting systems and cost control' },
                { sliderid: '3', text: 'Capital allocation and resource optimization' },
                { sliderid: '4', text: 'Scenario planning and risk mitigation' },
                { sliderid: '5', text: 'Break-even and ROI analysis' }        
            ],
            deliverable:'Comprehensive Financial Forecast & Budget Plan',
        }, 
        {   id: '3', 
            slidertitle:'Investor & Board-Ready Packages',
            slidetitlesubhead:'Communicate your value with clarity and confidence.',
            sliderpoint:[  
                { sliderid: '1', text: 'Executive summaries and pitch decks'}, 
                { sliderid: '2', text: 'Financial summaries and funding forecasts' },
                { sliderid: '3', text: 'Use-of-funds planning' },
                { sliderid: '4', text: 'Investment readiness assessments' },
                { sliderid: '5', text: 'Board presentation frameworks' }        
            ],
            deliverable:'Investor-Ready Presentation Toolkit',
        }, 
        {   id: '4', 
            slidertitle:'Operational Planning & Alignment',
            slidetitlesubhead:'Turn plans into action.',
            sliderpoint:[  
                { sliderid: '1', text: 'Translating strategy into quarterly/annual operating plans'}, 
                { sliderid: '2', text: 'Cross-functional alignment workshops' },
                { sliderid: '3', text: 'Dashboard setup for financial and strategic tracking' },
                { sliderid: '4', text: 'Meeting cadence and review systems' },  
            ],
            deliverable:'Operational Execution Plan',
        }, 
    ]

    return(
        <>
            <IntrosectionFranchise 
                headone="Plan Smarter. Invest " 
                headtwo="Wisely. Grow Sustainably."
                description="At HIS Business Solutions, strategic and financial planning isn’t just about projections — it’s about creating a business roadmap rooted in insight, agility, and sustainable growth. We work with entrepreneurs, growth-stage companies, and legacy brands to align their goals with actionable financial strategies."
            />
            <ChallengeSection 
                head="Why Businesses Struggle Without Strategic Clarity"
                subhead="A strong vision without a concrete plan often leads to:"
                challenge={challenge} 
                Footer="At HIS Business Solutions, we help turn long-term vision into measurable, financially viable milestones"
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
                secondarybtn="Explore Strategic & Financial Solutions"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default StrategicnFinancialPlanning;