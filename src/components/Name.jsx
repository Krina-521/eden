import React from "react";
import Header from "./Header";
import "./name.css";
// import Workspace from "./Workspace";

const Name = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <>
      <form className="name-input-form">
        <Header
          mainHeading="Welcome! First things first..."
          subHeading="You can always change them later."
        />
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
    </>
  );
};

export default Name;
