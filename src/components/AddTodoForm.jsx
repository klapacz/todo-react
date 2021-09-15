import { Box, Paper, TextField } from '@material-ui/core';
import { useAtom } from 'jotai';
import React from 'react'
import { useForm } from 'react-hook-form';
import { addTodoAtom } from '../store'

export default function AddTodoForm() {
  const [,addTodo] = useAtom(addTodoAtom)
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ text }) => {
    addTodo(text)
    reset()
  }

  return (
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
  )
}
