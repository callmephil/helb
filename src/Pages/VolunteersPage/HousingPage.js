import React, { Fragment, useEffect, useState } from "react";
import PageHeadings from "../Components/PageHeadings";
import { Container } from "semantic-ui-react";
import { SearchBar, SearchNotFound } from "../Components/SearchBar";

export default function HousingPage() {
  const [result, setResults] = useState([]);
  const [noresult, setNoResults] = useState(false);

  useEffect(() => {
  }, []);

  const Render = () => {
    return noresult ? (
      <SearchNotFound />
    ) : (
      <Fragment />
    );
  };

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Volunteers - Housing"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.`}
      />
      
      <SearchBar source={[]} _setResults={setResults} setNoResults={setNoResults} />

      <Render />

    </Container>
  );
}
