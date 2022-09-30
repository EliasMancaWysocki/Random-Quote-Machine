import { getElementError } from '@testing-library/react';
import './App.scss';
import { Wrapper } from './components/Wrapper'

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

function App() {
  return (
    <div className='App' style={{backgroundColor: color, color: color }}>
      <Wrapper />
    </div>
  );
}

export default App;
