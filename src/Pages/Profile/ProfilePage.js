import React from "react";
import { Grid, Header, Button, Container } from "semantic-ui-react";
import ProfileCard from "./Components/ProfileCard";
import MyContributionTable from "./Components/MyContributionTable";
import PageHeadings from "../Components/PageHeadings";

function ProfileContributionAction() {
  return (
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Header as="h3" style={{ fontSize: "1.2em" }}>
            Simple Contribution
          </Header>
          <p style={{ fontSize: "1em" }}>
            You found something interesting you would like to share? Click the button below. best fit for media feed.
          </p>
          <Button size="huge" color="blue">
            Contribute
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" style={{ fontSize: "1.2em" }}>
            Advanced Contribution
          </Header>
          <p style={{ fontSize: "1em" }}>
            If you're an activist or an advanced user, you can contribute by adding Institutions and
            much more...
          </p>
          <Button size="huge" color="black">
            Contribute
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default function ProfilePage() {
  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings title="Profile Page" description={``}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={6} computer={4} stretched>
              <ProfileCard
                name="Philippe Makzoume"
                email={"phil.makzoume@gmail.com"}
                accType="Standard"
                contributions={0}
              />
            </Grid.Column>

            <Grid.Column mobile={16} tablet={10} computer={12}>
              <PageHeadings
                title="Contribute"
                description={`Your Contributions Helps Helb helping others by providing them rapid and reliable informations. Choose below how you would like to help helb improve its content.`}>
                <ProfileContributionAction />
              </PageHeadings>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <PageHeadings title="My Contributions" description={``}>
                <MyContributionTable />
              </PageHeadings>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PageHeadings>
    </Container>
  );
}
