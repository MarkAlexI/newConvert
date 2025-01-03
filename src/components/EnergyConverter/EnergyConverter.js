import React, { useState } from "react";

const EnergyConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("joules");
  const [toUnit, setToUnit] = useState("kcal");
  const [result, setResult] = useState("");

  const convertEnergy = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToJoules = {
      joules: 1,
      kcal: 4184,
      ws: 1,
      kwh: 3.6e6,
    };

    const conversionFromJoules = {
      joules: 1,
      kcal: 1 / 4184,
      ws: 1,
      kwh: 1 / 3.6e6,
    };

    const valueInJoules = inputValue * conversionToJoules[fromUnit];
    const convertedValue = valueInJoules * conversionFromJoules[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(6)} ${getEnergyUnitName(toUnit)}`);
  };

  const getEnergyUnitName = (unit) => {
    const unitNames = {
      joules: "Джоулів",
      kcal: "кілокалорій (ккал)",
      ws: "ват-секунд",
      kwh: "кіловат-годин",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="energy-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер енергії</h2>
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
          <option value="joules">Джоулі</option>
          <option value="kcal">Кілокалорії (ккал)</option>
          <option value="ws">Ват-секунди</option>
          <option value="kwh">Кіловат-години</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="joules">Джоулі</option>
          <option value="kcal">Кілокалорії (ккал)</option>
          <option value="ws">Ват-секунди</option>
          <option value="kwh">Кіловат-години</option>
        </select>
        <button
          onClick={convertEnergy}
          className="button"
        >Конвертувати</button>
      </div>
      <p>{result}</p>
    </section>
  );
};

export default EnergyConverter;