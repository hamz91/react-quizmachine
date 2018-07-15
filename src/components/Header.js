import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Lean, Mean, Quiz Machine</h1>
      <p>Don't be a Potato, be a Camel</p>
      <nav className="header__nav">
        <ul className="header__nav--links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <li>
            <Link to="/PotatoQuiz">Potato Quiz</Link>
          </li>
          <br />
          <li>
            <Link to="/DuckQuiz">Duck Quiz</Link>
          </li>
          <br />
          <li>
            <Link to="/CamelQuiz">Camel Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
