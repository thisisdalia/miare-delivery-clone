import React, { Fragment } from "react";

import classes from "./Hero.module.css";

import Navbar from "./Navbar";
import Button from "../UI/Button";

function Hero() {
  return (
    <Fragment>
      <Navbar />
      <div className={classes["hero-main"]}>
        <div className={classes["hero-img"]}>
          <img
            src={require("../../../assets/home-assets/motorcycle.png")}
            alt="motorCycle"
          />
        </div>
        <div className={classes["hero-wrapper"]}>
          <div className={classes["hero-text"]}>
            <h1>!با استخدام پیک موتوری خداحافظی کنید</h1>
            <p>
              در فرایند ارسال سفارش برای مشتــــــــریان، هر ثانیه ارزشمند است.
              تمامی مشاغـــلی که به
              <span> "ارسال روزانه"</span>
              محصـــــولات‌شان نیاز دارند، با سرویس ارسال سریـــع "میاره"،
              می‌تــــوانند روی کار اصلی خود تمرکز کنند و دغدغه
              <span> ارسال سریع </span>
              محصولات‌شان را نداشته باشند
            </p>
          </div>
          <div className={classes["hero-btn"]}>
            <Button>ثبت نام رایگان کسب و کار</Button>
            <Button>ثبت نام رایگان سفیر موتوری</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
