import { Fragment } from "react";

import classes from "../styles/About.module.css";

function About() {
  return (
    <Fragment>
      <div className={classes["main-about"]}>
        <h1>درباره «میاره»</h1>
        <p>
          شرکت همیار سریع پارس با نام تجاری «میاره»، استارت‌آپی دانش‌بنیان و
          تکنولوژی‌محور است که در سال ۱۳۹۶ کار خود را از هسته‌های مرکز کارآفرینی
          شریف شروع کرد.
        </p>
      </div>
    </Fragment>
  );
}

export default About;
