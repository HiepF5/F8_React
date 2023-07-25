import React, { useState } from 'react'
const gifts = ['CPU i9', 'Iphone 14', 'Macbook']
function RamdomGift() {
  const [gift, setGift] = useState();
  function handleGift (){
    setGift((newgift)=>{
      const ramdom = Math.floor(Math.random()*gifts.length)
    console.log('render')
    newgift = gifts[ramdom]
      return newgift
    })
  }
  return (
    <>
      <div>RamdomGift</div>
      <button onClick={handleGift}>Nhận Thưởng</button>
      <div>{gift || 'Chưa có phần thưởng'}</div>
    </>
  )
}

export default RamdomGift
