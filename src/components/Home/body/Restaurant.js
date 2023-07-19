import React, { Fragment } from "react";

import classes from "../styles/Restaurant.module.css";

import Button from "../UI/Button";
import Button1 from "../UI/Button1";

function Restaurant() {
  return (
    <Fragment>
      <div className={classes["main-rest"]}>
        <div className={classes["rest-wrapper"]}>
          <h1> ویژه کسب و کارها</h1>
          <div className={classes["rest-btn"]}>
            <Button1> شصت درصد تخفیف اشتراک در ماه اول</Button1>
            <Button1>اعزام پیک موتوری کمتر از ده دقیقه</Button1>
          </div>
          <Button className={classes.button}>ثبت نام کسب و کار</Button>
        </div>
        <div className={classes["rest-img"]}>
          <img
            src={require("../../../assets/home-assets/restaurant.png")}
            alt="restaurant"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Restaurant;
