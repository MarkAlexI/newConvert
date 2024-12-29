import React, { useState } from "react";

const SpeedConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("kmh");
  const [toUnit, setToUnit] = useState("ms");
  const [result, setResult] = useState("");

  const convertSpeed = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToMetersPerSecond = {
      kmh: 1 / 3.6,
      ms: 1,
      mph: 0.44704,
      knots: 0.514444,
    };

    const conversionFromMetersPerSecond = {
      kmh: 3.6,
      ms: 1,
      mph: 2.23694,
      knots: 1.94384,
    };

    const valueInMetersPerSecond = inputValue * conversionToMetersPerSecond[fromUnit];
    const convertedValue = valueInMetersPerSecond * conversionFromMetersPerSecond[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(2)} ${getSpeedUnitName(toUnit)}`);
  };

  const getSpeedUnitName = (unit) => {
    const unitNames = {
      kmh: "км/год",
      ms: "м/с",
      mph: "миль/год",
      knots: "вузлів",
    };
    return unitNames[unit] || "";
  };

  return (
    <section className="converter-wrapper">
      <h2 className="heading">Конвертер швидкості</h2>
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
          <option value="kmh">Кілометри на годину (км/год)</option>
          <option value="ms">Метри на секунду (м/с)</option>
          <option value="mph">Милі на годину (миль/год)</option>
          <option value="knots">Вузли</option>
        </select>
        <span className="separator">в</span>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="kmh">Кілометри на годину (км/год)</option>
          <option value="ms">Метри на секунду (м/с)</option>
          <option value="mph">Милі на годину (миль/год)</option>
          <option value="knots">Вузли</option>
        </select>
        <button onClick={convertSpeed}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default SpeedConverter;