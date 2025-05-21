import { useEffect, useState } from 'react';

export default function useDiariesHandlers() {
  const [newtitle, setNewtitle] = useState("");
  const [newbody, setNewbody] = useState("");
  const [diaries, setDiaries] = useState(getLocalDiaries);

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);
  function getLocalDiaries() {
    const stored = localStorage.getItem("diaries");
    return stored ? JSON.parse(stored) : [];
  }

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
    diaries,
    newtitle,
    setNewtitle,
    newbody,
    setNewbody,
    handleDiarieAdd,
    handleDiarieDelete,
  };
}
