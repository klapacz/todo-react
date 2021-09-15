import { Box, Container, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from 'react-hook-form';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ text }) => {
    setTodos(todos => [...todos, {
      id: Date.now(),
      text
    }]);
    reset()
  }

  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
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
    </Container>
  )
}

export default App
