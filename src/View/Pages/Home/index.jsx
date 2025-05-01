import React from "react";
import './style.scss';
import HeroSection from "../../../Components/HeroSection/index.jsx";
import BuiltSection from "../../../Components/builtsection/index.jsx";
import Valuesection from "../../../Components/ValueSection/index.jsx";
import Brandsection from "../../../Components/brandsection/index.jsx";
import PillarTabs from "../../../Components/PillarTab/index.jsx";
import TestimonySection from "../../../Components/Testimonialsection/index.jsx";
import CountdownSection from "../../../Components/Countdownsection/index.jsx";


const Home = ()=>{
    return(
        <>
            <HeroSection/>
            <BuiltSection/>
            <Valuesection/>
            <Brandsection/>
            <PillarTabs/>
            <TestimonySection/>
            <CountdownSection/> 
        </>
    )
}

export default Home;