import * as React from "react";
import "../scss/main.scss";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";

const IndexPage = () => {
  return (
    <main>
      <title>🇸🇪 🇵🇪</title>
      <Header />
      <div className="diagonal-background">
        <div style={{ paddingTop: "20px" }} />

        <Card type="welcome" />
        {/* <Card type="experience" />
      <Card type="education" />
      <Card type="project" /> */}
      </div>
    </main>
  );
};

export default IndexPage;
