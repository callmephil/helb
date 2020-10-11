import _ from "lodash";
import useAxios from "axios-hooks";
import { Container, Card } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import React, { Fragment, useEffect, useState } from "react";
import OrganizationCard from "./Components/OrganizationCard";
import { makeKeyOfObject } from "../../Utils/ComponentHelpers";
import { SearchBar, SearchNotFound } from "../Components/SearchBar";

export default function OrganizationsPage() {
  const [{ data, error, loading }] = useAxios("./assets/static/organizations.json");
  const [result, setResults] = useState([]);
  const [noresult, setNoResults] = useState(false);

  useEffect(() => {
    setResults(data);
  }, [data]);

  if (error) return <Fragment />;
  if (loading) return <Fragment />;

  const Render = () => {
    return noresult ? (
      <SearchNotFound />
    ) : (
      <Card.Group stackable doubling itemsPerRow={3}>
        {_.map(result, (card) => (
          <OrganizationCard key={makeKeyOfObject(card)} cardContent={card} />
        ))}
      </Card.Group>
    );
  };

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Organizations"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}
      />

      <SearchBar source={data} _setResults={setResults} setNoResults={setNoResults} />

      <Render />
    </Container>
  );
}
