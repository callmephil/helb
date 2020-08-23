import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ResponsiveContainer from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Container } from "semantic-ui-react";
import {
  HomePage,
  ProfilePage,
  FundingPage,
  InstitutionsPage,
  MediaPage,
  MemorialPage,
  Services,
} from "../Pages";

import "./App.css";

function App() {

  return (
    <Fragment>
      <ResponsiveContainer>
        <Container className="main-container">
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/institutions" exact render={() => <InstitutionsPage />} />
          <Route path="/fundings" exact render={() => <FundingPage />} />
          <Route path="/media" exact render={() => <MediaPage />} />
          <Route path="/memorial" exact render={() => <MemorialPage />} />
          <Route path="/services" render={() => <Services />} />
          <Route path="/profile" exact render={() => <ProfilePage />} />
        </Container>
      </ResponsiveContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
