import React, { useContext } from 'react'
import ThemeProvider, { ThemeContext } from './ThemeContext'
import ContentContext from './ContentContext'

function AppContext() {
  const context = useContext(ThemeContext)

  return (
   
      <div>
        <button onClick={context.handleTheme}>Toggle theme</button>
        <ContentContext />
      </div>
  )
}

export default AppContext
