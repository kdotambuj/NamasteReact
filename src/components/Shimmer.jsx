


const Shimmer = ()=>{

    return (
           <div className="bg-white w-[250px] h-[300px] flex gap-2  flex-col m-3">

              <div className="bg-[#f0f0f0] w-full h-[250px] "></div>

              <div className="flex gap-2  flex-col">
                <div className="h-[20px] rounded-l-full rounded-r-full bg-[#f0f0f0] w-[140px]"></div>
                <div className="h-[20px] rounded-l-full rounded-r-full bg-[#f0f0f0] w-[80px]" ></div>

              </div>
               
            </div> 
    )
}

const ShimmerBody = () =>{
    return (
     
     <div className="flex justify-between flex-wrap mt-[40px] ">

        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />

    </div>

    )
}

export default ShimmerBody;