import React from 'react'
import {Grommet, Heading} from 'grommet'
import usePosts from './hooks/usePosts'
import PostList from './components/PostList'
import theme from './styles/theme'

// global stylesheet
import './styles/style.css'

const App = () => {
  const [posts] = usePosts()

  return (
    <Grommet theme={theme}>
      <header>
        <Heading>WP + React</Heading>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
    </Grommet>
  )
}

export default App
