import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '@fortawesome/free-brands-svg-icons';


const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <div className="logo d-flex gap-3 align-items-end">
                            <img src={image.footerlogo} alt="" id="whitelogo"/>
                            {/* <img src={image.whitelogotext} alt="" id="whitelogotext"/> */}
                        </div>
                    </div> 
                    <div className="col-lg-7 col-12">
                        <div className="d-flex gap-5">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Book Online</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Franchise</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul><ul>
                                <li><a href="">Term & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div>   

                            <div className="footer-social">  
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
                                <span>© 2025 by ​BUSINESS​ CONSULTING.</span>
                            </div>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;