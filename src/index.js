import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');
const root = createRoot(container);

function Compteur() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = function (e) {
    e.preventDefault();
    setCount(c => c + 1)
  }

  const handleClick2 = function (e) {
    e.preventDefault();
    setCount2(c => c + 2)
  }
  return <>
  <button onClick={handleClick}>Incrémenter {count}</button>
  <button onClick={handleClick2}>Incrémenter {count2}</button>
  </>
}

root.render(
  <div>
    <Compteur />
  </div>
);


