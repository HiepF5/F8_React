import React, { useMemo, useRef, useState } from 'react'

function AppMemo() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const nameRef = useRef()
  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }])
    setName('');
    setPrice('');
    nameRef.current.focus()
  }
  console.log(products)
  const total = useMemo(()=>{
    const result = products.reduce((result, item) => {
      console.log('tinhs toan lai')
      return result + item.price
    },0)
    return result;
  }, [products])

  return (
    <div>
      <input ref={nameRef} value={name} placeholder='Enter name...' onChange={(e) => setName(e.target.value)} />
      <br />
      <input value={price} placeholder='Enter price...' onChange={(e) => setPrice(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <h1>Total: {total}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {' '}
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppMemo
