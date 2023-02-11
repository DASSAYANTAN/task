import React from "react";
import Styles from "./_task3.module.css";
import { useNavigate } from "react-router-dom";

const ThirdComp = () => {
  let navigate = useNavigate();
  let changeComp1 = () => {
    navigate("/");
  };
  let changeComp2 = () => {
    navigate("/comp2");
  };
  return (
    <div className={Styles.Comp}>
      <h1>Component 3</h1> <br />
      <button onClick={changeComp1}>Go to Page 1</button> &nbsp;
      <button onClick={changeComp2}>Go to Page 2</button>
    </div>
  );
};

export default ThirdComp;
