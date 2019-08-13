import React from 'react'
import PostList from './components/PostList'

// global styles
import './styles/style.css'

const App = () => (
  <div id="app">
    <header>
      <h1>Hacks Blog</h1>
    </header>
    <main>
      <PostList />
    </main>
  </div>
)

export default App
