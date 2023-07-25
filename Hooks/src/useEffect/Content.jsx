import React, { useEffect, useState } from 'react'

function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  // const [show, setShow] = useState(false)
  // useEffect(() => {
  //   document.title = title
  // })
  // console.log(posts)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      })
  },[])
  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Content
