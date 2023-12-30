
import React from "react";
import  ReactDOM  from "react-dom/client";
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import Body  from "./components/Body";



const root = ReactDOM.createRoot(document.getElementById('root'));


const Applayout = () =>{
    return (
        <div>
            <Header />
            <Body />
            <Footer />

        </div>
    )
}


root.render(<Applayout/>)

