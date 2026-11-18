// frontend/src/hooks/useDevice.ts
import { useEffect, useState } from "react";

export interface UseDeviceReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

export function useDevice(): UseDeviceReturn {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return {
    isMobile: windowWidth < 640,
    isTablet: windowWidth >= 640 && windowWidth < 1024,
    isDesktop: windowWidth >= 1024,
    width: windowWidth,
  };
}

  // let isMobile: boolean;
  // let isTablet: boolean;
  // let isDesktop: boolean;
  // let width: number;

 
// export function useDevice() {

// const[windowWidth,setwindowWidth]=useState(window.innerWidth)



// useEffect(()=>{

// const handleSize=()=>setwindowWidth(window.innerWidth)

// window.addEventListener("resize",handleSize)

// return () => window.removeEventListener('resize', handleSize);

// },[])



// return {

// isMobile: windowWidth < 640,

// isTablet: windowWidth >= 640 && windowWidth < 1024,

// isDesktop: windowWidth >= 1024,

// width: windowWidth,

// };



// } 