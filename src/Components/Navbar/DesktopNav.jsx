import React from 'react'
import logo from '../../assets/images/logo.svg'
import { navbarData } from '../../DataForPage/dummyData'
import DarkmodeButton2 from './DarkmodeButton2'
function DesktopNav() {
   return (
      <div className='w-full hidden lg:block fixed top-0 shadow-xl z-40 bg-white dark:bg-dark duration-[450ms]'>
         <div className='container flex items-center justify-between px-32 lg:px-[180px] py-2 mx-auto'>
            <div className='flex items-center space-x-12'>
               <img className='h-10' src={logo} alt="logo" />
               <DarkmodeButton2 />
            </div>
            <div className='flex space-x-6'>
               {navbarData.map(item => (
                  <button key={item.id} className='text-lg font-semibold duration-500 font-inter hover:text-blue-600 hover:dark:text-blue-400 text-dark dark:text-light'>
                     {item.name}
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default DesktopNav