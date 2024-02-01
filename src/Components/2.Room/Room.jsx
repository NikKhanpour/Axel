import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { sliderData } from '../../DataForPage/dummyData'
import Data from './Data'

function Room() {
   const buttons = [
      { id: '1', name: 'Room 1' },
      { id: '2', name: 'Room 2' },
      { id: '3', name: 'Room 3' }
   ]

   const [selected, setSelected] = useState('1')
   const [data, setData] = useState([])

   useEffect(() => {
      setData(sliderData.filter(item => item.id === selected))
   }, [selected])

   return (
      <div className='container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-start lg:justify-between pt-32 px-12 lg:px-32'>
         <div className='lg:w-3/5 lg:space-x-4 space-y-4'>
            <h2 className='font-inter lg:w-2/5 lg:ms-4 font-bold text-4xl lg:text-5xl mb-6 lg:mb-10 text-dark dark:text-light'>
               Check out some of the news
            </h2>
            {buttons.map(button => (
               <motion.button
                  key={button.id}
                  onClick={() => setSelected(button.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='lg:px-8 py-2 rounded-full w-[200px] lg:w-fit bg-blue-600 text-xl font-semibold text-light'
               >
                  {button.name}
               </motion.button>
            ))}
         </div>
         <Data data={data} />
      </div>
   )
}

export default Room