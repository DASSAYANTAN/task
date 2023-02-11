import React from "react";
import Styles from "./_task3.module.css";
import { useNavigate } from "react-router-dom";

const FirstComp = () => {
  let navigate = useNavigate();
  let changeComp = () => {
    navigate("comp2");
  };
  return (
    <div className={Styles.Comp}>
      <h1>Component 1</h1> <br />
      <button onClick={changeComp}>Go to Page 2</button>
    </div>
  );
};

export default FirstComp;
