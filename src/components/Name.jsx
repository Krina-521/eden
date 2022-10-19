import React from "react";
import "./name.css";
// import Workspace from "./Workspace";

const Name = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <div>
      <div className="heading-cluster">
        <h1 className="heading"> Welcome! First things first...</h1>
        <h3 className="subHeading">You can always change them later.</h3>
      </div>
      <div className="First">
        <form className="input-form">
          <div className="input-container">
            <label className="fullname-label">Full Name</label>
            <input
              type="text"
              placeholder="Steve Jobs"
              className="fullname-input"
              required
            />
          </div>

          <div className="input-container">
            <label className="displayname-label">Display Name</label>
            <input
              type="text"
              placeholder="Steve"
              className="displayname-input"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Name;
