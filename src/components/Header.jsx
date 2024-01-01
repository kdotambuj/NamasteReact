import { useState } from "react";
import logo from "../../public/logo.png"



const Header = () =>{

    const [loginButton,setLoginButton] = useState("Login");
    

    const toggle = ()=>{
        loginButton==='Login'?setLoginButton('Logout'):setLoginButton('Login');
    }



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

                <button onClick={()=>{
                  toggle()
                }}>{loginButton}</button>
            </ul>
        </div>


      </div>
      )
}

export default Header;