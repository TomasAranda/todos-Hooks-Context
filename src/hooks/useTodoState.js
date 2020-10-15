import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  return {
    todos,
    addTodo: newTask => {
      const newTodo = {
        id: uuidv4(),
        task: newTask,
        completed: false
      }
      setTodos([...todos, newTodo])
    },
    toggleTodo: todoId => {
      const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
      setTodos(newTodos);
    },
    editTodo: (todoId, newTask) => {
      const newTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo)
      setTodos(newTodos);
    },
    removeTodo: todoId => {
      const newTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(newTodos);
    }
  }
}