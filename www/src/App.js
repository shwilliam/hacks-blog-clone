import React from 'react'
import {Grommet, Heading} from 'grommet'
import PostList from './components/PostList'

import './styles/style.css'
import theme from './styles/theme'

export default () => (
  <Grommet theme={theme}>
    <header>
      <Heading>WP + React</Heading>
    </header>
    <main>
      <PostList />
    </main>
  </Grommet>
)
