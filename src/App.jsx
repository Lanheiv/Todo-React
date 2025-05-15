import { useState } from 'react'

import Todo from './Todo.jsx'
import DiariesList from './DiariesList.jsx'
import Diary from './ Diary.jsx'

function App() {
  const [newTask,  setNewTask] = useState("");
  const [todos, setTodos] =  useState([ // masīvs ar vērtībām kuras var mainīt
    { id:1, task: "Iemācīties React", completed: false },
    { id:2, task: "Iemācīties Laravel", completed: true },
    { id:3, task: "Nopirkt pienu", completed: false },
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
  };
  function handleToggle(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <h1>Veicamie uzdevumi</h1>
      <div class="box">
        {todos.map((todo) => { // (līzīgs foreach) no masīva iegūst datus un izvada vienu pēc otra ar method map un ieliek todo 
          return <Todo key={todo.id} {...todo} onDelete={handleDelete} onToggle={handleToggle} />; // ...todo izpilda objektu izjaukšanu jo masīva un Todo funkcijas nosaukumi ir vienādi
        })}
      </div>

      <h1>Dienasgrāmata</h1>
      <div>
        {DiariesList.map ((diari) => { 
          return <Diary key={diari.id} {...diari} />;
        })}
      </div>

      <h1>Stāvokļu mainīgais</h1>
      <div>
        <form onSubmit={handleAdd}>
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button>Darbība</button>
        </form>
      </div>
    </>
  );
}

export default App
