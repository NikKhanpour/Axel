import React from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext()

function ThemeWrapper({ children }) {
   const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') ? JSON.parse(localStorage.getItem('darkmode')) : false)

   useEffect(() => {
      localStorage.setItem('darkmode', JSON.stringify(darkmode))
      if (darkmode) {
         document.body.classList.add("dark")
         document.body.classList.add("duration-500")
         document.body.classList.add("bg-dark")
      } else {
         document.body.classList.remove("dark")
         document.body.classList.remove("duration-500")
         document.body.classList.remove("bg-dark")
      }
   }, [darkmode])

   return (
      <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeWrapper