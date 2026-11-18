import React from 'react'
import { useDevice } from '../hooks/useDevice'
const Main = () => {
    const{isMobile,isTablet,isDesktop}=useDevice()
  
  return (
    <div className='bg-blue-300'>
      {isMobile && <h1>isMobile</h1>}
      {isTablet && <h1>isTablet</h1>}
      {isDesktop && <h1>isDesktop</h1>}
    </div>
  )
}

export default Main
