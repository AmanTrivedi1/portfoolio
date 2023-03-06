import React, { useState } from "react";
import "./Qualification.css";
import { MdCastForEducation } from "react-icons/md";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button button-flex qualificatio__active"
                  : "qualification__button button-flex "
              }
              onClick={() =>toggleTab(1)}
            >
              Education <MdCastForEducation className="qualification__icon" />
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button button-flex qualificatio__active"
                  : "qualification__button button-flex "
              }
              onClick={() =>toggleTab(2)}
            >
              Experience <MdCastForEducation className="qualification__icon" />
            </div>
          </div>

          <div className="qualification__sections">
            {/* Section One */}
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content "
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.tech </h3>
                  <span className="qualification__subtitle">
                   Branch: IT
                  </span>
                  <div className="qualification__calender">
                    <MdCastForEducation /> PreFinal Year
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">High School </h3>
                  <span className="qualification__subtitle">
                   In PCM
                  </span>
                  <div className="qualification__calender">
                    <MdCastForEducation /> KSIC
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Problem Solving </h3>
                  <span className="qualification__subtitle">
                    DSA
                  </span>
                  <div className="qualification__calender">
                    <MdCastForEducation />  Learning...
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

            </div>
            {/* Section Two */}
            <div  className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content "
              }>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Industry Application </h3>
                  <span className="qualification__subtitle">
                    C2C
                  </span>
                  <div className="qualification__calender">
                    <MdCastForEducation /> In collaboration
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Static Sites </h3>
                  <span className="qualification__subtitle">
                    Deliever More than 12+
                  </span>
                  <div className="qualification__calender">
                    <MdCastForEducation /> 2022 Present
                  </div>
                </div>
              </div>




              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Full Stack </h3>
                  <span className="qualification__subtitle">Source Udemy</span>
                  <div className="qualification__calender">
                    <MdCastForEducation /> More than 4app
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              
          

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
