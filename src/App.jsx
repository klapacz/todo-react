import { Box, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from 'react-hook-form';
import { atomWithStorage } from 'jotai/utils'
import { useAtom } from 'jotai';


const todosAtom = atomWithStorage('todos', [])

function TodosList() {
  const [todos, setTodos] = useAtom(todosAtom)

  const deleteTodo = (id) =>
    setTodos(todos => todos.filter(todo => todo.id !== id))

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
  const [, setTodos] = useAtom(todosAtom)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ text }) => {
    setTodos(todos => [...todos, {
      id: Date.now(),
      text
    }]);
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
