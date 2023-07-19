import React, { Fragment } from "react";

import Hero from "../hero/Hero";
import Restaurant from "./Restaurant";
import Motor from "./Motor";
import Phone from "./Phone";
import Servises from "./Services";
import Person from "./Person";
import Riders from "./Riders";
import Companies from "./Companies";
import Tafahom from "./Tafahom";
import About from "./About";
import Income from "./Income";
import Footer from "./Footer";

function Home() {
  return (
    <Fragment>
      <Hero />
      <Restaurant />
      <Motor />
      <Phone />
      <Servises />
      <Person />
      <Riders />
      <Companies />
      <Tafahom />
      <About />
      <Income />
      <Footer />
    </Fragment>
  );
}

export default Home;
