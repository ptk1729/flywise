import React from "react";
import TopBar from "../components/TopBar";
import WhatWeOffer from "../components/WhatWeOffer";
import { Container } from "@material-ui/core";

function HomePage(props) {
  return (
    <Container maxWidth="lg">
      <TopBar />
      <p className="indiaTextHomePage">
        India’s best overseas education platform that travels with you till you
        land your dream job
      </p>
      <WhatWeOffer />
    </Container>
  );
}

export default HomePage;
