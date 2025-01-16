import React, { useState } from "react";
import "../../styles/navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "Закрити меню" : "Меню"}
      </button>
      <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        <li><a href="#time-converter">Час</a></li>
        <li><a href="#volume-converter">Об'єм</a></li>
        <li><a href="#temperature-converter">Температура</a></li>
        <li><a href="#angle-converter">Кути</a></li>
        <li><a href="#weight-converter">Вага</a></li>
        <li><a href="#speed-converter">Швидкість</a></li>
        <li><a href="#area-converter">Площа</a></li>
        <li><a href="#energyConverter">Енергія</a></li>
        <li><a href="#data-converter">Дані</a></li>
        <li><a href="#force-converter">Сила</a></li>
        <li><a href="#pressure-converter">Тиск</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;