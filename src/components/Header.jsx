import logo from "../../public/logo.png"



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

export default Header;