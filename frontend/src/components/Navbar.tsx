import React from "react";
import { Logo } from "../utils/Images";
import { ShoppingCartPlus, UserRound, MapPin } from "../utils/Icons";
import { useDevice } from "../hooks/useDevice";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useDevice();

  return (
    <div className={`flex items-center justify-between  bg-white px-2`}>
      <img src={Logo} className={`w-auto h-[2.4rem] shrink-0 lg:mr-4 `} />

      { 
        <ul className={`md:flex  hidden lg:w-full gap-4 text-sm Features `}>
          <li className="text-[#A52504] font-bold">Explore</li  >
          <li className="whitespace-nowrap">Restaurants</li>

          <li className="whitespace-nowrap">Home Chefs</li>
          <li className={`flex gap-1 text-start  items-center  lg:hidden`}>
            <MapPin color="#A52504" size={"1rem"} /> <span>Ludhiana,</span>
            <span>Punjab</span>
          </li>
        </ul>
      }

      <div className={`Features h-[2rem] w-[6rem] lg:w-auto lg:gap-2 flex justify-between`}>

<div className={` gap-1 text-start items-center hidden lg:flex`}>
            <MapPin color="#A52504" size={"1rem"} /> <span>Ludhiana,</span>
            <span>Punjab</span>
          </div>
        
        <div className="flex items-center justify-between w-auto gap-1 px-4 Cart bg-[#FAF2EE] rounded-3xl">
          <ShoppingCartPlus className="shrink-0" size={"0.8rem"} color="#A52504" />
          <div className="CartNumbering text-[0.8rem]">2</div>
        </div>

        <div className="h-[2rem] w-[2rem] Profile bg-[#A52504]  rounded-full flex items-center justify-center">
          <UserRound size={"1rem"} color="white" className="shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
