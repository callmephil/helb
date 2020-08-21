import React from "react";
import { Segment, Grid, Header, Button, Table, Container } from "semantic-ui-react";
import AccordionFAQ from "./Components/AccordionFAQ";

const AboutUs = () => {
  return (
    <Grid container>
      <Grid.Row>
        <Header as="h3" style={{ fontSize: "2em" }}>
          About Helb
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Helb is a collaborative website that aims to collect and display all the resources shared
          across social media, spreadsheet, instagram, twitter and facebook post. Including but not
          only the list of NGO(s), fund raising and any other form of usefull information that will
          help during the crisis of beirut, lebanon post date of 04.08.2020.
        </p>
      </Grid.Row>
    </Grid>
  );
};

const FAQ = () => {
  return (
    <Grid container>
      <Grid.Row>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Frequently Asked Questions
        </Header>
        <AccordionFAQ />
      </Grid.Row>
    </Grid>
  );
};

const Contributions = () => {
  return (
    <Container>
      <Header as="h3" style={{ fontSize: "2em" }}>
        Contributions
      </Header>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>No Action</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
            <Table.Cell>Requires call</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row warning>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>No Action</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell positive>Approved</Table.Cell>
            <Table.Cell warning>Requires call</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jill</Table.Cell>
            <Table.Cell negative>Denied</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
};

const CallToAction = () => {
  return (
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Need Help ?
          </Header>
          <p style={{ fontSize: "1.33em" }}>Find the right person the help you.</p>
          <Button size="huge" color="blue">
            Get Help
          </Button>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Help Us !
          </Header>
          <p style={{ fontSize: "1.33em" }}>There's still a lot of resources out there.</p>
          <Button size="huge" color="black">
            Contribute
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default function HomePage() {
  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <AboutUs />
      <FAQ />
      <CallToAction />
      <Contributions />
    </Segment>
  );
}
