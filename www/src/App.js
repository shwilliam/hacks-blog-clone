import React from 'react'
import usePosts from './hooks/usePosts'
import PostList from './components/PostList'

const App = () => {
  const [posts] = usePosts()

  return (
    <div className="App">
      <h1>hello world</h1>
      <PostList posts={posts} />
    </div>
  )
}

export default App
