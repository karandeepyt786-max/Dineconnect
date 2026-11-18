import React, { useEffect } from 'react'
import { useDevice } from './hooks/useDevice'

const App = () => {
  const{isMobile,isTablet,isDesktop}=useDevice()
 
  return (
    <div>
      <h1 className='text-red-500'>hlo</h1>
      {isMobile && <h1>is mobile</h1>}
      {isTablet && <h1>is Tablet</h1>}
      {isDesktop && <h1>is Desktop</h1>}
    </div>
  )
}

export default App
