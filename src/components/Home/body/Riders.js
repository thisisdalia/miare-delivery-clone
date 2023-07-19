import React, { Fragment } from "react";

import classes from "../styles/Riders.module.css";

const riderBox = [
  {
    riderImg: require("../../../assets/home-assets/rider1.png"),
    star: require("../../../assets/home-assets/star.png"),
    title: " علیرضا ابیازنی",
    span: "موتور سوار",
    number: "95 / 100",
    description: `
    یکی از مزایای «میاره» درآمد بالای موتورسوار نسبت به شرکت‌های دیگر است. من از اینکه برای موتورسوار احترام خاصی قائل هستند، سپاسگزارم. پشتیبانی «میاره» همیشه با احترام جواب‌گو هستند و در کمترین زمان ممکن، سعی در رفع مشکل موتورسوارها دارند؛ که این خودش از بزرگ‌ترین مزایای شرکت «میاره» محسوب می‌شه.
    `,
  },
  {
    riderImg: require("../../../assets/home-assets/rider2.png"),
    star: require("../../../assets/home-assets/star.png"),
    title: " محمدرضا کیانی ",
    span: "موتور سوار",
    number: "97 / 100",
    description: `
    خواستم به نوبه خودم از تمامی همکاران «میاره» تشکر و قدردانی داشته باشم. بنده در این مدتی که در مجموعه «میاره» افتخار همکاری داشتم، نکات مثبت به قدری بود که جایی برای انتقاد وجود ندارد.
    `,
  },
  {
    riderImg: require("../../../assets/home-assets/rider3.png"),
    star: require("../../../assets/home-assets/star.png"),
    title: "  سهیل عبدلی",
    span: "موتور سوار",
    number: "96 / 100",
    description: `
    امروز دو سال شد که از برنامه «میاره» استفاده می‌کنم و خواستم تشکر ویژه کنم از کسانی که این شرکت رو تاسیس کردند. درآمد بالای روزی یک میلیون تومان رو من در شرکت «میاره»، با کمک تیم پشتیبانی و قدرشناس که بیشترین کمک رو به سفیران موتوری در طول روز می‌کنند، تجربه کردم
    `,
  },
];

function Riders() {
  return (
    <Fragment>
      <div className={classes["main-rider"]}>
        {riderBox.map((item) => (
          <div className={classes["rider-wrapper"]}>
            <div className={classes["comment"]}>
              <div className={classes["rider-img"]}>
                <img src={item.riderImg} alt="person" />
              </div>
              <div className={classes["rider-box"]}>
                <div className={classes["rider-box-head"]}>
                  <div className={classes["rider-title"]}>
                    <h4>{item.title}</h4>
                    <span>{item.span}</span>
                  </div>
                  <div className={classes["rider-num"]}>
                    <h5>{item.number}</h5>
                    <img src={item.star} alt="star" />
                  </div>
                </div>
                <div className={classes["rider-box-body"]}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Riders;
