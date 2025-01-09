import React, { useState } from "react";

const ForceConverter = () => {
  const [input, setInput] = useState("");
  const [fromUnit, setFromUnit] = useState("newton");
  const [toUnit, setToUnit] = useState("kgf");
  const [result, setResult] = useState("");

  const convertForce = () => {
    const inputValue = parseFloat(input);

    if (isNaN(inputValue)) {
      setResult("Будь ласка, введіть коректне значення.");
      return;
    }

    const conversionToNewtons = {
      newton: 1,
      kgf: 9.80665,
      lbf: 4.44822,
      dyne: 0.00001,
      kip: 4448.22,
      ton_force: 9806.65,
      micron: 0.000001,
    };

    const conversionFromNewtons = {
      newton: 1,
      kgf: 1 / 9.80665,
      lbf: 1 / 4.44822,
      dyne: 1 / 0.00001,
      kip: 1 / 4448.22,
      ton_force: 1 / 9806.65,
      micron: 1 / 0.000001,
    };

    const valueInNewtons = inputValue * conversionToNewtons[fromUnit];
    const convertedValue = valueInNewtons * conversionFromNewtons[toUnit];

    setResult(`Результат: ${convertedValue.toFixed(6)} ${getForceUnitName(toUnit)}`);
  };

  const getForceUnitName = (unit) => {
    const unitNames = {
      newton: "ньютонів (N)",
      kgf: "кілограм-сил (kgf)",
      lbf: "фунт-сил (lbf)",
      dyne: "дин (dyne)",
      kip: "кіпів (kip)",
      ton_force: "тонн-сил (metric ton-force)",
      micron: "мікроньютонів (μN)",
    };
    return unitNames[unit] || "";
  };

  return (
    <section
      id="force-converter"
      className="converter-wrapper"
    >
      <h2 className="heading">Конвертер сили</h2>
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
          <option value="newton">Ньютони (N)</option>
          <option value="kgf">Кілограм-сила (kgf)</option>
          <option value="lbf">Фунт-сила (lbf)</option>
          <option value="dyne">Дини (dyne)</option>
          <option value="kip">Кіпи (kip)</option>
          <option value="ton_force">Тонна-сила (metric ton-force)</option>
          <option value="micron">Мікроньютони (μN)</option>
        </select>
        <span className="separator">в</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="select"
        >
          <option value="newton">Ньютони (N)</option>
          <option value="kgf">Кілограм-сила (kgf)</option>
          <option value="lbf">Фунт-сила (lbf)</option>
          <option value="dyne">Дини (dyne)</option>
          <option value="kip">Кіпи (kip)</option>
          <option value="ton_force">Тонна-сила (metric ton-force)</option>
          <option value="micron">Мікроньютони (μN)</option>
        </select>
        <button
          onClick={convertForce}
          className="button"
        >Конвертувати</button>
      </div>
      <p className="result">{result}</p>
    </section>
  );
};

export default ForceConverter;