import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { navbarData } from '../../DataForPage/dummyData'
import DarkmodeButton from './DarkmodeButton'

function MobileNav() {
   const [sidebar, setSidebar] = useState(false)

   return (
      <>
         <div className='w-full lg:hidden fixed top-0 shadow-xl z-40 bg-white dark:bg-dark duration-500'>
            <div className='container px-3 py-2 flex items-center justify-between'>
               <motion.div
                  animate={sidebar ? 'open' : 'close'}
                  variants={{
                     open: { scale: 0, opacity: 0, transition: { delay: 0 } },
                     close: { scale: 1, opacity: 1, transition: { delay: 1 } }
                  }}
               >
                  <motion.button
                     initial='close'
                     animate='open'
                     onClick={() => setSidebar(true)}>
                     <svg className="w-10 h-10 dark:text-light duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                     </svg>
                  </motion.button>
               </motion.div>
               <div>
                  <img className='ms-8 h-12' src={logo} alt="logo" />
               </div>
               <DarkmodeButton />
            </div>
         </div>
         <AnimatePresence>
            {sidebar && (
               <motion.div
                  animate='open'
                  initial='close'
                  exit='close'
                  variants={{
                     open: { x: 0, transition: { type: 'spring', stiffness: 250, damping: 50, delay: 0.09 } },
                     close: { x: -500, transition: { type: 'spring', stiffness: 250, damping: 50, when: 'afterChildren', delay: 0 } }
                  }}
                  className='fixed inset-0 lg:hidden flex flex-col items-start px-6 space-y-6 justify-center z-50 bg-blue-600 dark:bg-dark shadow-xl'
               >
                  <motion.button
                     onClick={() => setSidebar(false)}
                     variants={{
                        open: { x: 0, transition: { delay: 0.7 } },
                        close: { x: -100, transition: { delay: 0 } }
                     }}
                     className='absolute top-4 left-1.5'
                  >
                     <svg className="w-12 h-12 absolute text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </motion.button>

                  {navbarData.map(item => (
                     <motion.button
                        variants={{
                           open: { opacity: 1, transition: { delay: 1 } },
                           close: { opacity: 0, transition: { delay: 0 } },
                        }}
                        initial='close'
                        animate='open'
                        key={item.id}
                        className='font-inter text-4xl font-bold text-white dark:text-light'
                     >
                        {item.name}
                     </motion.button>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   )
}

export default MobileNav