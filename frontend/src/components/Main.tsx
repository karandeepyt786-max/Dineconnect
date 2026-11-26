import React, { ComponentType, isValidElement, ReactNode, useState } from "react";
import { useDevice } from "../hooks/useDevice";
import { Tokens } from "../utils/Images";

import { MapPin, Search,BadgeCheck,ArrowRight ,Flame ,Soup ,Utensils ,Sprout ,Heart ,Star,Plus ,IndianRupee ,ShieldCheck ,Leaf ,Motorbike,Shop} from "../utils/Icons";
import { color } from "framer-motion";

type Iconsprops =string | ComponentType<{className?:string}> | ReactNode

  type DarkBrownButton={
    text:string,
    icon?:Iconsprops,
  }

  type DiningEcosystemCard={
    title:string,
    titleicon:{Data:{icon:Iconsprops,Size:number,Color?:string}},
    heading:string,
    desc:string,
    quote:string,
    quoteicon:{Data:{icon:Iconsprops,Size:number,Color?:string}},
    BTNtext:string,
    BTNicon:{Data:{icon:Iconsprops,Size:number,Color?:string}}
  }

const rendericon =function P(icon:Iconsprops,Size:number,Color?:string){
  
  if(icon){
    
    if(typeof icon=="string"){
      return <img style={{width:`${Size}px`,height:`${Size}px`}} src={`${icon}`}/>
    }
    
    else if(typeof icon === "function" || (typeof icon=="object" && !isValidElement(icon))){
      
      const IconComponent=icon as unknown as ComponentType<{className?:string; size?:string|number}>
    return <IconComponent  className={`text-[${Color}]`} size={`${Size?Size:10}rem`}/>
    }
    else{
      console.log("another icon type")
    }
  } 
  else{
    console.log("icon not available")
  }

  
}

function DarkredBTN(props:DarkBrownButton){



   
  return(
    <div style={{backgroundColor:`${Tokens.colors.OrangeLight}`}} className={`FindFood flex ${Tokens.size.Paragraph}  gap-2 text-white  justify-center items-center py-2 rounded-md`}> {props.text} {rendericon(props.icon,1)}  </div>
  ) 
}

function SearchMeal() {
  const placeholderText = "Search butter chicken, thali, or chef name..."
  return (
    <>

    <div className="py-7">

      <span className="verifiedRestaurant flex gap-2 items-center justify-center w-fit bg-green-200 text-[#236B3E] text-sm px-3 py-1 my-4 rounded-2xl">
     <BadgeCheck size={"1rem"}/>   Verified Restaurants & Authentic Home Chefs
      </span>
      <h1 className={`${Tokens.size.Heading1} font-bold leading-[1.1] [word-spacing:-0.10em] tracking-tighter`}>Fresh Flavors From Local Kitchens to Your Table</h1>
      <p style={{color:`${Tokens.colors.ParaColor}`}} className={` ${Tokens.size.Paragraph} py-3`}>
        Order signature restaurant classics or wholesome home-cooked meals from
        trusted neighborhood chefs.
      </p>

      <div className="flex flex-col gap-3 p-2 m-2 bg-white Search rounded-xl">
        
        <div style={{backgroundColor:`${Tokens.colors.MainCream}`}} className={`LocationData rounded-lg pl-2 flex items-center gap-2 `}>

          <div className="mapLogo ">
            <MapPin size={"1rem"} style={{color:`${Tokens.colors.MainRed}`}} className={``}/>
          </div>

          <div className={`Maplocation flex flex-col `}>
            <span style={{color:`${Tokens.colors.MainRed}`}} className={`${Tokens.size.TinyWord}`}>Location</span>
            <span className="text-sm font-medium">Ludhiana,Punjab</span>
          </div>
        </div>

        <div className="flex gap-2 SearchInput">
          <div className="SearchIcon">
            <Search size={"1rem"} color={`${Tokens.colors.ParaColor}`}/>
          </div>
           
            <input className={`SearchData outline-none ${Tokens.size.TinyWord} `} size={placeholderText.length} type="text" placeholder={`${placeholderText}`} name="" id="" />
        </div>

<DarkredBTN icon={ArrowRight} text={"Find Food"}/>
      </div>

      <div className={`PopularSearches flex ${Tokens.size.TinyWord} w-full gap-10`}>
<div style={{color:`${Tokens.colors.MainRed}`}} className={`Heading  whitespace-nowrap shrink-0`}>Popular searches:</div>
<ul className="flex justify-around flex-1 min-w-0 Items ">
  <li>Dal Makhni</li>
  <li>Satvik Tiffin</li>
  <li>Tandoori Naan</li>
  <li>Paneer Tikka</li>
</ul>
      </div>

    </div>


    </>
  );
}

