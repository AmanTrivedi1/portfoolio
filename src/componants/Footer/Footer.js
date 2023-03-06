import React from "react";
import "./Footer.css"
import { BsInstagram, BsCodeSlash,BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title"><BsCodeSlash/>Aman</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="footer__link">
                Education
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/_beingaman._/"
              className="footer__social-link"
              target="_blank"
            >
              <BsInstagram className="" />
            </a>

            <a
              href="https://github.com/AmanTrivedi1"
              className="footer__social-link"
              target="_blank"
            >
              <BsGithub className="" />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-trivedi-a70974213/"
              className="footer__social-link"
              target="_blank"
            >
              <BsLinkedin className="" />
            </a>
          </div>
          <span className="footer__copy"> &#169; <BsCodeSlash/> Aman. All Rights reserved </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
