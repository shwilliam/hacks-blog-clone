import React from 'react'
import {Box, Heading, Text, Paragraph} from 'grommet'
import useUsers from '../hooks/useUsers'

export default ({id, title, author, date, excerpt}) => {
  const [, user] = useUsers()

  return (
    <Box>
      <Heading level="2" margin="none">
        {title.rendered}
      </Heading>
      <Text>
        By {user(author).name} ({date})
      </Text>
      <Paragraph
        margin="none"
        dangerouslySetInnerHTML={{__html: excerpt.rendered}}
      />
    </Box>
  )
}
