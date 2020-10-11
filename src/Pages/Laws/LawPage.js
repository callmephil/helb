import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import { SearchBar, SearchNotFound } from "../Components/SearchBar";
import LawList from "./Components/LawList";

const initialState = [
  {
    title: "First Law",
    content: "First Content Law",
    definition: "This is the first law",
    usages: "this is applied all the time",
    tags: ["Health", "Energy", "Education"],
  },
  {
    title: "Second Law",
    content: "Second Content Law",
    definition: "This is the Second law",
    usages: "this is applied all the time",
    tags: ["Health", "Energy"],
  },
  {
    title: "Third Law",
    content: "Third Content Law",
    definition: "This is the Third law",
    usages: "this is applied all the time",
    tags: ["Health"],
  },
];

export default function LawPage() {
  const [state, setstate] = useState(initialState)
  const [noResult, setNoResults] = useState(false);

  const Render = () => {
    return noResult ? <SearchNotFound /> : <LawList laws={state} />
  }

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Laws"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}
      />

      <SearchBar source={initialState} _setResults={setstate} setNoResults={setNoResults} />

      <Render />

    </Container>
  );
}
