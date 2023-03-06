import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
const Socail = () => {
  return (
    <>
      <section className="home__socail">
        <a
          href="https://www.instagram.com/_beingaman._/"
          className="home__social-icon"
          target="_blank"
        >
          <BsInstagram className="icon__color" />
        </a>

        <a
          href="https://github.com/AmanTrivedi1"
          className="home__social-icon"
          target="_blank"
        >
          <BsGithub className="icon__color" />
        </a>

        <a
          href="https://www.linkedin.com/in/aman-trivedi-a70974213/"
          className="home__social-icon"
          target="_blank"
        >
          <BsLinkedin className="icon__color" />
        </a>
      </section>
    </>
  );
};

export default Socail;
