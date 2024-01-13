
import { useEffect, useState } from 'react';
import ShimmerBody from './Shimmer'
import {Link} from 'react-router-dom';

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
  

    const [rData,setRData] = useState([]);
    const [filterList,setFilterList] = useState([]);
    const [searchRes,setSearchRes] = useState('');


    useEffect(()=>{fetchData()},[]);

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2380555&lng=78.0077208&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        
        const json = await data.json();
 
        setRData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    
    if (rData.length===0){
        return (    
            <ShimmerBody />
        )
    }

    if (filterList.length===0){
        return (
            <div className='flex w-full h-[500px] justify-center items-center gap-2 flex-col   '>
                <h2>No Restaurants...</h2>
                <button type="button" className='rounded-l-full rounded-r-full  px-2  bg-orange-500 text-white ' onClick={()=>{document.location.reload()}}>
                 Go back
                 </button>
            </div>
        )
    }

    const handleSearch = (e)=>{
        setSearchRes(e.target.value)
    }



    return (
        <div className="flex flex-col items-center ">
            <div className="m-7 flex flex-col gap-2  ">

                <div className='flex gap-1 '>
                   <input onChange={(e)=>{handleSearch(e)}} value={searchRes} placeholder='Find Restaurants'  className=' placeholder:text-center  border-2 px-2 rounded-l-full rounded-r-full ' />
                   <button onClick={()=>{
                    const searchItems = rData.filter((res)=>(res.info.name.toLowerCase().includes(searchRes.toLowerCase())))
                    setFilterList(searchItems);
                   }}  className='border-2 border-orange-600 px-2  font-normal rounded-l-full rounded-r-full  focus:bg-orange-600 focus:text-white  '>Search</button>

                </div>
            

                <button className=' hover:bg-white hover:text-black hover:border  rounded-l-full rounded-r-full   inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg  focus:shadow-outline focus:outline-none ' 
                onClick={()=>{
                 const highRatedRes = rData.filter((res)=>res.info.avgRating > 4.3);
                 setFilterList(highRatedRes);
                }}>Top Rated Restaurant</button>
            </div>

          <div className="flex flex-wrap ">
            {
                filterList.map((restaurant)=>(

                    <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}  > <Rescard resdata={restaurant} /> </Link>
                    
                ))
            }
          </div>  

        </div>
    )
}

export default Body;