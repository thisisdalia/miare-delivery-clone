import React, { Fragment } from "react";

import classes from "../styles/Services.module.css";

import Button from "../UI/Button";

const servises = [
  {
    imgSrc: require("../../../assets/home-assets/sale.png"),
    title: "تخفیف شروع کار",
    description: `همـه کسـب‌وکارها در ماه اول همکاری با «میاره»، ۶۰٪ تخفیف دریافت می‌کنند.`,
  },
  {
    imgSrc: require("../../../assets/home-assets/Clock.png"),
    title: "اعزام ده دقیقه ای",
    description: `فــــقط با یک کلیـــــــک در پنــــل کاربری «میاره»، کم‌تر از ۱۰ دقیقه نزدیک‌ترین سفیــــــر در محــــــل حاضـــــر می‌شود.`,
  },
  {
    imgSrc: require("../../../assets/home-assets/BoxF.png"),
    title: "حذف دغدغه ارسال",
    description: `با «میاره» دغدغه ارسال و تاخیر در تحویل سفــارش به مشتریان برای کســـــــب‌وکارها وجود ندارد.`,
  },
];

function Servises() {
  return (
    <Fragment>
      <div className={classes["main-service"]}>
        <div className={classes["service-wrapper"]}>
          <div className={classes["service-header"]}>
            <h1>با «میاره» دغدغه ارسال وجود نداره!</h1>
            <p>
              با مشکلات استخدام پیک‌ موتوری خداحافظی کنید و با استفاده از خدمات
              ارسال سریع «میاره» مشتریان خود را افزایش دهید.
            </p>
          </div>
          <div className={classes["service-box"]}>
            {servises.map((item) => (
              <div className={classes["service-item"]}>
                <img src={item.imgSrc} alt="item" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={classes["service-btn"]}>
            <Button>ثبت‌نام کسب‌وکار</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Servises;
