import React from "react";
import "./header.css";

const Header = ({ mainHeading, subHeading }) => {
  return (
    <div className="heading-cluster">
      <h1 className="heading"> {mainHeading}</h1>
      <h3 className="subHeading">{subHeading}</h3>
    </div>
  );
};

export default Header;
