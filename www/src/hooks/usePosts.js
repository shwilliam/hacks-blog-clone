import {useEffect, useState} from 'react'
import {WP_URL} from '../constants'

export default () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${WP_URL}/posts`)
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return [posts]
}
