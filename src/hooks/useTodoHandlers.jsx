// Interneta pārlūkprogrmmā, sadaļā storage, Local Storage atrodas vieta kur atrodas saglabātie dati.

import { useEffect, useState } from "react";

export default function useTodoHandlers() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(getLocalTodos);

  // vecais masīvs
  // const [todos, setTodos] = useState([
  //   { id: 1, task: "Iemācīties React", completed: false },
  //   { id: 2, task: "Iemācīties Laravel", completed: true },
  //   { id: 3, task: "Nopirkt pienu", completed: false },
  // ]);

  useEffect(() => { // saglabā datus 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function getLocalTodos() { // iegūs datus
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  }

  function handleAdd(event) { // pievienošanas funkcija
    event.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  }

  function handleDelete(id) { // dzēšanas funckija 
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) { // izpildes poga
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return { // atgirež datus
    todos,
    newTask,
    setNewTask,
    handleAdd,
    handleDelete,
    handleToggle
  };
}
