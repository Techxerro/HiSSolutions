import React from "react";
import Companydetails from "../../../../Utils/CompanyDetails";
import { image } from "../../../../Assets/img";
import CallToAction from "../../../../Utils/CTA";

const AlshayaGroup =()=>{
    const details = [
        {
            id:1,
            title:'The Challenge',
            items:[
                {
                    itemid:1,
                    item:"Curating and launching a diverse portfolio of global brands in new, culturally distinct markets",
                },
                {
                    itemid:2,
                    item:"Integrating brand identities while maintaining local operational effectiveness",
                },
                {
                    itemid:3,
                    item:"Developing a scalable infrastructure to support regional growth",
                },
            ], 
        },    
        {
            id:2,
            title:'The Strategic Response',
            items:[
                {
                    itemid:1,
                    itemhead:'Brand & Market Alignment',    
                    item:"Curated a strategic mix of concepts tailored to market demand and regional trends.",
                },
                {
                    itemid:2,
                    itemhead:'Operational Framework Development',    
                    item:"Established systems for food safety, quality assurance, and brand execution across all units.",
                },
                {
                    itemid:3,
                    itemhead:'Leadership Pipeline Creation',    
                    item:"Built a strong talent development strategy to ensure sustainable growth and consistent performance.",
                }
            ], 
        },   
        {
            id:3,
            title:'The Execution Highlights',
            items:[
                {
                    itemid:1,
                    item:"Onboarded and launched 4 iconic brands across the GCC and MENA",
                },
                {
                    itemid:2,
                    item:"Grew portfolio revenue to over $365M annually",
                },
                {
                    itemid:3,
                    item:"Standardised operating procedures and safety protocols across all markets",
                },
                {
                    itemid:4,
                    item:"Developed a leadership bench to support aggressive unit growth"
                },
            ],  
        },   
        {
            id:4,
            title:'The Outcome',
            items:[
                {
                    itemid:1,
                    item:"Built one of the strongest regional F&B brand portfolios in the industry",
                },
                {
                    itemid:2,
                    item:"Achieved top global performance rankings for multiple international concepts",
                },
                {
                    itemid:3,
                    item:"Created an enduring platform for scalable regional expansion",
                }
            ],
            quote:`"True multi-brand growth is about strategic curation, operational discipline, and relentless customer focus." — Stephen O’Connor, Founder, HIS Business Solutions`,
        },

    ];
    return(
        <>        
            <Companydetails 
                Companyimg={image.logo2}
                Companyname={<>M.H. Alshaya – Building a Multi-<br/>Brand Powerhouse</>}
                Designation={<>Vice President, Casual Dining <span>(2011-2016)</span></>}
                overview={<><p> As a founding executive of M.H. Alshaya’s Food & Beverage division, Stephen O’Connor led the creation and expansion of a 
                high-performing, multi-brand portfolio across fast casual, casual dining, upscale, and fine dining sectors. Operating across 9 countries — 
                including Kuwait, UAE, KSA, Bahrain, Lebanon, Egypt, Turkey, and the UK — he was responsible for over 155 restaurant units and an annual 
                turnover of $365M. </p> <p>Stephen drove the successful onboarding of globally celebrated concepts such as Shake Shack, Raising Cane’s, Katsuya, 
                and Babel — transforming them into top-performing international units for their respective brands.</p></>}
                details={details}
            />
            <CallToAction
                head={<>Let's Build Your Next <br/>Success Story</>}
                primarybtn="Schedule a Consultation"
                primarybtnlink=""
                secondarybtn="Explore Our Services"
                secondarybtnlink="/services"
            />
        </>
    )
}

export default AlshayaGroup;