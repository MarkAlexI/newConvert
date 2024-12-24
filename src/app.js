import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/app.css";
import TimeConverter from "./components/TimeConverter/TimeConverter.js";
import VolumeConverter from "./components/VolumeConverter/VolumeConverter.js";
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter.js';

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
