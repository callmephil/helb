import React, { Fragment } from "react";
import { useSearch } from "../../Hooks";
import { Image, Container, Form } from "semantic-ui-react";

export function SearchNotFound() {
  return (
    <Container textAlign="center">
      <Image size="medium" src={`./assets/images/search-empty-icon.svg`} wrapped />
      <div style={{ textAlign: "center", fontWeight: 400, fontFamily: "Muli" }}>
        <p style={{ margin: "0", fontSize: "24px", color: "#242e4cm" }}>
          Sorry we couldn't find any matches
        </p>
        <p style={{ fontSize: "16px", color: "#7d7a9e" }}>Please try searching with other terms</p>
      </div>
    </Container>
  );
}

export function SearchBar({ source, _setResults, setNoResults }) {
  const _fn = useSearch(source, _setResults, setNoResults);

  return (
    <Fragment>
      <Form onSubmit={_fn.handleSearch}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            width="14"
            icon="search"
            placeholder="Search..."
            onChange={_fn.handleChange}
          />
          <Form.Button type="submit" fluid width="2" content="Search" />
        </Form.Group>
      </Form>
    </Fragment>
  );
}
