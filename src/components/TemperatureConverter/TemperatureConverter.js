import React, { useState } from "react";

const TemperatureConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    let convertedValue;

    if (fromUnit === toUnit) {
      convertedValue = inputValue;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedValue = (inputValue * 9) / 5 + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      convertedValue = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedValue = ((inputValue - 32) * 5) / 9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      convertedValue = ((inputValue - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      convertedValue = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      convertedValue = ((inputValue - 273.15) * 9) / 5 + 32;
    }

    setResult(`Результат: ${convertedValue.toFixed(2)} ${getTemperatureUnitName(toUnit)}`);
  };

  const getTemperatureUnitName = (unit) => {
    const unitNames = {
      celsius: "°C",
      fahrenheit: "°F",
      kelvin: "K",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="temperature-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер температури</h2>
      <div className="converter">
        <input
          type="number"
          placeholder="Введіть значення"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}
          className="select"
        >
          <option value="celsius">Цельсій (°C)</option>
          <option value="fahrenheit">Фаренгейт (°F)</option>
          <option value="kelvin">Кельвін (K)</option>
        </select>
        <span className="separator">в</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="celsius">Цельсій (°C)</option>
          <option value="fahrenheit">Фаренгейт (°F)</option>
          <option value="kelvin">Кельвін (K)</option>
        </select>
        <button onClick={convertTemperature}
          className="button">Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default TemperatureConverter;