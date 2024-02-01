import React, { useState } from 'react'
import { tabsData } from '../../DataForPage/dummyData'
import { AnimatePresence, motion } from 'framer-motion'

function TabsParent() {
   const [selected, setSelected] = useState('0')

   return (
      <div className='container px-12 mx-auto mt-64'>
         <div className='flex flex-col lg:flex-row items-center justify-between'>
            <div className='lg:w-2/5 text-center lg:text-start'>
               <h3 className='text-4xl lg:text-6xl font-inter font-bold text-dark dark:text-light duration-500'>
                  Features
               </h3>
               <p className='text-xl mt-8 font-inter font-medium text-dark dark:text-light'>
                  AxeL offers many great features. You can create your own room,
                  request a service, buy modern lookiing furniture, sell a furniture
                  and so much more. Take a snek peek at each of them.
               </p>
            </div>
            <div className='lg:w-3/6 text-center lg:text-start mt-24 lg:mt-0 flex flex-col items-center'>
               <div className='flex flex-wrap bg-gray-200 relative rounded-xl w-fit justify-center lg:justify-start dark:bg-gray-800 space-x-4 duration-500'>
                  {tabsData.map(item => (
                     <button onClick={() => setSelected(item.id)} className='relative text-xl font-semibold px-2 lg:px-4 py-3 text-dark dark:text-light'>
                        <p className='relative z-30'>{item.label}</p>

                        {item.id === selected && (
                           <motion.div layoutId='tab' className='absolute w-full h-full top-0 left-0 z-10 rounded-xl shadow-2xl drop-shadow-2xl shadow-gray-500 dark:shadow-gray-700 bg-gray-300 dark:bg-gray-900'>
                           </motion.div>
                        )}
                     </button>
                  ))}
               </div>
               <AnimatePresence mode='wait'>
                  {tabsData.map(item => (
                     item.id === selected && (
                        <motion.div
                           key={item.id}
                           className='flex items-center justify-between space-x-4 lg:mx-4 mt-12'
                        >
                           <motion.div
                              className='w-3/5'
                              initial={{ y: 200, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 200, opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 30, delay: 0.1 }}
                           >
                              <h4 className='text-2xl font-semibold font-inter text-dark dark:text-light'>
                                 {item.label}
                              </h4>
                              <p className='text-xl pt-5 font-medium font-inter text-dark dark:text-light'>
                                 {item.desc}
                              </p>
                           </motion.div>
                           <motion.img
                              initial={{ y: 200, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 200, opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              className='h-40' src={item.img} alt={item.label}
                           />
                        </motion.div>
                     )
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </div>
   )
}

export default TabsParent