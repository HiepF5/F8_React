import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ParagraphContext() {
  const context = useContext(ThemeContext)
  return (
    <div className={context.theme}>ParagraphContext</div>
  )
}

export default ParagraphContext