import { image } from '../../../Assets/img';
import './style.scss';
import React, { useState } from 'react';


const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`accordion-wrapper ${isOpen ? 'open' : ''}`} >
    <button
      onClick={onClick}
    >
      {title}      
      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>

    </button>
    {isOpen && (
      <div className="acc-content ">
        {content}
      </div>
    )}
  </div>
);


const FaqAccordion = () =>{

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
        title: 'Global Expertise with Local Sensitivity',
        content: 'We have supported brands expanding into major global markets, combining international insight with a strong understanding of local operational realities.'
        },
        {
        title: 'Pragmatic Solutions, Not Just Theory',
        content: 'Our strategies are grounded in operational execution, ensuring measurable, sustainable results instead of theoretical plans.'
        },
        {
        title: 'Integrity in Partnerships',
        content: 'We act as true advisors, focused solely on your long-term success. Our approach is built on trust, transparency, and collaborative growth.'
        },
        {
        title: 'Scalable Systems, Not Short-Term Fixes',
        content: 'We act as true advisors, focused solely on your long-term success. Our approach is built on trust, transparency, and collaborative growth.'
        },
        {
        title: 'A Complete Support Ecosystem',
        content: 'We act as true advisors, focused solely on your long-term success. Our approach is built on trust, transparency, and collaborative growth.'
        }
    ];

    return(
        <>
        <section className="faq-accordion-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <h1>Why HIS Business Solutions?</h1>
                    </div>
                    <div className="col-12 accordion-sec">
                        {items.map((item, index) => (
                            <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>                    
                </div>
            </div>
            <img src={image.abtbgellipse} alt="Background Ellipse Design" className="ellipsebg" />
        </section>
        </>
    )
}


export default FaqAccordion;