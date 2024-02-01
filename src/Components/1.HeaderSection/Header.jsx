import React from 'react'
import headerPhone from '../../assets/images/headerImage.png'

function Header() {
   return (
      <header className='container mx-auto flex flex-col items-center justify-center px-12 pt-32 lg:flex-row lg:justify-between lg:px-[180px]'>
         <div className='block duration-500 lg:w-3/5'>
            <div className='font-russonOne text-4xl font-medium text-dark dark:text-light lg:text-6xl'>
               <p>
                  AxeL Brand new
               </p>
               <span className='font-petitFormal font-bold'>Furniture</span>
               <p>Mobile App</p>
            </div>
            <p className='mt-6 w-3/5 text-2xl font-semibold text-dark dark:text-light'>
               Giving your home a propper makeover never was this easy. Modern and stylish furniture for decent prices. Take a look what we offer with simple button click.
            </p>
         </div>
         <div>
            <img className='relative z-30 mt-24 h-[500px] lg:mt-0 lg:h-[600px]' src={headerPhone} alt="phone" />
         </div>
      </header>
   )
}

export default Header