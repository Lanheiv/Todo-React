/* component sadaļa */
import Todo from './components/Todo.jsx'
import Diary from './components/Diary.jsx'

/* hook sadaļa */
import useTodoHandlers from './hooks/useTodoHandlers';
import useDiariesHandlers from './hooks/useDiariesHandlers.jsx';

function App() {
  const {
    todos,
    newTask,
    setNewTask,
    handleAdd,
    handleDelete,
    handleToggle
  } = useTodoHandlers();
  const {
    Diaries,
    newtitle,
    newbody,
    setNewtitle,
    setNewbody,
    handleDiarieAdd,
    handleDiarieDelete
  } = useDiariesHandlers();
  

  return (
    <>
      <h1>Veicamie uzdevumi</h1>
      <div class="box">
        <form onSubmit={handleAdd}>
          <input placeholder="Uzdevums" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
          <button>Saglabāt</button>
        </form>

        {todos.map((todo) => { // (līzīgs foreach) no masīva iegūst datus un izvada vienu pēc otra ar method map un ieliek todo 
          return <Todo key={todo.id} {...todo} onDelete={handleDelete} onToggle={handleToggle} />; // ...todo izpilda objektu izjaukšanu jo masīva un Todo funkcijas nosaukumi ir vienādi
        })}
      </div>

      <h1>Dienasgrāmata</h1>
      <div class="box">
        <form onSubmit={handleDiarieAdd}>
          <input placeholder="Virsraksts" value={newtitle} onChange={(event) => setNewtitle(event.target.value)} />
          <input placeholder="Teksts" value={newbody} onChange={(event) => setNewbody(event.target.value)} />
          <button>Saglabāt</button>
        </form>

        {Diaries.map ((diari) => { 
          return <Diary key={diari.id} {...diari} onDelete={handleDiarieDelete} />;
        })}
      </div>
    </>
  );
}

export default App
