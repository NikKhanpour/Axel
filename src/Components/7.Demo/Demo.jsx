import React from 'react'
import googlePlay from '../../assets/images/google-play.svg'
import appStore from '../../assets/images/apple-store.svg'
import { cardData } from '../../DataForPage/dummyData'

function Demo() {
   return (
      <div className='container mx-auto mb-52 mt-52 px-12 lg:mt-0 lg:px-32'>
         <div className='flex flex-col items-center justify-center text-center lg:text-start'>
            <h1 className='font-inter text-4xl font-bold text-dark dark:text-light lg:text-6xl'>
               Request a demo
            </h1>
            <p className='mt-8 font-inter text-2xl font-medium text-dark dark:text-light'>
               Explore all the nice stuff that AxeL is providing and much more...
            </p>
            <div className='mt-12 flex flex-col items-center justify-between space-y-8 lg:w-3/5 lg:flex-row lg:space-y-0'>
               <img className='w-full lg:h-12 lg:w-fit' src={googlePlay} alt="googleplay" />
               <img className='w-full lg:h-12 lg:w-fit' src={appStore} alt="appstore" />
            </div>
            <div className='mt-12 flex flex-col items-center space-y-6 text-center lg:flex-row lg:space-x-16 lg:space-y-0'>
               {cardData.map(item => (
                  <div key={item.id} className='space-y-4 rounded-xl border border-dark border-opacity-20 px-8 py-6 backdrop-blur-md backdrop-opacity-50 dark:border-light dark:border-opacity-20 dark:backdrop-brightness-75'>
                     <h4 className='font-inter font-medium text-dark dark:text-light'>
                        {item.title}
                     </h4>
                     <p className='font-inter text-dark dark:text-light'>
                        {item.text}
                     </p>
                     <div className='h-[1px] bg-dark bg-opacity-30 dark:bg-light dark:bg-opacity-30' />
                     <p className='text-dark dark:text-light dark:text-opacity-60'>
                        see more
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Demo