import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 py-1 m-2 bg-slate-200 rounded-lg">{name}</button>
  );
};

export default Button;
