import React from "react";
import Button from "./Button";
import { BUTTON_LIST_ARR } from "../utils/variables/constants";

const ButtonList = () => {
  return (
    <div>
      {BUTTON_LIST_ARR.map((item, index) => {
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
