import React from "react";
import "./progress.css";

// const logo = "./images/eden-logo.png";

const Progress = ({ currentIndex }) => {
  /* <img src={logo} alt="Eden Logo" className="logo container-fluid"></img> */
  return (
    <div className="progress-buttons">
      <button
        type="button"
        className={["round-page-numbers", currentIndex > -1 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        1
      </button>
      <span
        className={[
          "space-between-rounds",
          currentIndex > -1 ? "load-page" : "",
        ]
          .join(" ")
          .trim()}
      >
        {" "}
      </span>
      <button
        type="button"
        className={["round-page-numbers", currentIndex > 0 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        2
      </button>
      <span
        className={["space-between-rounds", currentIndex > 0 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        {" "}
      </span>
      <button
        type="button"
        className={["round-page-numbers", currentIndex > 1 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        3
      </button>
      <span
        className={["space-between-rounds", currentIndex > 1 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        {" "}
      </span>
      <button
        type="button"
        className={["round-page-numbers", currentIndex > 2 ? "load-page" : ""]
          .join(" ")
          .trim()}
      >
        4
      </button>
    </div>
  );
};

export default Progress;
