import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import SearchExampleCategory from "./Components/Filter";
import LawList from "./Components/LawList";

const initialState = [
  {
    title: "First Law",
    content: "First Content Law",
    definition: "This is the first law",
    usages: "this is applied all the time",
    tags: ["health", "energy", "education"],
  },
  {
    title: "Second Law",
    content: "Second Content Law",
    definition: "This is the Second law",
    usages: "this is applied all the time",
    tags: ["health", "energy"],
  },
  {
    title: "Third Law",
    content: "Third Content Law",
    definition: "This is the Third law",
    usages: "this is applied all the time",
    tags: ["health"],
  },
];

export default function LawPage() {
  const [state, setstate] = useState(initialState)
  const [noResult, setNoResults] = useState(false);

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

      <SearchExampleCategory source={initialState} _setResults={setstate} setNoResults={setNoResults} />

      <LawList laws={state} />

      {noResult && (
        <Container textAlign="center">
          <Image size="medium" src={`./assets/images/search-empty-icon.svg`} wrapped />
          <div style={{ textAlign: "center", fontWeight: 400, fontFamily: "Muli" }}>
            <p style={{ margin: "0", fontSize: "24px", color: "#242e4cm" }}>
              Sorry we couldn't find any matches
            </p>
            <p style={{ fontSize: "16px", color: "#7d7a9e" }}>
              Please try searching with another term
            </p>
          </div>
        </Container>
      )}
    </Container>
  );
}
