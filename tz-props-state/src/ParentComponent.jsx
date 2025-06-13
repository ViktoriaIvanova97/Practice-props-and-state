import React from "react";
import { useState } from "react";

const ParentComp = () => {
  const [state, setState] = useState(0);

  const randomValue = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setState(random);
  };

  const decraeseButton = () => {
    if (state > 0) {
      setState((val) => val - 1);
    }
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setState((val) => val + 1)}>Increase</button>
      <button onClick={() => setState(0)}>Reset</button>
      <button onClick={randomValue}>Random value</button>
      <button onClick={decraeseButton}>decrease</button>
    </>
  );
};

export default ParentComp;
