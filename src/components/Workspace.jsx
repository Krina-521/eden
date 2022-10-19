import React from "react";
import Header from "./Header";
import "./workSpace.css";

const Workspace = ({ props }) => {
  // const nextPage = () => props(true);
  // const isOptional = () => {};
  // const hasPrefix = () => {};
  return (
    <>
      <form className="workspace-input-form">
        <Header
          mainHeading="Let's set up a home for all your work"
          subHeading="You can always create another workspace later."
        />
        <div className="input-container">
          <label className="workSpaceName-label">Workspace Name</label>
          <input
            type="text"
            placeholder="Eden"
            className="workSpaceName-input"
            required
          />
        </div>

        <div className="input-container">
          <label className="workSpaceURL-label">
            Workspace URL <span className="optional">(optional)</span>
          </label>
          <div className="input-group">
            <span
              className="input-group-text workSpaceURL-span"
              id="basic-addon3"
            >
              www.eden.com/
            </span>
            <input
              type="text"
              className="workSpaceURL-input"
              id="basic-url"
              placeholder="Example"
              aria-describedby="basic-addon3"
              required
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Workspace;
