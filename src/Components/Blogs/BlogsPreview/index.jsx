import React from "react";
import './style.scss';
import blogsdata from "./blogsdata";

const BlogsPreview=()=>{
    return(
        <>
        <section className="blogpreviewsection">
            <div className="container">
                <div className="row">
                    {blogsdata.map((blogdata) => (                        
                        <div className="col-md-4 col-sm-6 col-12 blog-box" id={blogdata.id}>
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
                            <button className="btnprimary">Know More</button>
                        </div>
                    ))}                    
                </div>
            </div>  
        </section>
        </>
    )
}

export default BlogsPreview