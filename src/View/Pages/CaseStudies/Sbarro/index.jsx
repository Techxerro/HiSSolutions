import React from "react";
import Companydetails from "../../../../Utils/CompanyDetails";
import { image } from "../../../../Assets/img";
import CallToAction from "../../../../Utils/CTA";

const Sbarro =()=>{
    const details = [
        {
            id:1,
            title:'The Challenge',
            items:[
                {
                    itemid:1,
                    item:"Rebuilding systems and brand perception following stalled global development",
                },
                {
                    itemid:2,
                    item:"Establishing regional teams capable of driving localized growth",
                },
                {
                    itemid:3,
                    item:"Reinvigorating royalty streams and overall profitability",
                },
            ], 
        },    
        {
            id:2,
            title:'The Strategic Response',
            items:[
                {
                    itemid:1,
                    itemhead:'Franchise Reinvigoration',    
                    item:"Redesigned support systems and value propositions to re-attract and retain quality franchisees.",
                },
                {
                    itemid:2,
                    itemhead:'Joint Venture Leadership',    
                    item:"Launched and governed joint ventures in China, India, and Japan, aligning local execution with global brand standards.",
                },
                {
                    itemid:3,
                    itemhead:'Operational Infrastructure',    
                    item:"Built regional teams and support mechanisms to scale quickly and efficiently.",
                }
            ], 
        },   
        {
            id:3,
            title:'The Execution Highlights',
            items:[
                {
                    itemid:1,
                    item:"Grew international unit count from 113 to over 400",
                },
                {
                    itemid:2,
                    item:"Increased international revenues from $79M to $200M",
                },
                {
                    itemid:3,
                    item:"Boosted royalty earnings by 457%",
                },
                {
                    itemid:4,
                    item:"Served on boards for JV markets in Asia"
                },
            ],  
        },   
        {
            id:4,
            title:'The Outcome',
            items:[
                {
                    itemid:1,
                    item:"Orchestrated one of the most successful international expansions in Sbarro’s history",
                },
                {
                    itemid:2,
                    item:"Turned around brand perception and operational capabilities globally",
                },
                {
                    itemid:3,
                    item:"Cemented Sbarro’s relevance in key international territories",
                }
            ],
            quote:`"Expansion only works when the infrastructure, people, and purpose are all aligned." — Stephen O’Connor, Founder, HIS Business Solutions`,
        },

    ];
    return(
        <>        
            <Companydetails 
                Companyimg={image.logo4}
                Companyname={<>Sbarro – Global Expansion <br/>During Turnaround</>}
                Designation={<>Senior Vice President, International Development (2005–2010)</>}
                overview=
                    {<>
                        <p> 
                            Joining Sbarro at a pivotal moment, Stephen was a key architect of the brand’s international resurgence. Starting as VP of 
                            International Operations and rising to SVP, he led the company’s turnaround strategy through aggressive franchise expansion, 
                            regional
                        </p>
                    </>}
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

export default Sbarro;