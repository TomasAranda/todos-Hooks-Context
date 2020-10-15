import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todo.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer('todos', [], todosReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ TodosContext.Provider>
  );
}