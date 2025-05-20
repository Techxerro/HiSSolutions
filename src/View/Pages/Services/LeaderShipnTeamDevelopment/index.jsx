import React from "react";
import IntrosectionFranchise from "../../../../Components/Franchise/IntroSection";
import ChallengeSection from "../../../../Components/Franchise/ChallengeSection";
import Philosophy from "../../../../Components/Franchise/Philosophy";
import FaqAccordion from "../../../../Components/Franchise/FaqAccordion";
import TestimonySection from "../../../../Components/Home/Testimonialsection";
import AdditionalInsights from "../../../../Components/Franchise/AdditionalInsights";
import CallToAction from "../../../../Utils/CTA";
import { image } from "../../../../Assets/img";

const LeaderShipnTeamDevelopment = ()=>{

    const challenge = [
        { id: '1', text: 'Lack of clear leadership vision or alignment' },
        { id: '2', text: 'Ineffective communication and collaboration' },
        { id: '3', text: 'Underdeveloped leadership skills at key levels' },
        { id: '4', text: 'Low employee engagement and retention' },
    ]

    const sliderservice= [
        {
            id: '1',
            slidertitle: 'Leadership Assessment & Coaching',
            slidetitlesubhead: 'Identify and develop leadership potential.',
            sliderpoint: [
                { sliderid: '1', text: 'Leadership style and competency evaluation' },
                { sliderid: '2', text: 'One-on-one and group coaching sessions' },
                { sliderid: '3', text: 'Personalized development plans' }
            ],
            deliverable: 'Leadership Assessment Report + Coaching Program',
        },
        {
            id: '2',
            slidertitle: 'Team Building & Dynamics',
            slidetitlesubhead: 'Create high-functioning, collaborative teams.',
            sliderpoint: [
                { sliderid: '1', text: 'Team assessments and workshops' },
                { sliderid: '2', text: 'Conflict resolution and communication training' },
                { sliderid: '3', text: 'Role clarification and alignment exercises' }
            ],
            deliverable: 'Team Development Blueprint',
        },
        {
            id: '3',
            slidertitle: 'Leadership Training Programs',
            slidetitlesubhead: 'Equip leaders with practical skills.',
            sliderpoint: [
                { sliderid: '1', text: 'Customized workshops (decision-making, emotional intelligence, change management)' },
                { sliderid: '2', text: 'Onboarding for new leaders' },
                { sliderid: '3', text: 'Ongoing leadership development curriculums' }
            ],
            deliverable: 'Training Materials & Program Schedule',
        },
        {
            id: '4',
            slidertitle: 'Culture & Engagement Strategy',
            slidetitlesubhead: 'Build an engaging, values-driven workplace.',
            sliderpoint: [
                { sliderid: '1', text: 'Culture diagnostics and surveys' },
                { sliderid: '2', text: 'Employee engagement initiatives' },
                { sliderid: '3', text: 'Recognition and reward frameworks' }
            ],
            deliverable: 'Culture Enhancement Plan',
        },
        {
            id: '5',
            slidertitle: 'Succession Planning & Talent Management',
            slidetitlesubhead: 'Prepare for the future with confidence.',
            sliderpoint: [
                { sliderid: '1', text: 'Succession pipeline development' },
                { sliderid: '2', text: 'Talent identification and retention strategies' },
                { sliderid: '3', text: 'Career pathing and mentoring programs' }
            ],
            deliverable: 'Succession Plan & Talent Development Roadmap',
        }
    ]

    return(
        <>
            <IntrosectionFranchise 
                // headone="" 
                headtwo="Inspire. Empower. Lead."
                description="Strong leadership and cohesive teams are the foundation of a thriving business. Without them, even the best strategies fall short.
                            At HIS Business Solutions, we partner with organizations to develop leadership capabilities and build high-performing teams that drive sustainable success.
"
            />
            <ChallengeSection 
                head="Why Leadership & Team Development Often Stalls"
                subhead="Typical challenges include:"
                challenge={challenge} 
                Footer="We help you overcome these barriers by nurturing leadership at every level and fostering a culture of trust and accountability."
            />
            <Philosophy
                SlideService={sliderservice}
                philosophysubtitle="We believe leadership and team growth are continuous journeys that fuel organizational resilience."
                philosophypara="Great leadership is about influence, not authority. Building strong teams requires intentional development, clear values, and ongoing support.
                "
                slidetitle="Our Leadership & Team Development Solutions"
            />
            <FaqAccordion/>
            <TestimonySection/>
            <AdditionalInsights/>
            <CallToAction 
                head={ <>Ready to Build a Brand That <br/>Stands the Test of Time?</>} 
                primarybtn= "Schedule a Free Consultation"
                secondarybtn="Explore Our Leadership & Team Solutions"                
                img={image.abtbgellipse}
                imgclassname="left-ellipse-bg"  
            />
        </>
    )
}

export default LeaderShipnTeamDevelopment;