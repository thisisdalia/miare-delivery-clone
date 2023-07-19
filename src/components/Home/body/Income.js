import React, { Fragment } from "react";

import classes from "../styles/Income.module.css";

import Button from "../UI/Button";

const income = [
  {
    incomeImg: require("../../../assets/home-assets/ZeroComission.png"),
    incomeTitle: "کمیسیون صفر",
    description: `سفیران موتوری هیـچ کمیسیونی
    به «میاره» پـــــــــرداخت نمی‌کنند.`,
  },
  {
    incomeImg: require("../../../assets/home-assets/Coin.png"),
    incomeTitle: "درآمد بالاتر از پیک رستوران",
    description: `درآمد سفیران موتوری در «میاره» حداقل ۳۰٪ از پیــــــک رستــــــوران بیشتر است.`,
  },
  {
    incomeImg: require("../../../assets/home-assets/Gurantee.png"),
    incomeTitle: "تضمین درآمد روزانه",
    description: `«میاره» درآمـــد سفیـــــــران را در هر
    منطقه و هر شیفت تضمین‌می‌کند.`,
  },
];

function Income() {
  return (
    <Fragment>
      <div className={classes["main-income"]}>
        <div className={classes["income-wrapper"]}>
          {income.map((item) => (
            <div className={classes["income-items"]}>
              <img src={item.incomeImg} alt="" />
              <h4>{item.incomeTitle}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={classes["income-btn"]}>
          <Button>ثبت نام سفیر</Button>
        </div>
        <div className={classes.line}></div>
        <div className={classes["income-social"]}>
          <h2>میاره را در شبکه های اجتماعی دنبال کنید</h2>
          <div className={classes["income-logos"]}>
            <img
              src={require("../../../assets/home-assets/Telegram-logo.png")}
              alt="telegram"
            />
            <img
              src={require("../../../assets/home-assets/Aparat-logo.png")}
              alt="aparat"
            />
            <img
              src={require("../../../assets/home-assets/Instagram-logo.png")}
              alt="instagram"
            />
            <img
              src={require("../../../assets/home-assets/Twitter-logo.png")}
              alt="twitter"
            />
            <img
              src={require("../../../assets/home-assets/Linkedin-logo.png")}
              alt="linkedin"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Income;
