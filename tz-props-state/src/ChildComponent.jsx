import React from "react";
import { useState } from "react";
import ParentComp from "./ParentComponent";

const ChildComponent = (props) => {
  let counter = props.count;
  return (
    <>
      <h2>
        - Привет, {props.username}! Текущий счетчик: {counter}
      </h2>
    </>
  );
};

export default ChildComponent;
