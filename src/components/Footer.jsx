import logo from "../../public/logo.png"




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

export default Footer;