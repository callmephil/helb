import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ResponsiveContainer from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Container } from "semantic-ui-react";
import {
  HomePage,
  ProfilePage,
  CampaignsPage,
  OrganizationsPage,
  MemorialPage,
  EventsPage,
} from "../Pages";

import "./App.css";
import HealthCarePage from "../Pages/VolunteersPage/HealthCarePage";
import RenovationsPage from "../Pages/VolunteersPage/RenovationsPage";
import HousingPage from "../Pages/VolunteersPage/HousingPage";
import FormContainer from "./Components/FormContainer";

function App() {
  const [visible, setVisible] = useState(false);
  const [formComponent, setFormComponent] = useState();
  return (
    <Fragment>
      <ResponsiveContainer>
        <FormContainer visible={visible} setVisible={setVisible} content={formComponent}>
          <Container className="main-container">
            <Switch>
              <Route path="/" exact render={() => <HomePage />} />
              <Route path="/organizations" exact render={() => <OrganizationsPage />} />
              <Route path="/campaigns" exact render={() => <CampaignsPage />} />
              <Route path="/events" exact render={() => <EventsPage />} />
              <Route path="/memorial" exact render={() => <MemorialPage />} />
              <Route path="/volunteers/health" exact render={() => <HealthCarePage />} />
              <Route path="/volunteers/renovation" exact render={() => <RenovationsPage />} />
              <Route path="/volunteers/housing" exact render={() => <HousingPage />} />
              <Route path="/profile" exact render={() => <ProfilePage setFormComponent={setFormComponent} setVisible={setVisible} />} />
            </Switch>
          </Container>
        </FormContainer>
      </ResponsiveContainer>
      <Footer />
    </Fragment>
  );
}

export default App;
