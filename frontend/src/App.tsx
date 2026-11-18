import React, { useEffect } from 'react'
import { useDevice } from './hooks/useDevice'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const{isMobile,isTablet,isDesktop}=useDevice()
 
  return (
    <div className='w-full min-h-screen  grid grid-cols-1 grid-rows-[4rem_1fr_4rem]  bg-pink-300'>
    
<Navbar/>
<Main/>
<Footer/>
    </div>
  )
}

export default App
