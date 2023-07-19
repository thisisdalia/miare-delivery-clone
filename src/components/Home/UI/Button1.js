import React from "react";

import classes from "./Button1.module.css";

function Button1(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button1;
