import React from "react";
import './style.scss';
import HeroSection from "../../../Components/Home/HeroSection/index.jsx";
import BuiltSection from "../../../Components/Home/builtsection/index.jsx";
import Valuesection from "../../../Components/Home/ValueSection/index.jsx";
import Brandsection from "../../../Components/Home/brandsection/index.jsx";
import PillarTabs from "../../../Components/Home/PillarTab/index.jsx";
import TestimonySection from "../../../Components/Home/Testimonialsection/index.jsx";
import CountdownSection from "../../../Components/Home/Countdownsection/index.jsx";
import FounderSection from "../../../Components/Home/FounderSection/FounderSection.jsx";
import CnCsection from "../../../Components/Home/C&Csection/index.jsx";
import FAQSection from "../../../Components/Home/FAQsection/index.jsx";
import CTASection from "../../../Components/Home/CTAsection/index.jsx";
import CaseStudySlider from "../../../Components/Home/caseStudy/index.jsx";


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
            <CaseStudySlider/>
            <FounderSection/>
            <CnCsection/>
            <FAQSection/>
            <CTASection/>
        </>
    )
}

export default Home;