import React from 'react'
import PostList from './components/PostList'

// global styles
import './styles/style.css'

const App = () => (
  <div id="app">
    <header>
      <h1>WP + React</h1>
    </header>
    <main>
      <PostList />
    </main>
  </div>
)

export default App
