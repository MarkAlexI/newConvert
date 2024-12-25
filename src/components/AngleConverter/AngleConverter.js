import React, { useState } from "react";

const AngleConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("degrees");
  const [toUnit, setToUnit] = useState("degrees");
  const [result, setResult] = useState("");

  const convertAngle = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToDegrees = {
      degrees: 1,
      radians: 180 / Math.PI,
      gradians: 0.9,
    };

    const conversionFromDegrees = {
      degrees: 1,
      radians: Math.PI / 180,
      gradians: 10 / 9,
    };

    const valueInDegrees = inputValue * conversionToDegrees[fromUnit];
    const convertedValue = valueInDegrees * conversionFromDegrees[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(4)} ${getAngleUnitName(toUnit)}`);
  };

  const getAngleUnitName = (unit) => {
    const unitNames = {
      degrees: "градусів",
      radians: "радіан",
      gradians: "градіан",
    };
    return unitNames[unit] || "";
  };

  return (
    <section id="angle-converter">
      <h2>Конвертер кутових величин</h2>
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
          <option value="degrees">Градуси</option>
          <option value="radians">Радіани</option>
          <option value="gradians">Градіани</option>
        </select>
        <span className="separator">в</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="degrees">Градуси</option>
          <option value="radians">Радіани</option>
          <option value="gradians">Градіани</option>
        </select>
        <button onClick={convertAngle} className="button">Конвертувати</button>
      </div>
      <p>{result}</p>
    </section>
  );
};

export default AngleConverter;