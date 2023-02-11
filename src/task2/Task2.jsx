import React, { useState } from "react";
import Styles from "./_task2.module.css";

const Task2 = () => {
  let slots = [
    { slot: 1 },
    { slot: 2 },
    { slot: 3 },
    { slot: 4 },
    { slot: 5 },
    { slot: 6 },
    { slot: 7 },
    { slot: 8 },
  ];
  let [count, setCount] = useState(0);
  let handleChange = e => {
    if (e.target.checked === true) {
      setCount(count + 1);
    } else if (e.target.checked === false) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
      <section className={Styles.task2}>
          
      <div className={Styles.heading}>
        <h1>total slots:{slots.length}</h1>
        <h1>selected slots:{count}</h1>
        <h1>available slots:{slots.length - count}</h1>
      </div> <br /> <br /> <br />

      <article className={Styles.body}>
        {slots.map(val => {
          return (
              <div key={val.slot} >
              <input
                type="checkbox"
                name="name"
                id="name"
                multiple
                onClick={handleChange}
              />
              <span>{val.slot}</span>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Task2;
