import React from 'react';
import './style.scss'; 
import { image } from '../../Assets/img';

function Companydetails(props) {
    return (
        <>
            <section className="cs-wrapper">
                <div className="container IS-2">
                    <div className="row">
                        <div className="col-12">
                            <img src={props.Companyimg} alt="" className='complogo'/>
                            <h1>{props.Companyname}</h1>
                            <br />
                            <h5>Stephen O’Connor's Role:</h5>
                            <h5>{props.Designation}</h5>
                            <br />
                            <h5>Overview</h5>
                            <br />  
                            <p>{props.overview}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="company-details-sec">
                <div className="sections-wrapper container">
                    <img src={image.abtbgellipse} alt="" className='left-ellipse-bg'/>
                    <img src={image.cncellipse} alt="" className='right-ellipse-bg'/>
                    {props.details.map(section => (
                        <div className="section" key={section.id}>
                            <h1 className="section-title mb-5">{section.title}</h1>
                            <div className="row g-4">
                                {section.items.map(item => (
                                    
                                        <div className={item.itemhead ? "col-lg-6 col-12": "col-lg-4 col-md-6 col-12"} key={item.itemid}>
                                            <div className="item-card d-flex align-items-center gap-3">
                                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                                    <path d="M44.3477 24H55.652L52.8259 50H47.1737L44.3477 24Z" fill="white"/>
                                                    <path d="M44.3477 76H55.652L52.8259 50H47.1737L44.3477 76Z" fill="white"/>
                                                    <path d="M76 44.3479L76 55.6522L50 52.8262L50 47.174L76 44.3479Z" fill="white"/>
                                                    <path d="M24 44.3479L24 55.6522L50 52.8262L50 47.174L24 44.3479Z" fill="white"/>
                                                    <path d="M64.3877 27.6187L72.3811 35.612L51.998 51.9985L48.0013 48.0018L64.3877 27.6187Z" fill="white"/>
                                                    <path d="M27.6182 64.3883L35.6115 72.3817L51.998 51.9986L48.0013 48.0019L27.6182 64.3883Z" fill="white"/>
                                                    <path d="M72.3818 64.3883L64.3885 72.3817L48.002 51.9986L51.9987 48.0019L72.3818 64.3883Z" fill="white"/>
                                                    <path d="M35.6123 27.6187L27.6189 35.612L48.002 51.9985L51.9987 48.0018L35.6123 27.6187Z" fill="white"/>
                                                </svg>
                                                <div className='item'>
                                                    {item.itemhead && <h5 className="item-head">{item.itemhead}</h5>}
                                                    <p className="item-text mb-0">{item.item}</p>                                                
                                                </div>
                                            </div>                                                                         
                                        </div> 
                                ))}
                            </div> 
                            {
                                section.quote &&
                            
                                <div className="row mt-2 pt-5 justify-content-center text-center">
                                    <div className="col-lg-10 col-12">
                                        <h5>{section.quote}</h5>  
                                    </div>
                                </div> 
                            } 
                        </div>
                    ))}
                </div>
            </section>

            <section className='detail-sec-bottom'>
                <div className="container">
                    <div className="row justify-content-center text-center text-center">
                        <div className="col-lg-9 col-12">
                            <h1>Why It Matters to You</h1>
                            <p>The insights, frameworks, and operational discipline that Stephen applied at Johnny Rockets are the same principles that now 
                                guide HIS Business Solutions’ client engagements.<br/>While the achievements belong to Stephen’s executive career, 
                                they directly influence the value and expertise HIS brings to businesses today.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}

export default Companydetails;