import React from "react";
import './style.scss';

const ContactPage = () =>{
    return(
        <>
            <section className="contact-sec">
                <div className="container bg-org">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <h1>Get in touch</h1>
                            <p>Stephen O'Connor<br/>
                            Istanbul, Turkey / Dubai, UAE<br/>
                            stephenoconnor@HISbizsolutions.com</p>
                            <br />

                            <p>Julide O'Connor <br />
                            Istanbul, Turkey / Dubai, UAE<br/>
                            julideoconnor@HISbizsolutions.com</p>
                            <br />

                            <h5>+971 52 205 0425  |  +90 530 180 1691</h5>
                        </div>
                        <div className="col-lg-4 col-12">
                            <form action="">
                                <input type="text" placeholder="First Name*" name="First name"/>
                                <input type="text" placeholder="Last Name*"  name="Last name"/>
                                <input type="email" placeholder="Email*" name="email" />
                                <input type="text" placeholder="Subject*" name="subject" />
                                <textarea name="Message" placeholder="Message*"/>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage;