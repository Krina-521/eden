import React from "react";
import "./planning.css";
import { RiUserFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import Header from "../Header/Header";

const Planning = () => {
  const handleOnClick = (event) => {
    const currentClickCard = event.target.id;
    const otherCard =
      currentClickCard === "for-myself" ? "with-my-team" : "for-myself";

    const cardEl = document.getElementById(currentClickCard);
    const otherCardEl = document.getElementById(otherCard);
    const iconEl = cardEl.children[0];
    const otherIconEl = otherCardEl.children[0];

    if (cardEl.classList.contains("focused-card")) {
      cardEl.classList.remove("focused-card");
      iconEl.classList.remove("focused-card-icon");
      if (otherCardEl.classList.contains("focused-card")) {
        otherCardEl.classList.remove("focused-card");
        otherIconEl.classList.remove("focused-card-icon");
      }
    } else {
      cardEl.classList.add("focused-card");
      iconEl.classList.add("focused-card-icon");
      if (otherCardEl.classList.contains("focused-card")) {
        otherCardEl.classList.remove("focused-card");
        otherIconEl.classList.remove("focused-card-icon");
      }
    }
  };

  return (
    <>
      <div className="Third-page container">
        <Header
          mainHeading="How are you planning to use Eden?"
          subHeading="We'll streamline your setup experience accordingly."
        />
        <div className="two-container">
          {/* For myself */}
          <div className="for-myself" id="for-myself" onClick={handleOnClick}>
            <RiUserFill className="user-icon" />
            <h1 className="title">For myself</h1>
            <p className="box-content">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          {/* With my team */}

          <div
            className="with-my-team"
            id="with-my-team"
            onClick={handleOnClick}
          >
            <RiTeamFill className="team-icon" />
            <h1 className="title">With my team</h1>
            <p className="box-content">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
