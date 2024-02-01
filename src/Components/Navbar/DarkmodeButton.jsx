import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../Wrappers/ThemeWrapper'
import { useAnimate } from 'framer-motion'

function DarkmodeButton() {
   const { darkmode, setDarkmode } = useContext(ThemeContext)
   const [scope, animate] = useAnimate()

   useEffect(() => {
      animate([
         ['#dark', { x: darkmode ? 0 : 100 }],
         ['#light', { x: darkmode ? -100 : 0 }, { at: '<' }]
      ])
   }, [darkmode, animate])

   return (
      <button
         ref={scope}
         onClick={() => setDarkmode(!darkmode)}
         className='w-[56px] h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 duration-500'
      >
         <svg id='dark' className="relative left-3 top-2 w-8 h-8 text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
         </svg>
         <svg id='light' className="relative left-3 -top-[22px] w-8 h-8 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
         </svg>
      </button>
   )
}

export default DarkmodeButton