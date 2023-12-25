
import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "../public/logo.png"
import resData from '../data/res-data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () =>{
    return (
      <div className=" bg-[#1d1718] flex justify-between items-center pr-20 ">
        <div className="p-2 ml-5  ">
            <img className="h-[50px] " src={logo}></img>
        </div>

        <div className="">
            <ul className="flex gap-20 text-md text-white  ">
                <li>Home</li>
                <li>Contact </li>
                <li>About us</li>
                <li>Cart</li>
            </ul>
        </div>


      </div>
    )
}


const Rescard = (props) =>{
    const { resdata } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        areaName
    } = resdata?.info



    return (
        <div className="flex hover:border-2 flex-col  w-[300px] border-white  border-8 rounded-xl bg-black   ">
            
            <img className=" border-none rounded h-[250px] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>

          <div className="p-4 text-white flex flex-col items-center ">

         
            <h3 className="font-bold ">{name}</h3>

           <div className="flex gap-4 mt-4  ">
            <h5>{cuisines.join(", ")}</h5>
            <h4 className=" text-yellow-400">{avgRating}</h4>
           </div>

           <h3 className= "mt-3  text-white">{areaName}</h3>
           
           </div>

        </div>

    )
}


const Footer = () =>{
    return (
        <div className="bg-[#1d1718] w-full h-[350px] flex pt-10  justify-center gap-10  ">
            
             <div className="flex mr-52 flex-col items-center ">
               <img className="h-[100px] w-[220px] " src={logo}></img>
               <h2 className="text-white   ">Share Eatz</h2>
               <h3 className=" text-slate-400 ">Agra</h3>
             </div>

             <div className="flex flex-col gap-1 pr-44">
                <h1 className="text-white text-xl font-bold ">Company</h1>
                <ul className="text-slate-400 text-md flex flex-col gap-1.5  ">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Just Eatz One</li>
                    <li>Eatz Fast</li>
                </ul>
             </div>

            <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-3">

                
                <h1 className="text-white text-xl font-bold ">Contact Us</h1>
                <ul className="text-slate-400 text-md flex  flex-col gap-1.5   ">
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                </ul>

                </div>

                <div className="flex flex-col gap-3">
                   <h1 className="text-white text-xl font-bold ">Legal</h1>
                   <ul className="text-slate-400 text-md flex  flex-col gap-1.5 ">
                    <li>Terms & Condition</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                   </ul>

                </div>

             </div>


            <div className="flex flex-col gap-3 ">
             <h1 className="text-white text-xl font-bold ">We deliver to</h1>
                   <ul className="text-slate-400  text-md flex  flex-col gap-1.5">
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Agra</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                   </ul>


            </div>


        </div>
    )
}


const Body = () =>{
    return (
        <div className="flex flex-col items-center ">
            <div className="m-7 ">
                <input className=" border-none rounded-l-full rounded-r-full  px-2 py-1 w-[300px] text-center placeholder-white  bg-black" placeholder="Search from your favourite Restaurant " ></input>

            </div>

          <div className="flex flex-wrap ">

            { 
                resData.map((restaurant)=>(
                    <Rescard key={restaurant.info.id} resdata={restaurant} /> 
                ))
            }
          </div>

          <Footer />
            
         

        </div>
    )
}


const Applayout = () =>{
    return (
        <div>
            <Header />
            <Body />

        </div>
    )
}


root.render(<Applayout/>)

