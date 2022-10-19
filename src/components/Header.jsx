import React from "react";
const logo = "./images/eden-logo.png";

const Header = () => {
  return (
    <div>
      <img src={logo} alt="Eden Logo" className="logo container-fluid"></img>
      <div className="position-relative m-4">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <button
          type="button"
          className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
          style={{ width: `2rem`, height: `2rem` }}
        >
          1
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
          style={{ width: `2rem`, height: `2rem` }}
        >
          2
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-75 translate-middle btn btn-sm btn-secondary rounded-pill"
          style={{ width: `2rem`, height: `2rem` }}
        >
          3
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
          style={{ width: `2rem`, height: `2rem` }}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Header;
