import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
    case 'EDIT':
      return state.map(todo => todo.id === action.id ? { ...todo, task: action.newTask } : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default reducer;