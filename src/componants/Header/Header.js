import React, { useState } from "react";
import "./Header.css";
import About from "../about/About";

import { BsCodeSlash } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineMan, AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <BsCodeSlash className="code__icon" />
            Aman
          </a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home"
                      ? "nav__link active__link"
                      : "nav__link "
                  }
                >
                  <AiOutlineMan className="nav__icon" />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a  href="#about"  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about"
                      ? "nav__link active__link"
                      : "nav__link "
                  }>
                  <AiOutlineMan className="nav__icon" />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a  href="#skills"  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav__link active__link"
                      : "nav__link "
                  }>
                  <AiOutlineMan className="nav__icon" />
                Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav__link active__link"
                      : "nav__link "
                  }>
                  <AiOutlineMan className="nav__icon" />
                  PortFolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav__link active__link"
                      : "nav__link "
                  }>
                  <AiOutlineMan className="nav__icon" />
                  Contact
                </a>
              </li>
            </ul>
            <AiOutlineCloseCircle
              className="nav__close"
              onClick={() => showMenu(!toggle)}
            />
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
            <HiMenuAlt3 />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
