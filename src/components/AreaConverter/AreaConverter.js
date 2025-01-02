import React, { useState } from "react";

const AreaConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("sqm");
  const [toUnit, setToUnit] = useState("hectare");
  const [result, setResult] = useState("");

  const convertArea = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToSquareMeters = {
      sqm: 1,
      sqkm: 1e6,
      hectare: 10000,
      acre: 4046.86,
      sqft: 0.092903,
      sqyd: 0.836127,
    };

    const conversionFromSquareMeters = {
      sqm: 1,
      sqkm: 1 / 1e6,
      hectare: 1 / 10000,
      acre: 1 / 4046.86,
      sqft: 1 / 0.092903,
      sqyd: 1 / 0.836127,
    };

    const valueInSquareMeters = inputValue * conversionToSquareMeters[fromUnit];
    const convertedValue = valueInSquareMeters * conversionFromSquareMeters[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(4)} ${getAreaUnitName(toUnit)}`);
  };

  const getAreaUnitName = (unit) => {
    const unitNames = {
      sqm: "м²",
      sqkm: "км²",
      hectare: "гектарів",
      acre: "акрів",
      sqft: "футів²",
      sqyd: "ярдів²",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="area-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер площі</h2>
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
          <option value="sqm">Квадратні метри (м²)</option>
          <option value="sqkm">Квадратні кілометри (км²)</option>
          <option value="hectare">Гектари</option>
          <option value="acre">Акри</option>
          <option value="sqft">Квадратні фути (ft²)</option>
          <option value="sqyd">Квадратні ярди</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="sqm">Квадратні метри (м²)</option>
          <option value="sqkm">Квадратні кілометри (км²)</option>
          <option value="hectare">Гектари</option>
          <option value="acre">Акри</option>
          <option value="sqft">Квадратні фути (ft²)</option>
          <option value="sqyd">Квадратні ярди</option>
        </select>
        <button
          onClick={convertArea}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default AreaConverter;