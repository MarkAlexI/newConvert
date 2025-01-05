import React, { useState } from "react";

const DataConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("kilobytes");
  const [toUnit, setToUnit] = useState("gigabytes");
  const [result, setResult] = useState("");

  const convertData = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToBytes = {
      bytes: 1,
      kilobytes: 1024,
      megabytes: 1024 ** 2,
      gigabytes: 1024 ** 3,
      terabytes: 1024 ** 4,
    };

    const conversionFromBytes = {
      bytes: 1,
      kilobytes: 1 / 1024,
      megabytes: 1 / (1024 ** 2),
      gigabytes: 1 / (1024 ** 3),
      terabytes: 1 / (1024 ** 4),
    };

    const valueInBytes = inputValue * conversionToBytes[fromUnit];
    const convertedValue = valueInBytes * conversionFromBytes[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(6)} ${getDataUnitName(toUnit)}`);
  };

  const getDataUnitName = (unit) => {
    const unitNames = {
      bytes: "байтів",
      kilobytes: "кілобайтів",
      megabytes: "мегабайтів",
      gigabytes: "гігабайтів",
      terabytes: "терабайтів",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="data-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер даних</h2>
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
          <option value="bytes">Байти</option>
          <option value="kilobytes">Кілобайти</option>
          <option value="megabytes">Мегабайти</option>
          <option value="gigabytes">Гігабайти</option>
          <option value="terabytes">Терабайти</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="bytes">Байти</option>
          <option value="kilobytes">Кілобайти</option>
          <option value="megabytes">Мегабайти</option>
          <option value="gigabytes">Гігабайти</option>
          <option value="terabytes">Терабайти</option>
        </select>
        <button
          onClick={convertData}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default DataConverter;