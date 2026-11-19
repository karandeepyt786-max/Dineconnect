import React from "react";
import { useDevice } from "../hooks/useDevice";
import { Tokens } from "../utils/Images";

import { MapPin, Search,BadgeCheck,ArrowRight ,Flame ,Soup ,Utensils ,Sprout ,Heart ,Star,Plus ,IndianRupee ,ShieldCheck ,Leaf ,Motorbike} from "../utils/Icons";

function SearchMeal() {
  const placeholderText = "Search butter chicken, thali, or chef name..."
  return (
    <>

    <div className="py-7">

      <span className="verifiedRestaurant flex gap-2 items-center justify-center w-fit bg-green-200 text-[#236B3E] text-sm px-3 py-1 my-4 rounded-2xl">
     <BadgeCheck size={"1rem"}/>   Verified Restaurants & Authentic Home Chefs
      </span>
      <h1 className={`${Tokens.size.Heading1} font-bold leading-[1.1] [word-spacing:-0.10em] tracking-tighter`}>Fresh Flavors From Local Kitchens to Your Table</h1>
      <p className={`text-[${Tokens.colors.ParaColor}] ${Tokens.size.Paragraph} py-3`}>
        Order signature restaurant classics or wholesome home-cooked meals from
        trusted neighborhood chefs.
      </p>

      <div className="Search bg-white p-2 rounded-xl flex flex-col gap-3">
        
        <div className={`LocationData rounded-lg pl-2 flex items-center gap-2 bg-[${Tokens.colors.MainCream}]`}>

          <div className="mapLogo ">
            <MapPin size={"1rem"} className={`text-[${Tokens.colors.MainRed}]`}/>
          </div>

          <div className={`Maplocation flex flex-col `}>
            <span className={`${Tokens.size.TinyWord} text-[${Tokens.colors.MainRed}]`}>Location</span>
            <span className="text-sm">Ludhiana,Punjab</span>
          </div>
        </div>

        <div className="SearchInput flex gap-2">
          <div className="SearchIcon">
            <Search size={"1rem"} color={`${Tokens.colors.ParaColor}`}/>
          </div>
           
            <input className={`SearchData outline-none ${Tokens.size.TinyWord} `} size={placeholderText.length} type="text" placeholder={`${placeholderText}`} name="" id="" />
        </div>

<div className={`FindFood flex ${Tokens.size.Paragraph} gap-2 text-white bg-[${Tokens.colors.OrangeLight}] justify-center items-center py-1 rounded-md`}>Find Food <ArrowRight size={"1rem"}/></div>

      </div>

      <div className={`PopularSearches flex ${Tokens.size.TinyWord} w-full gap-10`}>
<div className={`Heading text-[${Tokens.colors.MainRed}] whitespace-nowrap shrink-0`}>Popular searches:</div>
<ul className="Items flex justify-around min-w-0 flex-1 ">
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

export function DiningEcosystem() {
  return (
  <>
  <div className={`text-[${Tokens.colors.LightCream}]`}>

  <h1>two dining ecosystem</h1>
  </div>
  
  </>
)
}

export function DailySelection() {
  return <h1>daily selection</h1>;
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
    <div className="flex flex-col justify-between h-auto bg-[#FAF2EE] pl-4">
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
