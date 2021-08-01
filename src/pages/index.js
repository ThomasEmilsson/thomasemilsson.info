import * as React from "react";

import "../scss/extras.scss";
import "../scss/main.scss";

import Header from "../components/Header/Header";
import OptionList from "../components/OptionList/OptionList";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <main>
      <content>
        <title>🇸🇪 🇵🇪</title>
        <Header />
        <div className="diagonal-background">
          <Banner />
        </div>
        <OptionList />
      </content>
      <div className="diagonal-background-inverse" />
      <Footer />
    </main>
  );
};

export default IndexPage;
