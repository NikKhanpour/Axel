import React, { useContext } from 'react'
import flowLight from '../../assets/images/flow-light.png'
import flowDark from '../../assets/images/flow-dark.png'
import { ThemeContext } from '../Wrappers/ThemeWrapper'
function Flow() {
   const { darkmode } = useContext(ThemeContext)

   return (
      <div className='container hidden lg:block'>
         {!darkmode && <img src={flowLight} alt="flow" />}
         {darkmode && <img src={flowDark} alt="flow" />}
      </div>
   )
}

export default Flow