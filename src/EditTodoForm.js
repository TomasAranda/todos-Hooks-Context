import React, { useEffect, useContext } from 'react';
import useInputState from './hooks/useInputState';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { InputAdornment, IconButton, Input, FormControl } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

import { DispatchContext } from './contexts/todos.context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    '& label.Mui-focused': {
      color: theme.palette.primary.light,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.light,
    },
  },
}));

export default function EditTodoForm({ id, task, setIsEditing }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [newTask, setNewTask] = useInputState(task);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'EDIT', id, newTask });
    setIsEditing(false);
  }
  useEffect(() => {
    document.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 27) setIsEditing(false);
    })
  })
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth >
        <InputLabel htmlFor="edit-todo">Edit Todo</InputLabel>
        <Input
          className={classes.input}
          id='edit-todo'
          autoFocus
          value={newTask}
          onChange={setNewTask}
          label='Edit Todo'
          fullWidth
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='cancel edit todo'
                onClick={e => {
                  e.stopPropagation();
                  setIsEditing(false)
                }}
              >
                <CancelIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  )
}
