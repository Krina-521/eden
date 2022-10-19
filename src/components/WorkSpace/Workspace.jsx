import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import "./workSpace.css";

const Workspace = () => {
  return (
    <>
      <form className="workspace-input-form">
        <Header
          mainHeading="Let's set up a home for all your work"
          subHeading="You can always create another workspace later."
        />
        <Input labelText="Workspace Name" placeholder="Eden" />
        <Input
          labelText="Workspace URL"
          isOptional={true}
          hasPrefix={true}
          prefixText="www.eden.com/"
          placeholder="Example"
        />
      </form>
    </>
  );
};

export default Workspace;
