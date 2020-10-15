import React, { useContext } from 'react'
import useInputState from './hooks/useInputState';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from './contexts/todos.context';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& label.Mui-focused': {
      color: theme.palette.primary.light,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.light,
    },
  },
  paper: {
    marginBottom: theme.spacing(2)
  }
}));

export default function NewTodoForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [task, setTask, reset] = useInputState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD', task });
    reset();
  }
  return (
    <Paper className={classes.paper}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          fullWidth
          value={task}
          onChange={setTask}
          autoFocus
          label='Add Todo'
          autoComplete='off'
        />
      </form>
    </Paper>
  )
}
