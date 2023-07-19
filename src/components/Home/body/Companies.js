import React, { Fragment } from "react";

import classes from "../styles/Companies.module.css";

function Companies() {
  return (
    <Fragment>
      <div className={classes["main-comp"]}>
        <div className={classes["comp-title"]}>
          <h1>سال‌هاست در کنارتان هستیم</h1>
          <p>
            سال‌هاست هر روز هفته، در سرما و گرما و حتی روزهای سخت، به
            مشتریان‌مان خدمت می‌کنیم. ما به این ماموریت افتخار می‌کنیم؛ چون
            رضایت شما اعتبار ماست.
          </p>
        </div>
        <div className={classes["comp-img"]}>
          <img
            src={require("../../../assets/home-assets/all-logos.png")}
            alt="logos"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Companies;
