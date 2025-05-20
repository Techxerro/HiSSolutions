import React from "react";
import './style.scss';
import { image } from "../../../Assets/img";

const ShopIntro = () =>{
    return(
        <>
            <section className="intro-Shop">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1>Lane Stephens Bookstore</h1>
                            <h1>Design a Concept That Lasts.</h1>
                            <h5>Discover the Books Shaping a New Era of Leadership</h5>
                            <p>Written by global executive and founder of HIS Business Solutions, Stephen O’Connor (aka Lane Stephens), these two powerful books offer practical, battle-tested insights for business leaders ready to break through limitations and lead with vision.</p>
                        </div>
                        
                        <img src={image.cncellipse} alt="" />  
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopIntro;