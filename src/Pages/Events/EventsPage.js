import React from "react";
import { Container, Card, Grid, Divider } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import SocialCard from "./Components/SocialCard";
import _ from "lodash";

import "./EventsPage.css";

const data = [
  "https://www.instagram.com/p/CDq5WKLn1E8/",
  "https://twitter.com/AnisTabet23/status/1292343373353885698",
  "https://www.instagram.com/p/CDq23qEHJw3/",
  "https://www.instagram.com/p/CDpJPgpnrTr/",
  "https://twitter.com/AnisTabet23/status/1293114912672231424",
  "https://www.facebook.com/109020704256138/photos/a.109047247586817/109128447578697/",
];

export default function EventsPage() {
  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Events"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`}
      />

      <Grid columns="three" stackable doubling>
        <Grid.Row>
          {_.map(data, (url) => (
            <Grid.Column relaxed>
              <SocialCard key={url} url={url} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
