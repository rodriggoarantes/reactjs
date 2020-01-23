import React, { useState, useEffect, useMemo, useCallback } from 'react';

function Main() {
  const [techs, setTech] = useState(['React', 'Native', 'Node']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    if (newTech && newTech !== '') {
      setTech([...techs, newTech]);
      setNewTech('');
    }
  }, [techs, newTech]);

  useEffect(() => {
    const techStorage = localStorage.getItem('techs');
    if (techStorage) {
      setTech(JSON.parse(techStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {techsSize} tecnologia(s)</strong>
      <br />
      <br />
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default Main;
