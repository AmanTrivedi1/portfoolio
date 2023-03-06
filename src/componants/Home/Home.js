import React from "react";
import "./Home.css"
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Socail from "./Socail";
const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Socail/>
            <div className="home__img"> </div>
            <Data/>
          </div>
          <ScrollDown/>
        </div>
      </section>
    </>
  );
};

export default Home;
