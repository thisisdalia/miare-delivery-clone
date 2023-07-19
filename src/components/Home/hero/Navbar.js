import React, { Fragment } from "react";

import classes from "./NavBar.module.css";

function Navbar() {
  return (
    <Fragment>
      <div className={classes["nav-main"]}>
        <div className={classes["nav-logo"]}>
          <img
            src={require("../../../assets/home-assets/miare-logo-yellow.png")}
            alt="logo"
          />
        </div>
        <div className={classes["nav-list"]}>
          <ul>
            <li>دریافت برنامه سفیران</li>
            <li>مراکز ثبت نام حضوری</li>
            <li>مناطق تحت پوشش</li>
            <li>ورود به پنل کسب و کار</li>
            <span className={classes.phone}>
              <p>تماس با "میاره"</p>
              <img
                src={require("../../../assets/home-assets/phone.png")}
                alt="phone"
              />
            </span>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
