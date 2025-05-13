import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const CSIntro = () =>{
    return(
        <>
            <section className="cs-intro-section">
                <div className="container IS-1">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                <h1>Case Studies</h1>
                                <div className="divider">                                   
                                </div>
                                <h1>HIS Business Solutions</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="intro-content">
                                <h5>Global Leadership Experience That Powers Our Solutions</h5>
                                <p>
                                    Before founding HIS Business Solutions, Stephen O’Connor led international operations and strategic transformations at some of the world’s most recognisable hospitality brands.
                                </p>
                                <p>    
                                    Today, HIS Business Solutions draws on this executive experience to deliver practical, results-driven strategies to clients worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={image.abtbgellipse} alt="" />
                <div className="container IS-2">
                    <div className="row">
                        <div className="col-12">
                            <h1>Johnny Rockets </h1>
                            <h1>Global Turnaround Amid Crisis</h1>
                            <br />
                            <h5>Stephen O’Connor's Role:</h5>
                            <h5>Senior Vice President, International Business <span>(2019–2021)</span></h5>
                            <br />
                            <h5>Overview</h5>
                            <br />  
                            <p>At Johnny Rockets — a global restaurant brand with over 200 locations across 30 countries — Stephen O’Connor was entrusted with leading international business operations during one of the most disruptive periods in modern history: the global COVID-19 pandemic.</p>
                            <p>Reporting directly to the board under Sun Capital’s ownership, Stephen spearheaded a major strategic turnaround at a time when the hospitality industry faced unparalleled uncertainty.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CSIntro;