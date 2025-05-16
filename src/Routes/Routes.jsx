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