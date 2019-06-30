import React, {useState, useEffect} from 'react'
import {WP_URL} from '../constants'
import PlainList from './PlainList'
import Loader from './Loader'

const PostList = props => {
  // get & cache wordpress posts
  const [posts, setPosts] = useState([])

  // get wordpress posts when component mounts
  useEffect(() => {
    fetch(`${WP_URL}/posts`)
      .then(res => res.json())
      .then(setPosts)
  }, [])

  if (!posts.length) {
    return <Loader />
  } else {
    return (
      <PlainList>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p>{post.date}</p>

            {/* wordpress api returns html so we have to use `dangerouslySetInnerHTML` */}
            <p
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered,
              }}
            />
          </li>
        ))}
      </PlainList>
    )
  }
}

export default PostList
