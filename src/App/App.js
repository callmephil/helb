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
  MemorialPage,
  EventsPage,
} from "../Pages";

import "./App.css";
import HealthCarePage from "../Pages/VolunteersPage/HealthCarePage";
import RenovationsPage from "../Pages/VolunteersPage/RenovationsPage";
import HousingPage from "../Pages/VolunteersPage/HousingPage";

function App() {

  return (
    <Fragment>
      <ResponsiveContainer>
        <Container className="main-container">
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/institutions" exact render={() => <InstitutionsPage />} />
          <Route path="/fundings" exact render={() => <FundingPage />} />
          <Route path="/events" exact render={() => <EventsPage />} />
          <Route path="/memorial" exact render={() => <MemorialPage />} />
          <Route path="/volunteers/health" exact render={() => <HealthCarePage />} />
          <Route path="/volunteers/renovation" exact render={() => <RenovationsPage />} />
          <Route path="/volunteers/housing" exact render={() => <HousingPage />} />
          <Route path="/profile" exact render={() => <ProfilePage />} />
        </Container>
      </ResponsiveContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
