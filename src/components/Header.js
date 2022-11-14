import React from "react";
import reactLogo from "../images/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <img className="navigation__image" src={reactLogo} alt="React-Logo" />
        <ul className="navigation__items">
          <li className="navigation__item">Pricing</li>
          <li className="navigation__item">About</li>
          <li className="navigation__item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
