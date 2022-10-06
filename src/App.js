import './App.scss';
import React, { useEffect, useState } from 'react';
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

  return (
    <div className='App' style={{backgroundColor: color, color: color}}>
      <Wrapper 
      color={color} />
    </div>
  );
}

export default App;
