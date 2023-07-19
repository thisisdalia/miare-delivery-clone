import React from "react";

import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.btn} || ${classes.btn1} ${props.className} `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
