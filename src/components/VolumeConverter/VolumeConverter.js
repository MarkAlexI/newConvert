import React, { useState } from "react";
import "../../styles/converter.css";

const VolumeConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("liters");
  const [toUnit, setToUnit] = useState("gallons");
  const [result, setResult] = useState("");

  const conversionToLiters = {
    liters: 1,
    milliliters: 0.001,
    gallons: 3.78541,
    quarts: 0.946353,
    pints: 0.473176,
    cups: 0.24,
    tablespoons: 0.0147868,
    teaspoons: 0.00492892,
  };

  const conversionFromLiters = {
    liters: 1,
    milliliters: 1000,
    gallons: 0.264172,
    quarts: 1.05669,
    pints: 2.11338,
    cups: 4.16667,
    tablespoons: 67.628,
    teaspoons: 202.884,
  };

  const unitNames = {
    liters: "літрів",
    milliliters: "мілілітрів",
    gallons: "галонів",
    quarts: "кварт",
    pints: "пінт",
    cups: "чашок",
    tablespoons: "столових ложок",
    teaspoons: "чайних ложок",
  };

  const handleConvert = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const valueInLiters = inputValue * (conversionToLiters[fromUnit] || 0);
    const convertedValue = valueInLiters * (conversionFromLiters[toUnit] || 0);

    setResult(
      `Результат: ${convertedValue.toFixed(2)} ${unitNames[toUnit] || ""}`
    );
  };

  return (
    <section
      id="volume-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер об'ємів</h2>
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
          {Object.keys(conversionToLiters).map((unit) => (
            <option key={unit} value={unit}>
              {unitNames[unit]}
            </option>
          ))}
        </select>
        <span className="separator">в</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
          className="select">
          {Object.keys(conversionToLiters).map((unit) => (
            <option key={unit} value={unit}>
              {unitNames[unit]}
            </option>
          ))}
        </select>
        <button onClick={handleConvert}
          className="button">Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default VolumeConverter;