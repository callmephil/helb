import React from "react";
import { Container } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import { Route, Switch } from "react-router-dom";
import HealthCarePage from "./HealthCarePage";
import HousingPage from "./HousingPage";
import RenovationsPage from "./RenovationsPage";

export default function Services() {
  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Services"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.`}
      />
      <Switch>
        <Route path="/services/health" exact render={() => <HealthCarePage />} />
        <Route path="/services/renovation" exact render={() => <RenovationsPage />} />
        <Route path="/services/housing" exact render={() => <HousingPage />} />
      </Switch>
    </Container>
  );
}
