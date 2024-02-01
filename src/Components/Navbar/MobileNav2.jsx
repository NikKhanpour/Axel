import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
// import DarkmodeButton from './DarkmodeButton'
import { AnimatePresence, motion } from 'framer-motion'
import { navbarData } from '../../DataForPage/dummyData'
import DarkmodeButton2 from './DarkmodeButton2'

function MobileNav2() {
   const [sidebar, setSidebar] = useState(false)

   return (
      <>
         <div className='w-full fixed z-40 top-0 shadow-xl lg:hidden bg-white dark:bg-dark'>
            <div className='container py-4 px-4 flex items-center justify-between'>
               <motion.button onClick={() => setSidebar(true)} animate={sidebar ? 'open' : 'close'}>
                  <motion.svg
                     variants={{
                        close: { scale: 1, transition: { delay: 1.3 } },
                        open: { scale: 0 }
                     }}
                     className="w-10 h-10 text-dark dark:text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </motion.svg>
               </motion.button>
               <div>
                  <img className='h-11 ms-4' src={logo} alt="logo" />
               </div>
               <div>
                  <DarkmodeButton2 />
               </div>
            </div>
         </div>
         <AnimatePresence animate={sidebar ? 'open' : 'close'}>
            {sidebar && (
               <motion.div
                  variants={{
                     open: {
                        x: 0,
                        transition: {
                           type: 'spring',
                           stiffness: 200,
                           damping: 40,
                           delay: 0.1,
                        }
                     },
                     close: {
                        x: '-102%',
                        transition: {
                           type: 'spring',
                           stiffness: 200,
                           damping: 40,
                           when: 'afterChildren'
                        }
                     },
                  }}
                  initial='close'
                  animate='open'
                  exit='close'
                  className='inset-0 fixed z-50 h-full px-8 flex flex-col  justify-center bg-blue-600 dark:bg-dark'
               >
                  <motion.svg
                     onClick={() => setSidebar(false)}
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: -100, opacity: 0 }}
                     className="absolute top-6 left-5 w-12 h-12 cursor-pointer text-light"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                  <motion.div className='space-y-6'
                     variants={{
                        open: {
                           transition: { delayChildren: 0.5, staggerChildren: 0.1 }
                        }
                     }}>
                     {navbarData.map(item => (
                        <motion.p
                           key={item.id}
                           variants={{
                              open: {
                                 x: 0, opacity: 1,
                                 transition: { type: 'spring', stiffness: 400, damping: 50 }
                              },
                              close: {
                                 x: -100, opacity: 0, transition: { duration: 0.3, type: 'spring', stiffness: 400, damping: 50 }
                              }
                           }}
                           className='text-4xl font-semibold font-inter text-light'
                        >
                           {item.name}
                        </motion.p>
                     ))}
                  </motion.div>
               </motion.div>

            )}
         </AnimatePresence>
      </>
   )
}

export default MobileNav2