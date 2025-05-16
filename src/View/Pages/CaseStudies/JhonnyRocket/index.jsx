import React from "react";
import Companydetails from "../../../../Utils/CompanyDetails";
import { image } from "../../../../Assets/img";
import CallToAction from "../../../../Utils/CTA";

const JhonnyRocket =()=>{
    const details = [
        {
            id:1,
            title:'The Challenge',
            items:[
                {
                    itemid:1,
                    item:"Strained relationships with franchisees across diverse global markets",
                },
                {
                    itemid:2,
                    item:"Operational inconsistency and fragmented brand execution",
                },
                {
                    itemid:3,
                    item:"Severe impact on dine-in business models due to pandemic restrictions",
                },
                {
                    itemid:4,
                    item:"Slowed global development and expansion momentum",
                },
            ], 
        },    
        {
            id:2,
            title:'The Strategic Response',
            items:[
                {
                    itemid:1,
                    itemhead:'Franchise Partnership Rebuilding',    
                    item:"Re-established transparency and support frameworks with franchise partners to drive mutual profitability.",
                },
                {
                    itemid:2,
                    itemhead:'Delivery-First Business Model',    
                    item:"Pioneered virtual kitchen models and digital delivery strategies to replace lost dine-in revenue.",
                },
                {
                    itemid:3,
                    itemhead:'Agile Development Strategy',    
                    item:"Adapted market expansion strategies to fit rapidly changing global realities and protect development pipelines.",
                }
            ], 
        },   
        {
            id:3,
            title:'The Execution Highlights',
            items:[
                {
                    itemid:1,
                    item:'Designed and launched a virtual kitchen model within 90 days',
                },
                {
                    itemid:2,
                    item:"Deployed digital support hubs for remote franchise operations",
                },
                {
                    itemid:3,
                    item:"Secured third-party delivery partnerships to protect revenue streams",
                },
                {
                    itemid:4,
                    item:"Maintained franchisee development agreements while competitors paused"
                },
            ],  
        },   
        {
            id:4,
            title:'The Outcome',
            items:[
                {
                    itemid:1,
                    item:"Strengthened international franchise partnerships during peak crisis",
                },
                {
                    itemid:2,
                    item:"Stabilized and revitalized global expansion plans",
                },
                {
                    itemid:3,
                    item:"Positioned Johnny Rockets for post-pandemic growth and resilience",
                }
            ],
            quote:`"Leadership is tested not when everything goes smoothly — but when every foundation is shaken. Real value is built during times of uncertainty."— Stephen O’Connor, Founder, HIS Business Solutions`,
        },

    ];
    return(
        <>        
            <Companydetails 
                Companyimg={image.logo1}
                Companyname={<>Johnny Rockets –<br/>Global Turnaround Amid Crisis</>}
                Designation={<>Senior Vice President, International Business (2019–2021)</>}
                overview=
                    {<>
                        <p> 
                            At Johnny Rockets — a global restaurant brand with over 200 locations across 30 countries — Stephen O’Connor was entrusted with leading international business operations during one of the most disruptive periods in modern history: the global COVID-19 pandemic.
                        </p>
                        <p>
                            Reporting directly to the board under Sun Capital’s ownership, Stephen spearheaded a major strategic turnaround at a time when the hospitality industry faced unparalleled uncertainty.
                        </p>
                    </>}
                details={details}
            />
            <CallToAction
                head={<>Let's Build Your Next <br/>Success Story</>}
                primarybtn="Schedule a Consultation"
                secondarybtn="Explore Our Services"
            />
        </>
    )
}

export default JhonnyRocket;