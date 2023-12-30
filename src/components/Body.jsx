
import { useState } from 'react';
import res_data from '../../data/res-data'




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




 const Body = () =>{
  

    const [rData,setRData] = useState(res_data);
    

    return (
        <div className="flex flex-col items-center ">
            <div className="m-7 ">
                <button className=' inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none ' 
                onClick={()=>{
                 const highRatedRes = rData.filter((res)=>res.info.avgRating > 4.3);
                 setRData(highRatedRes);
                }}>Top Rated Restaurant</button>
            </div>

          <div className="flex flex-wrap ">
            {
                rData.map((restaurant)=>(
                    <Rescard key={restaurant.info.id} resdata={restaurant} />
                ))
            }
        </div>  

        </div>
    )
}

export default Body;