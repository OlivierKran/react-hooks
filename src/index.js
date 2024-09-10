import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';



const container = document.getElementById('root');
const root = createRoot(container);

function useIncrement(init, step){
  const [count, setCount] = useState(init);
  const increment = () => {
    setCount( c => c + step)
  }
  return [count, increment]
}

function Compteur() {
  const [count, increment] = useIncrement(0, 5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log('hello');
      increment();
    }, 1000)
    return function(){
      clearInterval(timer)
    }
  }
);

  useEffect(()=> {
    document.title = "Compteur " + count
  }, [count]
);

  return <button onClick={increment}>Incrémenter {count}</button>
}

root.render(
  <div>
    <Compteur />
  </div>
);


