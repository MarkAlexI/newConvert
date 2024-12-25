import React, { useState } from "react";
import "../../styles/converter.css";

function TimeConverter() {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("hours");
  const [toUnit, setToUnit] = useState("minutes");
  const [result, setResult] = useState("");

  const conversionToMilliseconds = {
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1,
  };

  const conversionFromMilliseconds = {
    hours: 1 / 3600000,
    minutes: 1 / 60000,
    seconds: 1 / 1000,
    milliseconds: 1,
  };

  const getTimeUnitName = (unit) => {
    const unitNames = {
      hours: "годин",
      minutes: "хвилин",
      seconds: "секунд",
      milliseconds: "мілісекунд",
    };
    return unitNames[unit] || "";
  };

  const handleConvert = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const valueInMilliseconds =
      inputValue * conversionToMilliseconds[fromUnit];
    const convertedValue =
      valueInMilliseconds * conversionFromMilliseconds[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(2)} ${getTimeUnitName(toUnit)}`);
  };

  return (
    <section className="converter-wrapper">
      <h2 className="heading">Конвертер часу</h2>
      <div className="converter">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введіть значення"
          className="input"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="select"
        >
          <option value="hours">Години</option>
          <option value="minutes">Хвилини</option>
          <option value="seconds">Секунди</option>
          <option value="milliseconds">Мілісекунди</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="hours">Години</option>
          <option value="minutes">Хвилини</option>
          <option value="seconds">Секунди</option>
          <option value="milliseconds">Мілісекунди</option>
        </select>
        <button onClick={handleConvert} className="button">
          Конвертувати
        </button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
}

export default TimeConverter;