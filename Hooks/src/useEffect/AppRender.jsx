import React, { useState } from 'react'
import ContentRender from './ContentRender';

function AppRender() {
  const [show, setShow] = useState(false);
  return (
    <>
    <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <ContentRender/>}
    </>
  )
}

export default AppRender