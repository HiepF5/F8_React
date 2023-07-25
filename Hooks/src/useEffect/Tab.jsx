import React, { useEffect, useState } from 'react'
const tabs = ['posts', 'users', 'comments']
function Tab() {
  // console.log('render')
  const [type, setType] = useState('posts')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // setPosts()
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('mount')
        setPosts(data)
      })
      return () => {
        console.log('unmount')
      }
  }, [type])

  return (
    <>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Tab
