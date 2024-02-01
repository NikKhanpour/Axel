import React from 'react'

function BgWrapper({ children }) {
   return (
      <div className='bg-light duration-500 dark:bg-dark lg:px-24'>
         <div className='container relative z-20 mx-auto -mt-10 h-full w-full overflow-hidden rounded-xl bg-wrapperBg bg-cover bg-no-repeat duration-500 dark:bg-wrapperDark'>
            {children}
         </div>
      </div>
   )
}

export default BgWrapper