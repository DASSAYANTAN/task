import React, { useState } from "react";
import Styles from "./_task1.module.css";

const Task1 = () => {
  let [state, setState] = useState({
    val: "",
    color: "",
  });
  let { val, color } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    console.log({ val, color });
  };

  return (
    <div>
      <form onClick={handleSubmit} className={Styles.formBlock}>
        <input
          type="tel"
          name="val"
          placeholder="enter width in mm"
          value={val}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="enter color name"
          value={color}
          onChange={handleChange}
        />
        {/* <button>Add</button> */}
      </form>
      <div
        style={{
          height: "200px",
          //   border: "1px solid",
          width: `${state.val}mm`,
          backgroundColor: `${state.color}`,
        }}
      ></div>
    </div>
  );
};

export default Task1;
