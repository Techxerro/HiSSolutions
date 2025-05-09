import React, {useEffect, useState, useRef} from "react";
import './style.scss';
import { image } from "../../../Assets/img";
// import emailjs from 'emailjs-com';

const Header = ()=>{

    const [openMenu, setopenMenu] = useState();
    // const [openPopup, setopenPopup] = useState();

    const OpenMenu = () => {
        setopenMenu(!openMenu);
    };

    useEffect(()=>{
        const menulist = document.querySelectorAll('.menu ul li a');        
        for(let x = 0; x<menulist.length; x++){
            if(window.location.href===menulist[x].href){
                menulist[x].parentElement.classList.add('active');
            }
            else if(window.location.href==="#contact"){
                //do nothing
            }
        }
    },[window.location.pathname])

    const form = useRef();
    // const sendEmail = (event) =>{
    //     console.log('button presses');
    //     event.preventDefault();
    //     emailjs.sendForm('service_lw33xgg', 'template_p5ho0aq', form.current, 'TuoZfleP67ouRXDbJ')
    //     .then((result) => {
            
    //         console.log(result.text);
    //         alert('Your mail has been sent successfully');
            
    //         window.location.reload(true);

    //         //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    
    // } 

    return(
        <>
        <header>
            <div className="container header-main">                
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 ">
                        <div className="d-flex align-items-center gap-2 logo">
                            <a href="/"><img src={image.logo} alt="" data-aos="zoom-in" data-aos-delay="600" id="logoimg" /></a>
                            {/* <a href="/"><img src={image.logotext} alt=""  id="logotext"/></a> */}
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-6 d-flex justify-content-end menu-wrapper">    
                        <div className="menu d-flex align-items-center ">
                            <ul className="d-flex gap-4 justify-content-end">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="/services">Franchise</a>
                                </li>
                                <li>
                                    <a href="/services">Shop</a>
                                </li>
                                <li>
                                    <a href="/blog">Insight & Resources</a>
                                </li>
                                <li>
                                    <a href="/services">Case Studies</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>                    
                        <div className="mobile-menu">
                            <button onClick={()=>OpenMenu()}>
                                Menu
                            </button>
                        </div>
                        <div className="container mobile-menu-list" style={{display:`${openMenu ? 'block' : 'none'}`, paddingTop:'20px'}}>
                            <div className="row" >
                                <div className="col-5" style={{paddingBottom:'50px'}}> 
                                    <a href="/"><img src={image.logo} alt="" style={{width:'100%'}}/></a>
                                </div>
                                <div className="col-4"></div>
                                <div className="col-3">
                                    <span onClick={()=>OpenMenu()}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L29 29" stroke="black" stroke-width="2"/>
                                            <path d="M29 1L1 29" stroke="black" stroke-width="2"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="col-12">
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/about">About us</a>
                                        </li>
                                        <li>
                                            <a href="/services">Services</a>
                                        </li><li>
                                            <a href="/services">Franchise</a>
                                        </li>
                                        <li>
                                            <a href="/services">Shop</a>
                                        </li>
                                        <li>
                                            <a href="/services">Resources</a>
                                        </li>
                                        <li>
                                            <a href="/services">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                                                        
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* <div className="overlay-popup" style={{display: openPopup ? 'block': 'none' }} onClick={()=>setopenPopup(!openPopup)}></div>

        <div className="consult-popup" style={{display: openPopup ? 'block': 'none' }}>
            <form ref={form} 
            // onSubmit={sendEmail}
            >
                <div className="close-popup" onClick={()=>setopenPopup(!openPopup)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L29 29" stroke="black" stroke-width="2"/>
                        <path d="M29 1L1 29" stroke="black" stroke-width="2"/>
                    </svg>
                </div>
                <h4>GET A FREE<br/> CONSULTATION</h4>
                <div className="d-flex gap-3">
                    <label>
                        <input type="text" placeholder="Name" name="name" required/>
                    </label>
                    <label>
                        <input type="telephone" placeholder="Phone Number" name="Phone" required />
                    </label>
                </div>                            
                <label>
                    <input type="email" placeholder="Email Address" name="Email" required/>
                </label>                         
                <label>
                    <input type="date" placeholder="Preferred Date" name="Date" required/>
                </label>
                <label>
                    <select name="Service" required>
                        <option value="">What Do You Prefer</option>
                        <option value="Total Utility Management Solutions">Total Utility Management Solutions</option>
                        <option value="Energy Monitoring and Managemen">Energy Monitoring and Management</option>
                        <option value="Energy Production">Energy Production</option>
                        <option value="Commercial Solar Projects">Commercial Solar Projects</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div> */}
        </>
    )
}

export default Header;