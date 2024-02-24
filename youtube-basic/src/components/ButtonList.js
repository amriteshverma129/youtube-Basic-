import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listObj = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "Tech",
    "Construction",
    "Cooking",
    "Race",
  ];
  return (
    <div>
      {listObj.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Button name={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ButtonList;
