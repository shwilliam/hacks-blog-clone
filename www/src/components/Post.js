import React from 'react'
import {Box, Heading, Text, Paragraph} from 'grommet'

export default ({id, title, author, date, excerpt}) => (
  <Box>
    <Heading level="2" margin="none">
      {title.rendered}
    </Heading>
    <Text>
      By {author} ({date})
    </Text>
    <Paragraph
      margin="none"
      dangerouslySetInnerHTML={{__html: excerpt.rendered}}
    />
  </Box>
)
