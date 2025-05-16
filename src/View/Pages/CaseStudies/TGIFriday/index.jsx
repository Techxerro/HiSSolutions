import React from "react";
import Companydetails from "../../../../Utils/CompanyDetails";
import { image } from "../../../../Assets/img";
import CallToAction from "../../../../Utils/CTA";

const TGIFriday =()=>{
    const details = [
        {
            id:1,
            title:'The Challenge',
            items:[
                {
                    itemid:1,
                    item:"Learning the business from the ground up in a fast-paced, high-expectation environment",
                },
                {
                    itemid:2,
                    item:"Developing scalable training and operational standards across diverse markets",
                },
                {
                    itemid:3,
                    item:"Balancing franchisee needs with brand integrity in international growth",
                },
            ], 
        },    
        {
            id:2,
            title:'The Strategic Response',
            items:[
                {
                    itemid:1,
                    itemhead:'Operational Mastery',    
                    item:"Gained deep operational expertise across the entire business, including kitchen, HR, training, and leadership development.",
                },
                {
                    itemid:2,
                    itemhead:'Franchise Partner Collaboration',    
                    item:"Worked closely with franchisees globally, understanding both their challenges and opportunities.",
                },
                {
                    itemid:3,
                    itemhead:'International Expansion',    
                    item:"Led and supported TGI Fridays’ growth across the U.S., EAME, India, and Turkey.",
                }
            ], 
        },   
        {
            id:3,
            title:'The Execution Highlights',
            items:[
                {
                    itemid:1,
                    item:'Received four "Store of the Company" awards',
                },
                {
                    itemid:2,
                    item:"Developed and retained high-performing teams across markets",
                },
                {
                    itemid:3,
                    item:"Built training systems still used in modified form today",
                },
                {
                    itemid:4,
                    item:"Served as a bridge between U.S. corporate leadership and international operators"
                },
            ],  
        },   
        {
            id:4,
            title:'The Outcome',
            items:[
                {
                    itemid:1,
                    item:"Shaped a leadership style grounded in empathy, discipline, and hands-on experience",
                },
                {
                    itemid:2,
                    item:"Established a global operational lens that still informs every HIS engagement",
                },
                {
                    itemid:3,
                    item:"Gained critical insight into the balance of consistency and local flexibility in international franchising",
                }
            ],
            quote:`"Real leadership starts with humility, grows with accountability, and flourishes with vision." — Stephen O’Connor, Founder, HIS Business Solutions`,
        },

    ];
    return(
        <>        
            <Companydetails 
                Companyimg={image.logo3}
                Companyname={<>TGI Fridays – From the Line to <br/>Global Leadership</>}
                Designation={<>Progressive Roles from Kitchen Manager to COO (1988–2000)</>}
                overview=
                    {<>
                        <p> 
                            Stephen’s hospitality journey began at TGI Fridays, where he progressed from kitchen manager to Chief Operating Officer of an 
                            international franchise. This immersive experience laid the foundation for his global leadership style, combining grassroots 
                            operational knowledge with high-level strategic insight.
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

export default TGIFriday;