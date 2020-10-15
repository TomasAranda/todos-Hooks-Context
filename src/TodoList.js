import React, { useContext } from 'react';
import Todo from './Todo';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { TodosContext } from './contexts/todos.context';

export default function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length) return (
    <Paper>
      <List component="ul" aria-label="todos list">
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            {i !== 0 && <Divider />}
            <Todo {...todo} />
          </React.Fragment>
        ))
        }
      </List>
    </Paper>
  );
  return null;
}