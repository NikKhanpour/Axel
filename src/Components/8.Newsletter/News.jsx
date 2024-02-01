import React from 'react'

function News() {
   return (
      <div className='conitaner relative mx-auto w-5/6 lg:w-3/4'>
         <div className='absolute -top-24 z-30 flex w-full flex-col items-center justify-between rounded-xl bg-dark px-8 py-12 text-center lg:flex-row lg:p-20 lg:text-start'>
            <div>
               <h1 className='text-bold font-inter text-4xl text-light'>
                  Sign up for our newsletter
               </h1>
               <p className='mt-4 font-inter text-xl text-light'>
                  Join our newsletter and get news in your inbox every week!
               </p>
            </div>
            <div className='mt-5 flex flex-col items-center space-y-4 lg:mt-0 lg:flex-row lg:space-x-4 lg:space-y-0'>
               <input className='rounded-lg border border-opacity-50 bg-dark px-4 py-2 text-light outline-none duration-300 focus:border-blue-500 focus:border-opacity-100' placeholder='Email' type="text" />
               <button className='w-full rounded-lg bg-blue-600 px-4 py-2 font-inter text-lg font-medium text-light duration-300 hover:bg-blue-800 lg:w-fit'>
                  Sign Up
               </button>
            </div>
         </div>
      </div>
   )
}

export default News