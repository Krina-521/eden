import React from "react";
import "./workSpace.css";

const Workspace = ({ props }) => {
  // const nextPage = () => props(true);
  return (
    <div>
      <div className="heading-cluster">
        <h1 className="heading"> Let's set up a home for all your work</h1>
        <h3 className="subHeading">
          You can always create another workspace later.
        </h3>
      </div>
      <div className="Second-page">
        <form className="input-form">
          <div className="input-container">
            <label className="workSpaceName-label">Workspace Name</label>
            <input
              type="text"
              placeholder="Steve Jobs"
              className="workSpaceName-input"
              required
            />
          </div>

          <div className="input-container">
            <label className="workSpaceURL-label">
              Workspace URL <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Steve"
              className="workSpaceURL-input"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Workspace;
