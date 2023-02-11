import React from "react";
import Styles from "./_task3.module.css";
import { useNavigate } from "react-router-dom";

const BreadCrumb = () => {
  let navigate = useNavigate();
  let comp1 = () => {
    navigate("/");
  };
  let comp2 = () => {
    navigate("/comp2");
  };
  let comp3 = () => {
    navigate("/comp3");
  };
  return (
    <div className={Styles.breadCrumb}>
      <button onClick={comp1}>component1</button>
      <button onClick={comp2}>component2</button>
      <button onClick={comp3}>component3</button>
    </div>
  );
};

export default BreadCrumb;
