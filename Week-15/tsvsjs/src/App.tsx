"use server"

import { useState, useEffect } from 'react'

import './App.css'

type Post = {
  userId: number
  id: number
  title: string
  body: string
  desc?: string
}

function App() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p> {post.body} </p>
        </div>
      ))}
    </>
  )
}

export default App

