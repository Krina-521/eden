import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import "./name.css";

const Name = () => {
  return (
    <>
      <form className="name-input-form">
        <Header
          mainHeading="Welcome! First things first..."
          subHeading="You can always change them later."
        />
        <Input labelText="Full Name" placeholder="Steve Jobs" onChange="" />
        <Input labelText="Display Name" placeholder="Steve" />
      </form>
    </>
  );
};

export default Name;
