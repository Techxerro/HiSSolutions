import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const Productsection =()=>{
    return(
        <>
            <section className="product-sec">
                <div className="container">
                    <div className="row product-feature">
                        <div className="col-lg-5 col-md-5 col-12 d-flex justify-content-center">
                            <div className="productimg">
                                <img src={image.productimg1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="productbox-wrapper">
                                <h3>No More Band-Aids</h3>
                                <h5>Solving the Real Problems Holding Businesses Back</h5>
                                <p>
                                    No More Bandaids, Lane Stephens pulls back the curtain on the hidden issues that quietly undermine businesses from within.
                                    With 40+ years of global operational experience, Stephens challenges leaders to move beyond quick fixes and surface-level 
                                    solutions.
                                </p>
                                <p>
                                    This book offers a candid, actionable guide to diagnosing the real problems — and building businesses that are not only 
                                    profitable, but resilient and future-ready.
                                </p>
                                <p>
                                    Perfect for: Entrepreneurs, investors, and executives ready to stop treating symptoms and start engineering sustainable 
                                    success.
                                </p>
                                <div className="d-flex gap-3 align-items-center pt-4">
                                    <button className="btnprimary">
                                        Buy Now
                                    </button>
                                    <h6><b>Interested in Bulk Orders? <span style={{color:'#ff4c00'}}>Contact Us</span></b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row product-feature">
                        <div className="col-lg-5 col-md-5 col-12 d-flex justify-content-center">
                            <div className="productimg">
                                <img src={image.productimg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="productbox-wrapper">
                                <h3>The Sage Commander’s Guide to Modern Leadership</h3>
                                <h5>Timeless Principles for Leading in a Complex World</h5>
                                <p>
                                    In a world overwhelmed by noise, confusion, and fleeting trends, The Sage Commander’s Guide to Modern Leadership offers a return to clarity.
                                </p>
                                <p>
                                    Inspired by The Art of War and distilled through decades of hands-on global leadership, Lane Stephens presents a roadmap for those who seek more than power — they seek wisdom, impact, and legacy.
                                </p>
                                <p>
                                    This book is a call to rise above reactionary leadership and to cultivate the strategic mind, resilient spirit, and ethical compass necessary to thrive in today’s complex business environment.
                                </p>
                                <p>Perfect for: Leaders seeking clarity, legacy, and impact in high-stakes environments.</p>
                                <div className="d-flex gap-3 align-items-center pt-4">
                                    <button className="btnprimary">
                                        Buy Now
                                    </button>
                                    <h6><b>Interested in Bulk Orders? <span style={{color:'#ff4c00'}}>Contact Us</span></b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Productsection