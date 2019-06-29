import React from 'react'

import PlainList from './PlainList'
import Post from './Post'

export default ({posts, ...props}) => (
  <PlainList>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </PlainList>
)
