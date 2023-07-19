import React, { Fragment } from "react";

import classes from "../styles/Person.module.css";

function Person() {
  return (
    <Fragment>
      <div className={classes["main-person"]}>
        <div className={classes["person-text"]}>
          <h1>سفیر موتوری میاره یعنی سرعت</h1>
          <p>
            سفیران میاره میتوانند ساعت و منطقه دلخواه خود را برای انجام سفرها
            انتخاب کنند.<br></br> در تمامی مراحل سفر و در هر کجای شهر که باشند
            پشتیبانی میاره آن ها را همراهی میکند.
          </p>
        </div>
        <div className={classes["person-img"]}>
          <img
            src={require("../../../assets/home-assets/CourierMain2.png")}
            alt="person"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Person;
