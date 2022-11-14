import reactLogo from "../images/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <img className="navigation__image" src={reactLogo} alt="React-Logo" />
        <h3 className="navigation__title">ReactFacts</h3>
        <ul className="navigation__items">
          <li className="navigation__item">React Course — Project 1</li>
        </ul>
      </nav>
    </header>
  );
}
