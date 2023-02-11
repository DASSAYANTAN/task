import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";

const Task3 = () => {
  let db = [
    {
      path: "/",
      element: <FirstComp />,
      id: 1,
    },
    {
      path: "/comp2",
      element: <SecondComp />,
      id: 2,
    },
    {
      path: "/comp3",
      element: <ThirdComp />,
      id: 3,
    },
  ];
  return (
    <Router>
      <BreadCrumb />
      <Routes>
        ]
        {db.map((val, index) => {
          console.log(val);
          return <Route path={val.path} element={val.element} key={index} />;
        })}
      </Routes>
    </Router>
  );
};

export default Task3;
