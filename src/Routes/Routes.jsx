import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home";
import Errorpage from "../View/Pages/Errorpage";
import Blog from "../View/Pages/Blog";
import About from "../View/Pages/About";
import Franchise from "../View/Pages/Franchise";


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
                    path:'/Franchise',
                    element:<Franchise/>
                },    
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