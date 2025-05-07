import React from "react";
import './style.scss';
import { image } from "../../../../Assets/img";


const Motivesection= () =>{
    return(
        <>
            <section className="MotiveSection">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="title">
                                <h1>What Drives Us</h1>
                                <h4>Growth is never accidental.</h4>
                                <p>At HIS Business Solutions, we believe in designing success — through smarter strategies, stronger operations, and leadership that adapts, innovates, and endures.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row iconbox-wrapper">
                        <div className="col-lg-4 col-md-6 col-6">
                            <div className="icon-box d-flex gap-3 align-items-center">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                    <path d="M44.3479 24H55.6522L52.8262 50H47.174L44.3479 24Z" fill="white"/>
                                    <path d="M44.3479 76H55.6522L52.8262 50H47.174L44.3479 76Z" fill="white"/>
                                    <path d="M76 44.3477L76 55.652L50 52.8259L50 47.1737L76 44.3477Z" fill="white"/>
                                    <path d="M24 44.3477L24 55.652L50 52.8259L50 47.1737L24 44.3477Z" fill="white"/>
                                    <path d="M64.3882 27.6187L72.3816 35.612L51.9984 51.9985L48.0018 48.0018L64.3882 27.6187Z" fill="white"/>
                                    <path d="M27.6187 64.3882L35.612 72.3816L51.9985 51.9984L48.0018 48.0018L27.6187 64.3882Z" fill="white"/>
                                    <path d="M72.3813 64.3882L64.388 72.3816L48.0015 51.9984L51.9982 48.0018L72.3813 64.3882Z" fill="white"/>
                                    <path d="M35.6118 27.6187L27.6184 35.612L48.0016 51.9985L51.9982 48.0018L35.6118 27.6187Z" fill="white"/>
                                </svg>
                                <span>Practical solutions, not presentations</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                            <div className="icon-box d-flex gap-3 align-items-center">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                    <path d="M44.3479 24H55.6522L52.8262 50H47.174L44.3479 24Z" fill="white"/>
                                    <path d="M44.3479 76H55.6522L52.8262 50H47.174L44.3479 76Z" fill="white"/>
                                    <path d="M76 44.3477L76 55.652L50 52.8259L50 47.1737L76 44.3477Z" fill="white"/>
                                    <path d="M24 44.3477L24 55.652L50 52.8259L50 47.1737L24 44.3477Z" fill="white"/>
                                    <path d="M64.3882 27.6187L72.3816 35.612L51.9984 51.9985L48.0018 48.0018L64.3882 27.6187Z" fill="white"/>
                                    <path d="M27.6187 64.3882L35.612 72.3816L51.9985 51.9984L48.0018 48.0018L27.6187 64.3882Z" fill="white"/>
                                    <path d="M72.3813 64.3882L64.388 72.3816L48.0015 51.9984L51.9982 48.0018L72.3813 64.3882Z" fill="white"/>
                                    <path d="M35.6118 27.6187L27.6184 35.612L48.0016 51.9985L51.9982 48.0018L35.6118 27.6187Z" fill="white"/>
                                </svg>
                                <span>Lasting systems, not short-term fixes</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-6">
                            <div className="icon-box d-flex gap-3 align-items-center">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                    <path d="M44.3479 24H55.6522L52.8262 50H47.174L44.3479 24Z" fill="white"/>
                                    <path d="M44.3479 76H55.6522L52.8262 50H47.174L44.3479 76Z" fill="white"/>
                                    <path d="M76 44.3477L76 55.652L50 52.8259L50 47.1737L76 44.3477Z" fill="white"/>
                                    <path d="M24 44.3477L24 55.652L50 52.8259L50 47.1737L24 44.3477Z" fill="white"/>
                                    <path d="M64.3882 27.6187L72.3816 35.612L51.9984 51.9985L48.0018 48.0018L64.3882 27.6187Z" fill="white"/>
                                    <path d="M27.6187 64.3882L35.612 72.3816L51.9985 51.9984L48.0018 48.0018L27.6187 64.3882Z" fill="white"/>
                                    <path d="M72.3813 64.3882L64.388 72.3816L48.0015 51.9984L51.9982 48.0018L72.3813 64.3882Z" fill="white"/>
                                    <path d="M35.6118 27.6187L27.6184 35.612L48.0016 51.9985L51.9982 48.0018L35.6118 27.6187Z" fill="white"/>
                                </svg>
                                <span>Partnerships rooted in results, not promises</span>
                            </div>
                        </div>          
                        <div className="col-lg-8 col-12 pt-4">                            
                            <h4>We don’t just help you move faster. We help you move smarter, further, and with more confidence.</h4>                            
                        </div>
                    </div>
                    <img src={image.cncellipse} alt="" className="cnc-ellipse"/>
                </div>
            </section>
        </>
    )
}
export default Motivesection;