import React, { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { DispatchContext } from './contexts/todos.context';

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleEditing] = useToggleState(false);
  const handleRemove = e => {
    e.stopPropagation();
    dispatch({ type: 'REMOVE', id });
  }
  const handleEditing = e => {
    e.stopPropagation();
    toggleEditing(!isEditing);
  }
  return (
    <>
      <ListItem onClick={() => dispatch({ type: 'TOGGLE', id })} style={{ height: '64px' }}>
        {isEditing ? (
          <>
            <EditTodoForm
              id={id}
              task={task}
              setIsEditing={toggleEditing}
            />
          </>
        ) : (
            <>
              <CheckBox
                checked={completed}
              />
              <ListItemText primary={task} style={{ textDecoration: completed ? 'line-through' : 'none' }} />
              <IconButton onClick={handleEditing}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleRemove}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
      </ListItem>
    </>
  )
}

export default memo(Todo);