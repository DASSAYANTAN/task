import React from "react";
import Styles from "./_task3.module.css";
import { useNavigate } from "react-router-dom";

const SecondComp = () => {
  let navigate = useNavigate();
  let changeComp = () => {
    navigate("/comp3");
  };
  return (
    <div className={Styles.Comp}>
      <h1>Component 2</h1> <br />
      <button onClick={changeComp}>Go to Page 3</button>
    </div>
  );
};

export default SecondComp;
