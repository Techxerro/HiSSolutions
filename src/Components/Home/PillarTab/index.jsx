import React, { useState, useRef, useEffect } from 'react'; 
import './style.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { image } from '../../../Assets/img';

gsap.registerPlugin(ScrollTrigger);

const PillarTabs =()=>{

    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { 
            id: 'tab1', 
            label: 'Startup Consulting', 
            heading: 'Startup Consulting',
            redirect:'/services/startup-consulting', 
            img: image.tabimg1,
            solve:"Launch planning & operational setup",
            whyitlast:"Built-in scalability",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab2', 
            label: 'Brand & Concept Development', 
            heading: 'Brand & Concept Development', 
            redirect:'/services/brand-&-concept-planning',
            img: image.tabimg2,
            solve:"Identity, concept, and positioning",
            whyitlast:"Ownable, enduring brand stories",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab3', 
            label: 'Strategic & Financial Planning', 
            heading: 'Strategic & Financial Planning', 
            redirect:'/services/strategic-&-financial-planning',
            img: image.tabimg3,
            solve:"Forecasts, P&Ls, and growth models",
            whyitlast:"Informed decisions, consistent ROI",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        // { 
        //     id: 'tab4', 
        //     label: 'Franchising Solutions', 
        //     heading: 'Franchising Solutions', 
        //     redirect:'/',
        //     para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        // },
        { 
            id: 'tab4', 
            label: 'Operational Turnaround', 
            heading: 'Operational Turnaround', 
            redirect:'/services/Operational-turnaround',
            img: image.tabimg5,
            solve:"Site-level profitability and system",
            whyitlast:"Sustainable efficiency",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab5', 
            label: 'Marketing & CRM Strategy', 
            heading: 'Marketing & CRM Strategy', 
            img: image.tabimg6,
            solve:"Customer engagement & loyalty frameworks",
            whyitlast:"Increased LTV and reduced CAC    ",
            redirect:'/services/Marketing-&-CRM-Strategy',
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab6', 
            label: 'Leadership & Team Development ', 
            heading: 'Leadership & Team Development', 
            redirect:'/services/Leadership-&-team-development',
            img: image.tabimg7,
            solve:"Performance coaching and team structures",
            whyitlast:"Strong culture, lasting impact",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab7', 
            label: 'Tech Advisory & Integration', 
            heading: 'Tech Advisory & Integration', 
            redirect:'/services/Tech-Advisory-&-Integration',
            img: image.tabimg8,
            solve:"Tech stack analysis and system design",
            whyitlast:"Digital infrastructure for the future",
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },

    ]; 

    const sidebarRef = useRef(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: sidebarRef.current,
            start: 'start 50px',
            end: 'bottom 620px', // how long it should be pinned
            // markers:true,
            pin: true,
            pinSpacing: false,
            // onLeave: () => document.querySelector('.sidebar').classList.add('hide'),
            // onEnterBack: () => document.querySelector('.sidebar').classList.remove('hide'),
        });
  
        // Observe each section
        tabs.forEach((section) => {
            ScrollTrigger.create({
            trigger: `#${section.id}`,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveTab(section.id),
            onEnterBack: () => setActiveTab(section.id),
            });
        });
      return () => ScrollTrigger.killAll();
    }, []);

    return(
        <>
        <div className="pillartabsection" >
            <div className=" container">
                <div className="row">
                    <div className="col-12">
                        <h1 data-aos="fade-left">The Pillars of Our Practice</h1>
                    </div>
                    <div className="col-12">
                        <div className='tabbtninner'>
                            <div className="tabbtn" ref={sidebarRef}>
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                        style={{
                                        color: activeTab === tab.id ? '#ff4d00' : '#888',
                                        borderBottom: activeTab === tab.id ? '2px solid #ff4d00' : '1px solid #999999',                                        
                                        }}
                                    >
                                    {tab.label}
                                </div>
                                ))}
                            </div>

                            <div className="tabcontent-outer">
                                {tabs.map(tab =>
                                (
                                    <div className="tabcontent-inner" key={tab.id} id={tab.id} style={{background:`url(${tab.img})`}}>
                                        <div>
                                            <h3>{tab.heading}</h3>
                                            <p>{tab.para}</p>
                                            <div className="d-flex gap-5">
                                                <div>
                                                    <span style={{fontSize:'20px'}}>What It Solves</span><br/>
                                                    <span style={{fontSize:'12px'}}>{tab.solve}</span>
                                                </div>
                                                <div>
                                                    <span style={{fontSize:'20px'}}>Why It Lasts</span><br/>
                                                    <span style={{fontSize:'12px'}}> {tab.whyitlast} </span>
                                                </div>
                                            </div>
                                            <button className="btnprimary">
                                                <a href={tab.redirect}>Know More</a>
                                            </button> 
                                        </div>
                                    </div>
                                ) 
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PillarTabs;