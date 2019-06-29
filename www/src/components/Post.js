import React from 'react'
import useUsers from '../hooks/useUsers'

export default ({id, title, author, date, excerpt}) => {
  const [, user] = useUsers()

  return (
    <div>
      <h2>{title.rendered}</h2>
      <p>
        By {user(author).name} ({date})
      </p>
      <p dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
    </div>
  )
}
