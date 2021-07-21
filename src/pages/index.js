import * as React from "react";
import "../scss/main.scss";
import Tester from "../components/palette-tester/paletteTester";
import Navbar from "../components/Navbar/Navbar";
// markup
const IndexPage = () => {
  return (
    <main>
      <title>🇸🇪 🇵🇪</title>
      <Navbar />
      <div className="about" id="about"></div>
      <div className="work" id="work"></div>
      <div className="contact" id="contact"></div>
    </main>
  );
};

export default IndexPage;
