import React, { useState } from "react";

const PressureConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("pa");
  const [toUnit, setToUnit] = useState("atm");
  const [result, setResult] = useState("");

  const convertPressure = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToPascals = {
      pa: 1,
      atm: 101325,
      bar: 100000,
      mmHg: 133.322,
      psi: 6894.76,
    };

    const conversionFromPascals = {
      pa: 1,
      atm: 1 / 101325,
      bar: 1 / 100000,
      mmHg: 1 / 133.322,
      psi: 1 / 6894.76,
    };

    const valueInPascals = inputValue * conversionToPascals[fromUnit];
    const convertedValue = valueInPascals * conversionFromPascals[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(6)} ${getPressureUnitName(toUnit)}`);
  };

  const getPressureUnitName = (unit) => {
    const unitNames = {
      pa: "Паскалів (Pa)",
      atm: "Атмосфер (atm)",
      bar: "Барів (bar)",
      mmHg: "мм рт. ст.",
      psi: "фунтів на квадратний дюйм (psi)",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="pressure-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер тиску</h2>
      <div className="converter">
        <input
          type="number"
          placeholder="Введіть значення"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="select"
        >
          <option value="pa">Паскалі (Pa)</option>
          <option value="atm">Атмосфери (atm)</option>
          <option value="bar">Бари (bar)</option>
          <option value="mmHg">Мм рт. ст.</option>
          <option value="psi">PSI (фунти на квадратний дюйм)</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="pa">Паскалі (Pa)</option>
          <option value="atm">Атмосфери (atm)</option>
          <option value="bar">Бари (bar)</option>
          <option value="mmHg">Мм рт. ст.</option>
          <option value="psi">PSI (фунти на квадратний дюйм)</option>
        </select>
        <button
          onClick={convertPressure}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default PressureConverter;