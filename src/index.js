import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';



const container = document.getElementById('root');
const root = createRoot(container);

//Hook personnalisé

function useIncrement(init, step) {
  const [count3, setCount3] = useState(init);
  const increment = () => {
    setCount3(c => c + step)
  }
  return [count3, increment]
}

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

  const [count3, increment] = useIncrement(0, 5);

  return <>
    <button onClick={handleClick}>Incrémenter {count}</button>
    <button onClick={handleClick2}>Incrémenter {count2}</button>
    <br></br>
    <button onClick={increment}>Incrémenter {count3} </button>
  </>
}

root.render(
  <div>
    <Compteur />
  </div>
);


