import { Box, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { todosAtom, useAddTodo, useDeleteTodo } from './store'


function TodosList() {
  const [todos] = useAtom(todosAtom)
  const deleteTodo = useDeleteTodo()

  return (
    <Paper>
      <List>
        {todos.map(todo =>
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete todo" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </Paper>
  )
}

function App() {
  const addTodo = useAddTodo()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ text }) => {
    addTodo(text)
    reset()
  }

  return (
    <Container maxWidth="sm">
      <Box my={3}>
        <Typography variant="h2" component="h1" color="textSecondary" align="center">
          Todo
        </Typography>
      </Box>

      <Box mb={2}>
        <Paper>
          <Box py={1} px={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("text", { required: true })}
                fullWidth
                label="Add todo"
                helperText="Hit enter to add todo"
              />
            </form>
          </Box>
        </Paper>
      </Box>

      <TodosList />
    </Container>
  )
}

export default App
