import React, { useState } from "react";
import "./service.css"
import { FiBox ,FiBarChart } from "react-icons/fi";
import { HiOutlineLockOpen } from "react-icons/hi";
import { SiBlockchaindotcom } from "react-icons/si";
import {
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineCloseCircle,
} from "react-icons/ai";
const Service = () => {


  const [toggleState , setToggleState]=useState(0);

  const toggleTab =(index)=>{
    setToggleState(index);
  }


  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <FiBox className="services__icon uil-web-grid" />
              <h3 className="services__title">Product<br/>Design</h3>
            </div>
            <span className="services__button" onClick={() =>toggleTab(1)}>
              View More
              <AiOutlineArrowRight className="services__button-icon" />
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal_content">
                <AiOutlineCloseCircle  onClick={()=> toggleTab(0)} className="services__modal-close" />
                <h3 className="services__modal-title">Web Application Designer</h3>
                <p className="services__modal-description">
                 I have designed more than 18+ application 
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                    User Friendly Interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     Modern Look
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     UI/UX Compatibility
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                 Responsive Layout
                    </p>
                  </li>

                 
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <FiBarChart className="services__icon uil-edit " />
              <h3 className="services__title">Mern <br/>Devloper</h3>
            </div>
            <span className="services__button" onClick={() =>toggleTab(2)}>
              View More
              <AiOutlineArrowRight className="services__button-icon" />
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal_content">
              <AiOutlineCloseCircle  onClick={()=> toggleTab(0)} className="services__modal-close" />
                <h3 className="services__modal-title">H2 Heading Hai</h3>
                <p className="services__modal-description">
                Made More than 4 applications that are fullstack
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     Best Performance
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     Scalble in Future
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                    Fallows All the industry rules
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                    Used latest tech
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                    Fast in Performance
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <SiBlockchaindotcom className="services__icon" />
              <h3 className="services__title">Block<br/> Chain</h3>
            </div>
            <span className="services__button" onClick={() =>toggleTab(3)}>
              View More
              <AiOutlineArrowRight className="services__button-icon" />
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal_content">
              <AiOutlineCloseCircle  onClick={()=> toggleTab(0)} className="services__modal-close" />
                <h3 className="services__modal-title">Block Chain Application</h3>
                <p className="services__modal-description">
                 Currently Working on Blockchain Application [NFT]
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                   Used Metamask for transaction
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     Decenterlised Application
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                      Made with Latest Tech
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <AiOutlineCheck className="services__modal-icon" />
                    <p className="services__modal-info">
                     Using React for UI
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
