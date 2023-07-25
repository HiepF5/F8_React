import React, { useState } from 'react'
// const 
function Form() {
  const [name, setName] = useState('')
  console.log(name);
  return (
    <>
      <input onChange={e => setName(e.target.value)} placeholder='Nhap vao day' value={name} />
      {/* <input onChange={e => setName(e.target.value)} placeholder='Nhap vao day' value={name} /> */}
      <br/>
      <button onClick={() => setName('Nguyen Cong Hiep')}>Change</button>
    </>
  )
}

export default Form
