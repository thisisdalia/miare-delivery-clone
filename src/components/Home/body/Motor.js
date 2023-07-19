import React, { Fragment } from "react";

import classes from "../styles/Motor.module.css";

import Button from "../UI/Button";
import Button1 from "../UI/Button1";

function Motor() {
  return (
    <Fragment>
      <div className={classes["main-motor"]}>
        <div className={classes["motor-wrapper"]}>
          <h1> سفیر موتور "میاره" شوید</h1>
          <div className={classes["motor-btn"]}>
            <Button1>
              درآمد ماهیانه
              <span> 25 میلیون تومان</span>
            </Button1>
            <Button1>
              پاداش
              <span> یک میلیون تومانی </span>
              شروع کار
            </Button1>
          </div>
          <Button className={classes.button}>ثبت نام سفیر</Button>
        </div>
        <div className={classes["motor-img"]}>
          <img
            src={require("../../../assets/home-assets/courierMain.png")}
            alt="motor"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Motor;
