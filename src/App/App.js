import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResponsiveContainer from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Container } from "semantic-ui-react";
import {
  HomePage,
  ProfilePage,
  FundingPage,
  InstitutionsPage,
  MediaPage,
  MissingPage,
  Volunteers,
  Shelters,
} from "../Pages";

import "./App.css";

function App() {
  return (
    <Router>
      <ResponsiveContainer>
        <Container className="main-container">
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/institutions" exact render={() => <InstitutionsPage />} />
          <Route path="/fundings" exact render={() => <FundingPage />} />
          <Route path="/media" exact render={() => <MediaPage />} />
          <Route path="/missings" exact render={() => <MissingPage />} />
          <Route path="/volunteers" exact render={() => <Volunteers />} />
          <Route path="/shelters" exact render={() => <Shelters />} />
          <Route path="/profile" exact render={() => <ProfilePage />} />
        </Container>
      </ResponsiveContainer>
      <Footer />
    </Router>
  );
}

export default App;
