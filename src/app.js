import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.css";
import TimeConverter from './components/TimeConverter/TimeConverter.js';
import VolumeConverter from './components/VolumeConverter/VolumeConverter.js';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter.js';
import AngleConverter from './components/AngleConverter/AngleConverter.js';
import WeightConverter from './components/WeightConverter/WeightConverter.js';
import SpeedConverter from './components/SpeedConverter/SpeedConverter.js';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Конвертер величин</h1>
        <p>Перетворюйте відстані, об'єми та інше легко і швидко!</p>
      </header>
      <main className="main">
        <TimeConverter />
        <VolumeConverter />
        <TemperatureConverter />
        <AngleConverter />
        <WeightConverter />
        <SpeedConverter />
      </main>
      <footer className="footer">
        <p>&copy; 2024 MarkAlexI</p>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <App></App>,
  document.getElementById('react-app')
);
