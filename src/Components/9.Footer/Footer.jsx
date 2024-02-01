import React from 'react'
import logo from '../../assets/images/logo.svg'
import googlePlay from '../../assets/images/google-play.svg'
import appStore from '../../assets/images/apple-store.svg'
import { FooterData1 } from '../../DataForPage/dummyData'
import { FooterData2 } from '../../DataForPage/dummyData'
import { FooterData3 } from '../../DataForPage/dummyData'

function Footer() {
   return (
      <div className='container mx-auto mt-80 px-12 lg:mt-52 lg:px-32'>
         <div className='flex flex-col'>
            <div className='flex flex-col justify-between lg:flex-row'>
               <div className='flex flex-col space-y-4'>
                  <img className='h-12' src={logo} alt="logo" />
                  <img className='h-8' src={googlePlay} alt="googlePlay" />
                  <img className='h-8' src={appStore} alt="appStore" />
               </div>
               <div className='mt-8 flex flex-col space-y-4 lg:mt-0'>
                  {FooterData1.map(item => (
                     <p className='font-inter font-semibold text-dark dark:text-light' key={item.id}>
                        {item.text}
                     </p>
                  ))}
               </div>
               <div className='my-6 block h-[1px] bg-dark bg-opacity-50 dark:bg-light dark:bg-opacity-80 lg:hidden' />
               <div className='flex flex-col space-y-4'>
                  {FooterData2.map(item => (
                     <p className='font-inter font-semibold text-dark dark:text-light' key={item.id}>
                        {item.text}
                     </p>
                  ))}
               </div>
               <div className='my-6 block h-[1px] bg-dark bg-opacity-50 dark:bg-light dark:bg-opacity-80 lg:hidden' />
               <div className='flex flex-col space-y-4'>
                  {FooterData3.map(item => (
                     <p className='font-inter font-semibold text-dark dark:text-light' key={item.id}>
                        {item.text}
                     </p>
                  ))}
               </div>
            </div>
            <div className='mt-12 h-[1px] bg-dark bg-opacity-20 dark:bg-light dark:bg-opacity-20 lg:mt-24' />
            <div className='mx-auto mt-4 flex items-center justify-between pb-6 text-opacity-70 dark:text-opacity-70 lg:mx-0 lg:px-32'>
               <p className='hidden font-inter text-dark dark:text-light lg:block'>
                  Axel
               </p>
               <p className='font-inter text-dark dark:text-light'>
                  Copyright 2023 page by Nick Web Dev
               </p>
            </div>
         </div>
      </div>
   )
}

export default Footer