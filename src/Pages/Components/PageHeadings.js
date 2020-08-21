import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";

export default function PageHeadings({ title, description, children = null }) {
  return (
    <Container style={{ marginBottom: "4em" }}>
      <Header as="h3" style={{ fontSize: "2em" }} content={title} />
      <Divider />
      <p style={{ fontSize: "1.33em" }}>{description}</p>
      {children}
    </Container>
  );
}
