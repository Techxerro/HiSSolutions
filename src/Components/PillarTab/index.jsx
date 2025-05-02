import React, { useState, useRef, useEffect } from 'react';

import './style.scss';
import { image } from "../../Assets/img";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PillarTabs =()=>{

    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { 
            id: 'tab1', 
            label: 'Startup Consulting', 
            heading: 'Startup Consulting', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab2', 
            label: 'Brand & Concept Development', 
            heading: 'Brand & Concept Development', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab3', 
            label: 'Strategic & Financial Planning', 
            heading: 'Strategic & Financial Planning', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab4', 
            label: 'Franchising Solutions', 
            heading: 'Franchising Solutions', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab5', 
            label: 'Operational Turnaround', 
            heading: 'Operational Turnaround', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab6', 
            label: 'Marketing & CRM Strategy', 
            heading: 'Marketing & CRM Strategy', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab7', 
            label: 'Leadership & Team Development ', 
            heading: 'Leadership & Team Development', 
            para:'From scaling Sbarro internationally to turning around underperforming brands in under 120 days, we treat every client’s challenge like our own.' 
        },
        { 
            id: 'tab8', 
            label: 'Tech Advisory & Integration', 
            heading: 'Tech Advisory & Integration', 
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
            // pinSpacing: true,
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
                                    <div className="tabcontent-inner" key={tab.id} id={tab.id}>
                                        <div>
                                            <h3>{tab.heading}</h3>
                                            <p>{tab.para}</p>
                                            <div className="d-flex gap-5">
                                                <div>
                                                    <span style={{fontSize:'20px'}}>What It Solves</span><br/>
                                                    <span style={{fontSize:'12px'}}>Launch planning & operational setup</span>
                                                </div>
                                                <div>
                                                    <span style={{fontSize:'20px'}}>Why It Lasts</span><br/>
                                                    <span style={{fontSize:'12px'}}>Built-in scalability</span>
                                                </div>
                                            </div>
                                            <button className="btnprimary">
                                                Know More
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