import * as React from "react";

import "../scss/extras.scss";
import "../scss/main.scss";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Resume from "../components/Resume/Resume";
import About from "../components/About/About";

const IndexPage = () => {
  return (
    <main>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <div id="home" className="content">
        <title>Thomas Emilsson</title>
        <Header />
        <Hero />
        {/* <OptionList /> */}
        <Resume />
        <About />
        {/* <div className="diagonal-background"> */}
        {/* <Banner /> */}
        {/* </div> */}
        {/* <OptionList /> */}
      </div>
      {/* <div className="diagonal-background-inverse" /> */}
      <Footer />
    </main>
  );
};
//
export default IndexPage;
