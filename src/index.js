import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


const container = document.getElementById('app');
const root = createRoot(container);

function Compteur(){
  const state = useState(0)
  console.log(state);
  return <button></button>
}

root.render(
  <div>
    <Compteur />
  </div>
);


