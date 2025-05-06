import {React, useEffect, useState} from "react";
import { image } from "../../../Assets/img";
import './style.scss';
import CountUp from 'react-countup';


const CountdownSection = () =>{
    // const [count, setCount] = useState(80);

    // useEffect(() => {
    //   if (count === 0) return;
  
    //   const timer = setInterval(() => {
    //     setCount(prev => prev - 1);
    //   }, 1000);
  
    //   return () => clearInterval(timer); // Clean up on unmount or re-render
    // }, [count]);

    return(
        <>
            <section className="countdownsection">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <img src={image.bgellipse} alt="" className="ellipsebg"/>
                            <h1 data-aos="fade-up" data-aos-delay="300">From Local to Global—
                            We’ve Done It All</h1>
                            <div className="d-flex">
                                <div className="ct1">
                                    <h2>80+</h2>
                                    <span>Countries</span>
                                </div>
                                <div className="ct1">
                                    <h2>1000+</h2>
                                    <span>Units</span>
                                </div>
                            </div>
                            <h4>Countless Transformations.</h4>
                            <p>Whether you're expanding, stabilizing, or pivoting—<br/>HIS is your growth partner.</p>

                            {/* <svg width="255" height="122" viewBox="0 0 255 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.0191 84.5025C0.466921 84.4919 0.0107338 84.931 0.000182509 85.4832C-0.0103688 86.0354 0.428711 86.4916 0.980895 86.5021L1.0191 84.5025ZM95 13.0026L94.2559 13.6707L95 13.0026ZM95 115.503L94.7169 116.462L95 115.503ZM250.407 25.0807C250.174 24.58 249.579 24.363 249.078 24.596L240.918 28.3931C240.418 28.6261 240.201 29.2209 240.434 29.7216C240.667 30.2224 241.261 30.4394 241.762 30.2064L249.015 26.8312L252.39 34.0843C252.623 34.585 253.218 34.8021 253.719 34.569C254.22 34.336 254.437 33.7412 254.204 33.2405L250.407 25.0807ZM1 85.5023L0.980895 86.5021C7.69841 86.6305 18.9146 84.2737 31.3968 80.1906C43.9111 76.0969 57.8145 70.2292 69.9362 63.2532C82.0299 56.2933 92.4692 48.1631 97.9168 39.4981C100.651 35.1493 102.159 30.6152 101.933 26.0016C101.707 21.3768 99.7433 16.7885 95.7441 12.3345L95 13.0026L94.2559 13.6707C98.0066 17.8478 99.7357 22.014 99.9357 26.0994C100.136 30.1962 98.8046 34.3282 96.2236 38.4336C91.041 46.6771 80.949 54.6078 68.9386 61.5198C56.9561 68.4157 43.1825 74.2309 30.775 78.2897C18.3353 82.3589 7.38492 84.6241 1.0191 84.5025L1 85.5023ZM95 13.0026L95.7441 12.3345C90.1318 6.08411 84.0625 2.44302 77.9428 0.990781C71.822 -0.461715 65.7219 0.292638 60.0819 2.7155C48.828 7.54998 39.3945 19.0194 34.9838 33.0135C30.5647 47.0338 31.1509 63.6897 40.066 78.9672C48.9828 94.2477 66.1625 108.034 94.7169 116.462L95 115.503L95.2831 114.544C67.0875 106.221 50.3922 92.6947 41.7934 77.9592C33.1928 63.2207 32.6228 47.1573 36.8912 33.6147C41.168 20.046 50.2658 9.10904 60.8713 4.55312C66.1609 2.2808 71.8226 1.59396 77.481 2.93674C83.1406 4.27978 88.8682 7.67042 94.2559 13.6707L95 13.0026ZM95 115.503L94.7169 116.462C140.486 129.971 176.074 116.6 201.876 95.1973C227.634 73.8304 243.646 44.4638 250.439 25.8454L249.5 25.5026L248.561 25.1599C241.854 43.5415 226.016 72.5748 200.599 93.6579C175.226 114.705 140.314 127.835 95.2831 114.544L95 115.503Z" fill="#FF4C00"/>
                            </svg> */}

                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={image.map} alt="" className="bgmap"  data-aos="zoom-in" data-aos-delay="500"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CountdownSection;