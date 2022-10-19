import React from "react";
import "./congo.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Header from "./Header";

const Congo = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <div className="congo-page">
      <div className="congo-container">
        <RiCheckboxCircleFill className="check-icon" />
        <Header
          mainHeading="Congratulations, Eren!"
          subHeading="You have completed onboarding, you can start using the Eden!"
        />
      </div>
    </div>
  );
};

export default Congo;
