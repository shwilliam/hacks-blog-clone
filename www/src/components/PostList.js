import React from 'react'

export default ({posts, ...props}) => (
  <ul>
    {posts.map(({id, date, title, excerpt, author}) => (
      <li key={id}>
        <h2>{title.rendered}</h2>
        <p>
          By {author} ({date})
        </p>
        <p dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
      </li>
    ))}
  </ul>
)
