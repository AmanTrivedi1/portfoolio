import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const Frontend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Devloper</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <BsPatchCheckFill />
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">HTML5</span>
              </div>
            </div>

            <div className="skills__data">
              <BsPatchCheckFill />
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <BsPatchCheckFill />
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">ES6</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <BsPatchCheckFill />
              <div>
                <h3 className="skills__name">BootStrap</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <BsPatchCheckFill />
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <BsPatchCheckFill className="bx-badge-check" />
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
