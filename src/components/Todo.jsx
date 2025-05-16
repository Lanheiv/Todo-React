import { useState } from 'react'

function ToDo({ task, completed, id, onDelete, onToggle}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      {task}
      <button onClick={() => onDelete(id)}>❌</button>
    </label>
  );
}

export default ToDo;
