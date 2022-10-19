import React from "react";
import "./congo.css";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Congo = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <div className="congo-page">
      <div className="congo-container">
        <RiCheckboxCircleFill className="check-icon" />
        <div className="heading-cluster">
          <h1 className="heading"> Congratulations, Eren!</h1>
          <h3 className="subHeading">
            You have completed onboarding, you can start using the Eden!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Congo;
