import { image } from '../../../Assets/img';
import './style.scss';

const ChallengeSection = (props) =>{
    return(
        <>
            <section className="challengeSection">
                <div className="container">
                    <div className="row ">
                        <div className="col-12">
                            <h1 data-aos="fade-right" data-aos-delay="400">The Challenge:{props.head}</h1>
                            <br/>
                            <h4 data-aos="fade-left" data-aos-delay="600">{props.subhead}</h4>
                        </div>                        
                    </div>
                    <div className="row svg-pointers">
                        {props.challenge.map(issue => (
                            <div className="col-lg-4 col-md-6 col-12" key={issue.id}>
                                <div className="d-flex gap-2" data-aos="fade-left" data-aos-delay="700">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <circle cx="50" cy="50" r="50" fill="#FF4C00"/>
                                        <path d="M44.3477 24H55.652L52.8259 50H47.1737L44.3477 24Z" fill="white"/>
                                        <path d="M44.3477 76H55.652L52.8259 50H47.1737L44.3477 76Z" fill="white"/>
                                        <path d="M76 44.3479L76 55.6522L50 52.8262L50 47.174L76 44.3479Z" fill="white"/>
                                        <path d="M24 44.3479L24 55.6522L50 52.8262L50 47.174L24 44.3479Z" fill="white"/>
                                        <path d="M64.3877 27.6187L72.3811 35.612L51.998 51.9985L48.0013 48.0018L64.3877 27.6187Z" fill="white"/>
                                        <path d="M27.6182 64.3883L35.6115 72.3817L51.998 51.9986L48.0013 48.0019L27.6182 64.3883Z" fill="white"/>
                                        <path d="M72.3818 64.3883L64.3885 72.3817L48.002 51.9986L51.9987 48.0019L72.3818 64.3883Z" fill="white"/>
                                        <path d="M35.6123 27.6187L27.6189 35.612L48.002 51.9985L51.9987 48.0018L35.6123 27.6187Z" fill="white"/>
                                    </svg>
                                    <h5>{issue.text}</h5>
                                </div>
                            </div>
                        ))}                        
                        
                        <div className="col-12">
                            <br/>
                            <h4 data-aos="fade-up" data-aos-delay="700">{props.Footer}</h4> 
                        </div>
                        
                    </div>
                </div>
                <img src={image.cncellipse} alt="" className="cs-ellipse"/>
            </section>
        </>
    )
}

export default ChallengeSection;