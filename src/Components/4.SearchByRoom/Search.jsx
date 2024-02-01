import React from 'react'
import phone from '../../assets/images/midPhone2.png'
import { room } from '../../DataForPage/dummyData'

function Search() {
   return (
      <div className='container mt-32 px-12 lg:mt-52 lg:px-32'>
         <div className='flex flex-col items-center justify-between lg:flex-row'>
            <img className='mt-24 h-[500px] w-[250px] lg:mt-0 lg:h-[600px]' src={phone} alt="phone" />
            <div className='mt-12 flex flex-col space-y-8 lg:mt-0'>
               {room.map(item => (
                  <div className='flex items-center space-x-4' key={item.id}>
                     <img className='h-12 w-12' src={item.img} alt={item.id} />
                     <p className='font-inter text-xl text-dark dark:text-light'>
                        {item.name}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Search