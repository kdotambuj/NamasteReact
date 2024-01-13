
import React from "react";
import  ReactDOM  from "react-dom/client";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error'

import Restaurant from "./components/Restaurant";

import { RouterProvider,createBrowserRouter,Outlet } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));



const Applayout = () =>{
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element: <Applayout />,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'restaurant/:resId',
                element:<Restaurant />
            }

        ],
        errorElement:<Error />
    },
    
])

root.render(<RouterProvider router={router}/>)

