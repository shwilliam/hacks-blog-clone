import React from 'react'
import usePosts from '../hooks/usePosts'
import Loading from './Loading'
import PlainList from './PlainList'
import Post from './Post'

export default props => {
  const [posts] = usePosts()

  if (!posts.length) return <Loading />
  return (
    <PlainList>
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </PlainList>
  )
}