const DiningEcosystemCardData=(props:DiningEcosystemCard)=>{
  return(
    <>

<div className="p-3 bg-white RestaurantAndHome rounded-3xl">
  
  <div className="flex items-center justify-between title">
    <div className={`Topic w-fit ${Tokens.size.TinyWord} px-4 py-1 rounded-2xl`} style={{backgroundColor:`${Tokens.colors.Lightpink}`,color:`${Tokens.colors.Brown}`}}>{props.title}</div>
    {/* <img src={`${props.titleicon}`} alt="Shop" className={`w-4 h-4`} /> */}
    {rendericon(props.titleicon.Data.icon,props.titleicon.Data.Size)}
  </div>
  

<div className="py-3 leading-5 Heading">
  <div className={`Head ${Tokens.size.Heading3} font-bold `}>{props.heading}</div>
  <div className={`desc ${Tokens.size.TinyWord}`}>{props.desc}</div>
  <div className={`flex additionalFeatures p-2 rounded-md gap-1 my-3`} style={{backgroundColor:`${Tokens.colors.LightGray}`}}>
  {/* <Flame size={"1rem"} color={`${Tokens.colors.OrangeLight}`}/> */}
  {rendericon(props.quoteicon.Data.icon,props.quoteicon.Data.Size,props.quoteicon.Data.Color)}
    <div className={`Desc ${Tokens.size.TinyWord} font-bold`}>{props.quote}</div>
  </div>
  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="w-full bg-cover aspect-video " alt="" />
  <div className="my-3 BrowseRestaurants">
  <DarkredBTN icon={props.BTNicon.Data.icon}  text={`${props.BTNtext}`}/>
  </div>

</div>
  
</div>

  
  
    </>
  )
}

export function DiningEcosystem() {

  return (
  <>

       <div style={{backgroundColor:`${Tokens.colors.LightGray}`}} className={``}>
    
 <div className="pb-8 Heading">
     <div className={`Title ${Tokens.size.TinyWord} font-bold`} style={{color:`${Tokens.colors.MainRed}`}}>Curated Dining Ecosystem</div>
    <div className={`Heading ${Tokens.size.Heading2} font-bold`}>Two Distinct Culinary Worlds, One Platform</div>
 </div>
 
 <DiningEcosystemCardData 
 title={"Fast Kitchen Dispatch"} 
  titleicon={{Data:{icon:Shop,Size:20}}}  
  heading={"Neighborhood Restaurants"}
  desc={"Explore top-rated local restaurants with verified reviews and full menus."} 
  quote={"Tandoor specialties, multi-cuisine dining, quick 30-min delivery."} 
  quoteicon={{Data:{icon:Flame,Size:1,Color:`${Tokens.colors.OrangeLight}`}}}
  BTNtext={"Browse Restaurants"} 
  BTNicon={{Data:{icon:Utensils,Size:20}}}
  />
 
 </div>
  </>
)
}

export function DailySelection() {
    type MealCategory = "All" | "Pure Veg" | "Home Tiffins" | "Chef Specials";
 const[mealCategory,setmealCategory]=useState<MealCategory>("All")
 const category:MealCategory[]=["All","Pure Veg","Home Tiffins","Chef Specials"]
  return (
  <>
    <h1>daily selection</h1>
   {/* <div className={`desc ${Tokens.size.Paragraph} `}>Hand-selected dishes prepared fresh with premium ingredients.</div>
      <ul className={`DailySectionsCategories flex gap-2 ${Tokens.size.Paragraph}`}>
        {category.map((ite)=>(
          
          <li className={`${mealCategory == ite ?`text-white`:``} px-5 py-1 rounded-3xl`} style={{backgroundColor:`${mealCategory == ite ?`${Tokens.colors.MainRed}`:``}`}} onClick={()=>{setmealCategory(ite)}}>{ite}</li>
          
        ))
      }</ul> */}
  </>
)
  
}

export function FssaiVerified() {
  return <h1>fssai</h1>;
}

export function PartnerDineconnect() {
  return <h1>Register as partner</h1>;
}

const Main = () => {
  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <div className="flex flex-col justify-between h-auto bg-[#FAF2EE] px-4 gap-6">
      <SearchMeal />
      <DiningEcosystem />
      <DailySelection />
      <FssaiVerified />
      <PartnerDineconnect />
    </div>
  );
};

export default Main;

//search
//two dining ecosystem
//daily selection
//FSSAI
//Register as partner
