import React, { useEffect, useRef, useState } from "react";
import './style.scss';
import blogsdata from "./blogsdata";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { image } from "../../../Assets/img";

gsap.registerPlugin(ScrollTrigger);

const BlogsPreview=()=>{  

    return(
        <>
        
        <section className="blogpreviewsection">
            <div className="container">
                <div className="row">
                    {blogsdata.slice(0, 5).map((blogdata) => 
                    (                        
                        <div className="col-sm-6 col-12 blog-box" id={blogdata.id}>
                            <div className="imgcover">
                                <img src={blogdata.img} alt="" />
                            </div>
                            <div className="socials">                                
                                <div className="s-hidden">
                                    <div className="d-flex gap-3 ">
                                        {/* Linkedin */}
                                        <a href="https://www.linkedin.com/company/pero-power-innovations/" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5 3H16V0h-3c-2.76 0-5 2.24-5 5v3H6v4h2v9h4v-9h3l0.5-4H12V5c0-0.55 0.45-1 1-1z"/>
                                        </svg>
                                        </a>

                                        {/* Instagram */}
                                        <a href="https://www.facebook.com/profile.php?id=100048109194377" target="_blank">                           
                                        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5A3.25 3.25 0 014.5 16.25v-8.5z"/>
                                            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17 6.5a1 1 0 11-2 0 1 1 0 012 0z"/>
                                        </svg>
                                        </a>

                                        {/* Linkedin */}
                                        <a href="https://www.facebook.com/profile.php?id=100048109194377" target="_blank">                           
                                        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5H5a2.5 2.5 0 100-5h-.02zM3 9h4v12H3V9zm7 0h3.5v1.71h.05c.49-.93 1.69-1.91 3.45-1.91 3.69 0 4.5 2.43 4.5 5.59V21h-4v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z"/>
                                        </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="s-c">
                                    <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.9377 8.125L6.3335 20.3958L24.9377 32.6667" stroke="white" stroke-width="2"/>
                                        <circle cx="30.0833" cy="6.33333" r="5.33333" fill="#FF4C00" stroke="white" stroke-width="2"/>
                                        <circle cx="6.33333" cy="20.7916" r="5.33333" fill="#FF4C00" stroke="white" stroke-width="2"/>
                                        <circle cx="30.0833" cy="33.6668" r="5.33333" fill="#FF4C00" stroke="white" stroke-width="2"/>
                                    </svg>
                                </div>

                            </div>
                            <h2>{blogdata.title}</h2>
                            <p>{blogdata.desc}</p>
                            <button className="btnprimary">Read Article</button>
                        </div>
                    ))}  

                    <div className="col-sm-6 col-12 d-flex align-items-center justify-content-center">   
                        <div className="arrow">
                            <svg
                                className="animated-svg"
                                width="501"
                                height="593"
                                viewBox="0 0 501 593"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ scale: "0.7", margin: "0 auto", display: "block" }}
                            >
                                <path 
                                d="M2.29666 61.8111C0.608018 62.7518 0.00171781 64.8833 0.942448 66.5719C1.88318 68.2606 4.0147 68.8669 5.70334 67.9262L2.29666 61.8111ZM264.5 16.8682L263.358 20.1767L264.5 16.8682ZM290.5 253.369L291.971 250.193L290.5 253.369ZM487.5 203.869L490.904 203.053L487.5 203.869ZM368.5 588.874C368.503 590.807 370.072 592.372 372.005 592.369L403.505 592.322C405.438 592.319 407.003 590.75 407 588.816C406.997 586.883 405.428 585.319 403.495 585.322L375.495 585.363L375.453 557.363C375.45 555.43 373.881 553.866 371.948 553.869C370.015 553.872 368.45 555.441 368.453 557.374L368.5 588.874ZM4 64.8686L5.70334 67.9262C54.1186 40.9543 151.456 -18.4373 263.358 20.1767L264.5 16.8682L265.642 13.5596C150.344 -26.2264 50.2147 35.1162 2.29666 61.8111L4 64.8686ZM264.5 16.8682L263.358 20.1767C332.648 44.0867 370.12 116.298 374.571 175.673C376.799 205.391 370.68 231.003 357.073 245.575C350.343 252.783 341.713 257.382 331.059 258.517C320.341 259.659 307.346 257.315 291.971 250.193L290.5 253.369L289.029 256.544C305.195 264.034 319.48 266.79 331.801 265.477C344.185 264.158 354.35 258.748 362.19 250.352C377.723 233.716 383.844 205.737 381.552 175.149C376.961 113.912 338.352 38.6496 265.642 13.5596L264.5 16.8682ZM290.5 253.369L291.971 250.193C272.845 241.332 261.116 230.799 254.952 219.813C248.826 208.896 248.001 197.192 251.313 185.485C258.009 161.818 281.674 138.184 312.349 123.201C342.929 108.263 379.628 102.356 411.653 113.177C443.452 123.921 471.326 151.392 484.096 204.684L487.5 203.869L490.904 203.053C477.674 147.846 448.36 118.191 413.894 106.545C379.653 94.9752 341.008 101.411 309.276 116.911C277.638 132.365 252.023 157.262 244.577 183.58C240.819 196.865 241.709 210.517 248.847 223.238C255.947 235.891 269.03 247.28 289.029 256.544L290.5 253.369ZM487.5 203.869L484.096 204.684C504.685 290.602 489.942 372.097 463.039 439.166C436.124 506.264 397.116 558.72 369.521 586.397L372 588.869L374.479 591.34C402.717 563.017 442.259 509.773 469.536 441.772C496.825 373.74 511.915 290.736 490.904 203.053L487.5 203.869Z"
                                />
                            </svg>
                        </div>
                    </div>  
                    <img src={image.cncellipse} alt="" className="bgellipse"/>           
                </div>
            </div>  
        </section>
        
        </>
    )
}

export default BlogsPreview