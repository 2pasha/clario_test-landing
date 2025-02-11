import { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import CustomButton from "../CustomButton/CustomButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header__content container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>

        <a
          className={`header__menu ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle manu"
        >
          <img src={isMenuOpen ? close : burger} alt="Burger menu" />
        </a>
      </div>

      <div className={`menu ${isMenuOpen ? "is-open" : ""}`}>
        <hr className="header__devider" />
        <nav className="header__nav container">
          <ul className="header__nav-list">
            <li>
              <a
                className="header__nav-link"
                onClick={() => scrollToSection("features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="header__nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="header__nav-link"
                onClick={() => scrollToSection("blog")}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="header__nav-link"
                onClick={() => scrollToSection("contacts")}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <CustomButton
          title={"Button"}
          type="green"
          paddingX="112px"
          paddingY="13px"
          className="container header__button"
          onClick={() => console.log("Button from menu clicked")}
        />
      </div>
    </header>
  );
};

export default Header;
