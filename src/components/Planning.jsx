import React from "react";
import "./planning.css";
import { RiUserFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";

const Planning = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <div>
      <div className="heading-cluster">
        <h1 className="heading">How are you planning to use Eden?</h1>
        <h3 className="subHeading">
          We'll streamline your setup experience accordingly.
        </h3>
      </div>

      <div className="Third-page container">
        <div className="two-container">
          {/* For myself */}
          <div class="for-myself">
            <RiUserFill className="user-icon" />
            <h1 className="title">For myself</h1>
            <p className="box-content">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          {/* With my team */}

          <div class="with-my-team">
            <RiTeamFill className="team-icon" />
            <h1 className="title">With my team</h1>
            <p className="box-content">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planning;
