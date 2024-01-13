import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from './Shimmer'



const CategoryItems = (props)=>{

    const {categoryList} = props

    let categoryList2 = []
    if (categoryList && categoryList.length){
        categoryList2 = categoryList
    }
    
    
    return (
        <div className="flex flex-col gap-3 ">
            {
              categoryList2.map((cItem)=>{
                return (
               <div key={cItem?.card?.info?.id}  className="flex justify-between" >
                <p>{cItem?.card?.info?.name}</p>
                <p>{ '₹ '+ cItem?.card?.info?.price/100}</p>
               </div>
                )
              })
            }
                

        </div>
    )
}


const Menu = (props)=>{
    
   const {menuItems} = props;

   
    return (
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-xl text-orange-500 ">{menuItems.title}</p>
        <CategoryItems categoryList={menuItems.itemCards} />
      </div>

    )
}

const Restaurant = ()=>{

    const resId = useParams()
    console.log(resId.resId)
    const [menuData,setMenuData] = useState([]);

    useEffect(()=>{fetchData()},[])

    const fetchData = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.2380555&lng=78.0077208&restaurantId=${resId.resId}`)
  
        
        const json = await data?.json()
        setMenuData(json?.data?.cards)
    }

    if( !menuData || menuData.length===0){
        return <Shimmer />
    }

    
    const {name,totalRatingsString,areaName,costForTwoMessage,sla,aggregatedDiscountInfo} = menuData[0].card.card.info
    const {cards} = menuData[2].groupedCard.cardGroupMap.REGULAR

    

    cards2 = cards.slice(1,cards.length)
    console.log(cards2[2].card.card.title)

 


    return (

  <div className="flex justify-center mt-[30px] ">

    <div className="w-[800px]  ">


  
   {/* Card 1 */}
   <div className="flex justify-between ">
    <div className=" flex flex-col  ">
    

        <div className=" flex flex-col  ">
            <p className="font-bold text-2xl   ">{name}</p>
            <p className="font-light text-[#8d8d8d]">{areaName}</p>
           <div className="flex gap-5 ">
            <p className="font-light text-[#8d8d8d]">{costForTwoMessage}</p>
            <p className="font-light text-[#8d8d8d]">{sla.lastMileTravelString}</p>
           </div>

           <p className="mt-5 text-[#434242]">{aggregatedDiscountInfo.descriptionList[0].meta}</p>
            
        </div>

    </div>
    <p className="text-green-600 font-medium ">{totalRatingsString}</p>
   </div>
    

    <div className="w-[800px] bg-slate-400 h-[1px] border-dashed mt-8 "></div>

   {/* Card 2 */}

   <div className="flex flex-col gap-6 ">
    {
       cards2.map((c,index)=>(
        <Menu key={index} menuItems = {c.card.card}  />
       ))
       
    }

   </div>




   </div>



  </div>

    )
}

export default Restaurant