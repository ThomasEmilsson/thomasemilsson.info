import * as React from "react";
import "../scss/main.scss";
import Header from "../components/Header/Header";
// import Card from "../components/Card/Card";
import OptionList from "../components/OptionList/OptionList";
import Banner from "../components/Banner/Banner";

const IndexPage = () => {
  return (
    <main>
      <title>🇸🇪 🇵🇪</title>
      <Header />
      <div className="diagonal-background">
        <div style={{ paddingTop: "20px" }} />
        <Banner />
      </div>
      <div>
        <OptionList />
      </div>
    </main>
  );
};

export default IndexPage;
