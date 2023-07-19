import React, { Fragment } from "react";

import classes from "../styles/Phone.module.css";

import Button from "../UI/Button";

function Phone() {
  return (
    <Fragment>
      <div className={classes["main-phone"]}>
        <div className={classes["main-wrapper"]}>
          <div className={classes["phone-img"]}>
            <img
              src={require("../../../assets/home-assets/PhoneLanding.png")}
              alt="phone"
            />
          </div>
          <div className={classes["phone-wrapper"]}>
            <div className={classes["phone-text"]}>
              <h2>اپلیکیشن «میاره» نسخه رانندگان</h2>
              <p>
                نسخه‌ سفیران برنامه «میاره»، با اندروید ورژن ۵.۰ به بالا
                ســــازگار است و به راحـــــتی روی همــــه‌ گوشی‌های هوشمند
                انـــدرویدی (سامسونگ، شیائومی، هواوی و …) نصب می‌شود.
              </p>
            </div>
            <div className={classes["phone-btn"]}>
              <Button>دانلود اپلیکیشن</Button>
              <Button>آموزش اپلیکیشن</Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Phone;
