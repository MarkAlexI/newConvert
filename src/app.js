import React from 'react';
import ReactDOM from 'react-dom';
import "./App.module.css";
import TimeConverter from "./components/TimeConverter/TimeConverter.js";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Конвертер величин</h1>
        <p>Перетворюйте відстані, об'єми та інше легко і швидко!</p>
      </header>
      <main className="main">
        <TimeConverter />
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
