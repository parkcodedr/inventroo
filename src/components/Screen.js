import React from "react";
import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={30}>
      {value}
    </Textfit>
  );
};

export default Screen;
