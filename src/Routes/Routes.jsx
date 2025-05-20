import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home";
import Errorpage from "../View/Pages/Errorpage";
import Blog from "../View/Pages/Blog";
import About from "../View/Pages/About";
import CaseStudies from "../View/Pages/CaseStudies";
import Contact from "../View/Pages/Contact";
import AlshayaGroup from "../View/Pages/CaseStudies/AlshayaGroup";
import Sbarro from "../View/Pages/CaseStudies/Sbarro";
import TGIFriday from "../View/Pages/CaseStudies/TGIFriday";
import JhonnyRocket from "../View/Pages/CaseStudies/JhonnyRocket";
import Services from "../View/Pages/Franchise";
import Shop from "../View/Pages/Shop";
import StartupConsulting from "../View/Pages/Services/StartupConsulting";
import BrandnConceptPlanning from "../View/Pages/Services/Brand&Concept";
import StrategicnFinancialPlanning from "../View/Pages/Services/Strategic&FinancialPlanning";
import OperationalTurnaround from "../View/Pages/Services/OperationalTurnaround";
import MarketingnCRMStrategy from "../View/Pages/Services/MarketingCRMStrategy";
import LeaderShipnTeamDevelopment from "../View/Pages/Services/LeaderShipnTeamDevelopment";
import TechAdvisorynIntegration from "../View/Pages/Services/TechAdvisorynIntegration";


const Routes =()=>{
    const element = useRoutes([
        {
            path:'/',
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }, 
                {
                    path:'/about',
                    element:<About/>
                }, 
                {
                    path:'/blog',
                    element:<Blog/>
                }, 
                {
                    path:'/services',
                    element:<Services/>
                }, 
                {
                    path:'/services/startup-consulting',
                    element:<StartupConsulting/>
                },
                {
                    path:'/services/brand-&-concept-planning',
                    element:<BrandnConceptPlanning/>
                },
                {
                    path:'/services/strategic-&-financial-planning',
                    element:<StrategicnFinancialPlanning/>
                },
                {
                    path:'/services/Operational-turnaround',
                    element:<OperationalTurnaround/>
                },
                {
                    path:'/services/Marketing-&-CRM-Strategy',
                    element:<MarketingnCRMStrategy/>
                },
                {
                    path:'/services/Leadership-&-team-development',
                    element:<LeaderShipnTeamDevelopment/>
                },
                {
                    path:'/services/Tech-Advisory-&-Integration',
                    element:<TechAdvisorynIntegration/>
                },
                
                {
                    path:'/case-studies',
                    element:<CaseStudies/>
                }, 
                {
                    path:'/contact',
                    element:<Contact/>
                }, 
                {
                    path:'/case-studies/Alshaya-Group',
                    element:<AlshayaGroup/>
                },  
                {
                    path:'/case-studies/Sbarro',
                    element:<Sbarro/>
                },                  
                {
                    path:'/case-studies/TGI-Friday',
                    element:<TGIFriday/>
                },                  
                {
                    path:'/case-studies/Jhonny-Rocket',
                    element:<JhonnyRocket/>
                },                  
                {
                    path:'/shop',
                    element:<Shop/> 
                }
            ]
        },
        {
          path:'/404',
          element:<Errorpage/>
        },
        {
          path: "*",
          element: <Navigate to="/404"/>,
        }
    ])
    return element;
}

export default Routes;