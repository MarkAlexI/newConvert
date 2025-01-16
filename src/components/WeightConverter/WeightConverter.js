import React, { useState } from "react";

const WeightConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("g");
  const [result, setResult] = useState("");

  const convertWeight = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToKilograms = {
      kg: 1,
      g: 0.001,
      mg: 0.000001,
      lbs: 0.453592,
      oz: 0.0283495,
    };

    const conversionFromKilograms = {
      kg: 1,
      g: 1000,
      mg: 1000000,
      lbs: 2.20462,
      oz: 35.274,
    };

    const valueInKilograms = inputValue * conversionToKilograms[fromUnit];
    const convertedValue = valueInKilograms * conversionFromKilograms[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(2)} ${getWeightUnitName(toUnit)}`);
  };

  const getWeightUnitName = (unit) => {
    const unitNames = {
      kg: "кілограмів",
      g: "грамів",
      mg: "міліграмів",
      lbs: "фунтів",
      oz: "унцій",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="weight-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер ваги</h2>
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
          <option value="kg">Кілограми</option>
          <option value="g">Грами</option>
          <option value="mg">Міліграми</option>
          <option value="lbs">Фунти</option>
          <option value="oz">Унції</option>
        </select>
        <span className="separator">в</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="kg">Кілограми</option>
          <option value="g">Грами</option>
          <option value="mg">Міліграми</option>
          <option value="lbs">Фунти</option>
          <option value="oz">Унції</option>
        </select>
        <button onClick={convertWeight}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default WeightConverter;