import { useState } from 'react';

export default function useTodoHandlers() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
  ]);

  function handleAdd(event) {
    event.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return {
    todos,
    newTask,
    setNewTask,
    handleAdd,
    handleDelete,
    handleToggle
  };
}
