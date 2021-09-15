
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Paper } from '@material-ui/core';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useAtom } from 'jotai';
import { todosAtom, deleteTodoAtom } from '../store'

export default function TodosList() {
  const [todos] = useAtom(todosAtom)
  const [,deleteTodo] = useAtom(deleteTodoAtom)

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
