import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Data({ data }) {
   return (
      <div className='lg:w-3/5 mt-20 lg:mt-0'>
         <AnimatePresence mode='wait'>
            {data.map(item => (
               <motion.div
                  key={item.id}
                  className='flex flex-col lg:w-3/5 mx-auto relative font-inter font-medium text-dark dark:text-light lg:justify-between'
               >
                  <motion.div
                     initial={{ x: 400, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: 400, opacity: 0 }}
                     transition={{ type: 'spring', stiffness: 200, damping: 30, }}
                     className='relative'
                  >
                     <h3 className='text-2xl relative'>{item.title}</h3>
                     <p className='text-2xl relative'>{item.text}</p>
                  </motion.div>
                  <motion.img
                     initial={{ x: 500, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: 500, opacity: 0 }}
                     transition={{ type: 'spring', stiffness: 200, damping: 30, delay: 0.1 }}
                     src={item.img}
                     alt={item.title}
                     className={`absolute ${item.id === '1' ? 'h-[600px]' : 'h-[400px]'} ${item.id === '1' ? '-top-52' : 'top-0'}  left-0 -z-10`}
                  />
               </motion.div>
            ))}
         </AnimatePresence>

      </div>
   )
}

export default Data