import React, { useState, useEffect } from 'react';

function Main() {
  const [techs, setTech] = useState(['React', 'Native', 'Node']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    if (newTech && newTech !== '') {
      setTech([...techs, newTech]);
      setNewTech('');
    }
  }

  useEffect(() => {
    const techStorage = localStorage.getItem('techs');
    if (techStorage) {
      setTech(JSON.parse(techStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default Main;
