import {useEffect, useState} from 'react'
import {WP_URL} from '../constants'

export default () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${WP_URL}/users`)
      .then(res => res.json())
      .then(setUsers)
  }, [])

  const user = id =>
    users.length && users.find(user => id === user.id)

  return [users, user]
}
