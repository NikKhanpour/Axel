import React from 'react'
import phone from '../../assets/images/MidComponentPhone.png'

function Dive() {
   return (
      <div className='container mt-96 px-12 lg:mt-64 lg:px-32'>
         <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='flex flex-col text-center lg:w-1/2 lg:text-start'>
               <h1 className='font-inter text-6xl font-bold text-dark dark:text-light lg:text-4xl'>
                  Dive into the Future
               </h1>
               <p className='mt-4 font-inter text-2xl font-medium text-dark dark:text-light'>
                  In a world where people constantly have phone in their hands, the need for online opportunities is growing. We have a solution - fully digital access to all information and services related to the interior and design itself. Everything for a carefree stay in the palm of a hand.
               </p>
            </div>
            <img className='mt-24 h-[500px] w-[250px] lg:mt-0 lg:h-[600px]' src={phone} alt="phone" />
         </div>
      </div>
   )
}

export default Dive