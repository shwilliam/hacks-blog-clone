import React from 'react'
import PostList from './components/PostList'
import './styles/style.css'

export default () => (
  <div id="app">
    <header>
      <h1>WP + React</h1>
    </header>
    <main>
      <PostList />
    </main>
  </div>
)
