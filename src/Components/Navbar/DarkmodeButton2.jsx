import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../Wrappers/ThemeWrapper'
import { useAnimate } from 'framer-motion'

function DarkmodeButton2() {
   const { darkmode, setDarkmode } = useContext(ThemeContext)

   const [scope, animate] = useAnimate()

   useEffect(() => {
      animate([
         ['#moon', { x: darkmode ? 100 : 0 }],
         ['#sun', { x: darkmode ? 0 : -100 }, { at: '<' }]
      ])
   }, [darkmode, animate])

   return (
      <button ref={scope} onClick={() => setDarkmode(!darkmode)} className='relative h-10 overflow-hidden duration-500 bg-gray-200 rounded-full w-14 dark:bg-gray-800'>
         <svg
            id='moon'
            className='absolute top-[9px] left-[16px] w-6 h-6 text-dark'
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
         >
            <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278zM4.858 1.311A7.269 7.269 0 001.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 005.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            <path d="M10.794 3.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387a1.734 1.734 0 00-1.097 1.097l-.387 1.162a.217.217 0 01-.412 0l-.387-1.162A1.734 1.734 0 009.31 6.593l-1.162-.387a.217.217 0 010-.412l1.162-.387a1.734 1.734 0 001.097-1.097l.387-1.162zM13.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.156 1.156 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.156 1.156 0 00-.732-.732l-.774-.258a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
         </svg>
         <svg
            id='sun'
            className="relative top-0.5 w-7 h-7 left-[14px] text-light"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
         </svg>
      </button>
   )
}

export default DarkmodeButton2