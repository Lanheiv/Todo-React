import { useState } from 'react';

export default function useDiariesHandlers() {
  const [newtitle, setNewtitle] = useState("");
  const [newbody, setNewbody] = useState("");
  const [Diaries, setDiaries] = useState([
    { id:1, title:"Gulēšana", body:"Negulēšu visu nakti",  date:"12.02.2025" },
    { id:2, title:"Ēšana", body:"Kā es gribu ēst.",  date:"24.10.2025" },
    { id:3, title:"Programmēšana", body:"Es mīlu programmēt :>",  date:"12.02.2055" },
  ]);

  function handleDiarieAdd(event) {
    event.preventDefault();

    const newDiarie = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      title: newtitle,
      body: newbody,
      date: new Date().toISOString().split('T')[0],
    };

    setDiaries(prev => [...prev, newDiarie]);
    setNewtitle("");
    setNewbody("");
  }

  function handleDiarieDelete(id) {
    setDiaries(prevDiaries => prevDiaries.filter(diarie => diarie.id !== id));
  }

  return {
    Diaries,
    newtitle,
    setNewtitle,
    newbody,
    setNewbody,
    handleDiarieAdd,
    handleDiarieDelete,
  };
}
