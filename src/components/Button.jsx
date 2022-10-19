import React from "react";

const Button = ({ props }) => {
  const nextPage = () => props(true);
  return (
    <div>
      {" "}
      <button type="" className="create-workspace" onClick={nextPage}>
        Create workspace
      </button>
    </div>
  );
};

export default Button;
