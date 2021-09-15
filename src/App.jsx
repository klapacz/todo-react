import { Box, Container, Typography } from '@material-ui/core';
import React from 'react'

import AddTodoForm from './components/AddTodoForm'
import TodosList from './components/TodosList'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={3}>
        <Typography variant="h2" component="h1" color="textSecondary" align="center">
          Todo
        </Typography>
      </Box>

      <Box mb={2}>
        <AddTodoForm />
      </Box>

      <TodosList />
    </Container>
  )
}
