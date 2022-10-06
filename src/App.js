import './App.scss';
import React from 'react';
import { Wrapper } from './components/Wrapper'


function App() {

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  let color = colors[Math.floor(Math.random() * colors.length)];

  function changeColorBody() {
    let body = document.getElementById('App');
    body.animate([{backgroundColor: color, color: color}], 1000)
  }

  return (
    <div className='App' id='App'>
      <Wrapper 
      color={color}
      body={changeColorBody} />
    </div>
  );
}

export default App;
