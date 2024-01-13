import { useState } from "react";
import logo from "../../public/logo.png"

import {Link} from 'react-router-dom'



const Header = () =>{

    const [loginButton,setLoginButton] = useState("Login");
    

    const toggle = ()=>{
        loginButton==='Login'?setLoginButton('Logout'):setLoginButton('Login');
    }
    

    return ( 
      <div className="bg-[#1d1718] gap-2    flex  justify-around items-center  pr-20 ">
        <div className="p-2 ml-5  ">
            <img className="h-[50px] " src={logo}></img>
        </div>

        <div className="">
            <ul className="flex gap-20 text-md text-white  ">
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to="/contact"> Contact </Link>  </li>
                <li> <Link to='/about'>About us</Link>  </li>
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