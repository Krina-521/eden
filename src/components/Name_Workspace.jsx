import React, { useContext, useState } from "react";
import { Details } from "../App";

const Name_Workspace = ({ id, show, setShow }) => {
  const { nameInfo, setNameInfo, workSpaceInfo, setWorkSpaceInfo } =
    useContext(Details);

  const nameDetails = {
    id: 1,
    heading: "Welcome! First things first",
    subHeading: "You can always change them later",
    fieldName1: "FullName",
    placeHolderInput1: "Steve Jobs",
    fieldName2: "Display Name",
    placeHolderInput2: "Steve",
  };
  const workSpaceDetails = {
    id: 2,
    heading: "Let's set up a home for all your work",
    subHeading: "You can always create another workspace later",
    fieldName1: "Workspace Name",
    placeHolderInput1: "Eden",
    fieldName2: "Worspace URL",
    placeHolderInput2: "Example",
  };

  const nameDefaultData = {
    dataId: nameInfo.length + 1,
    fullName: "",
    displayName: "",
  };

  const workSpaceDefaultData = {
    dataId: workSpaceInfo.length + 1,
    workspaceName: "",
    workspaceURL: "",
  };

  const [nameData, setNameData] = useState(nameDefaultData);
  const [workSpaceData, setWorkSpaceData] = useState(workSpaceDefaultData);
  return (
    <div className="main-container">
      <h1 className="heading">
        {id === 1 ? nameDetails.heading : workSpaceDetails.heading}
      </h1>
      <h3 className="subHeading">
        {id === 1 ? nameDetails.subHeading : workSpaceDetails.subHeading}
      </h3>
      <form
        onSubmit={(e) => {
          if (id === 1) {
            setNameInfo([...nameInfo, nameData]);
          }
          if (id === 2) {
            setWorkSpaceInfo([...workSpaceInfo, workSpaceData]);
          }
          e.preventDefault();
          setShow(!show);
        }}
      >
        <p className="field-name-1">
          {" "}
          {id === 1 ? nameDetails.fieldName1 : workSpaceDetails.fieldName1}
        </p>
        <input
          className=""
          placeholder={
            id === 1
              ? nameDetails.placeHolderInput1
              : workSpaceDetails.placeHolderInput1
          }
          value={
            id === 1 ? `${nameData.fullName}` : `${workSpaceData.workspaceName}`
          }
          onChange={(e) => {
            if (id === 1) {
              setNameData({ ...nameData, fullName: e.target.value });
            }
            if (id === 2) {
              setWorkSpaceData({
                ...workSpaceData,
                workspaceName: e.target.value,
              });
            }
            e.preventDefault();
            setShow(!show);
          }}
          required
        ></input>

        <p className="field-name-2">
          {" "}
          {id === 1 ? nameDetails.fieldName2 : workSpaceDetails.fieldName2}
        </p>
        <input
          className=""
          placeholder={
            id === 1
              ? nameDetails.placeHolderInput2
              : workSpaceDetails.placeHolderInput2
          }
          value={
            id === 1
              ? `${nameData.displayName}`
              : `${workSpaceData.workspaceURL}`
          }
          onChange={(e) => {
            if (id === 1) {
              setNameData({ ...nameData, displayName: e.target.value });
            }
            if (id === 2) {
              setWorkSpaceData({
                ...workSpaceData,
                workspaceURL: e.target.value,
              });
            }
          }}
          required
        ></input>
        <button className="" type="" onClick="">
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default Name_Workspace;
