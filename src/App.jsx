import { useState } from 'react'

import Todo from './Todo.jsx'
import DiariesList from './DiariesList.jsx'
import Diary from './ Diary.jsx'


function App() {
  const todos = [ // masīvs ar vērtībām :>
    { id:1, task: "Iemācīties React", completed: false },
    { id:2, task: "Iemācīties Laravel", completed: true },
    { id:3, task: "Nopirkt pienu", completed: false },
  ];

  return (
    <>
      <h1>Veicamie uzdevumi</h1>
      <div class="box">
        {todos.map((todo) => { // (līzīgs foreach) no masīva iegūst datus un izvada vienu pēc otra ar method map un ieliek todo 
          return <Todo key={todo.id} {...todo} />; // ...todo izpilda objektu izjaukšanu jo masīva un Todo funkcijas nosaukumi ir vienādi
        })}
      </div>

      <h1>Dienasgrāmata</h1>
      <div>
        {DiariesList.map ((diari) => { 
          return <Diary key={diari.id} {...diari} />;
        })}
      </div>
    </>
  );
}

export default App
