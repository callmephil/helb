import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import PageHeadings from "../Components/PageHeadings";
import SearchExampleCategory from "./Components/Filter";
import LawList from "./Components/LawList";

const initialState = [
  {
    title: "First Law",
    content: "First Content Law",
    definition: "This is the first law",
    usages: "this is applied all the time",
    tags: ["health", "energy"],
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
    tags: ["health", "energy"],
  },
];

export default function LawPage() {
  const [state, setstate] = useState(initialState)

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

      <SearchExampleCategory source={initialState} _setResults={setstate} />

      <LawList laws={state} />
    </Container>
  );
}
