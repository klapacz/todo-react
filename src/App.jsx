import { Box, Container, FormControl, FormHelperText, IconButton, Input, InputLabel, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: ({ text }, { resetForm }) => {
      if (!text) return;
      setTodos(todos => [...todos, {
        id: Date.now(),
        text
      }])
      resetForm()
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="todo-text">Add todo</InputLabel>
                <Input
                  id="todo-text"
                  name="text"
                  onChange={formik.handleChange}
                  value={formik.values.text}
                />
                <FormHelperText>Hit enter to add todo</FormHelperText>
              </FormControl>
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
