import React, { Fragment } from "react";

import classes from "../styles/Footer.module.css";

import Button1 from "../UI/Button1";

function Footer() {
  return (
    <Fragment>
      <div className={classes["main-footer"]}>
        <div className={classes["footer-wrapper"]}>
          <div className={classes["footer-line1"]}>
            <div className={classes["footer-address"]}>
              <img
                src={require("../../../assets/home-assets/location-pin.png")}
                alt="location"
              />
              <p>
                تهران، خیابان اشرفی اصفهانی، بالاتر از همت ابتدای خیابان
                خوش‌طینت، پلاک ۵
              </p>
            </div>
            <div className={classes["footer-btn1"]}>
              <Button1>
                <img
                  src={require("../../../assets/home-assets/purple-mail.png")}
                  alt="mail"
                />
                info@miare.ir
              </Button1>
              <Button1>
                <img
                  src={require("../../../assets/home-assets/purple-phone.png")}
                  alt="phone"
                />
                021-91009282
              </Button1>
            </div>
          </div>
          <div className={classes["footer-line2"]}>
            <div className={classes["footer-policy"]}>
              <img
                src={require("../../../assets/home-assets/miare-purple-logo.png")}
                alt="logo"
              />
              <p>
                کلیه حقوق این سایت متعلق به شرکت همیار سریع پارس (سرویس دلیوری
                میاره) است.
              </p>
            </div>
            <div className={classes["footer-btn2"]}>
              <Button1>مستندات فنی</Button1>
              <Button1>موقعیت های شغلی</Button1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
