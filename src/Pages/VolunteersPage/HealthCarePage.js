import React, { useEffect, useState } from "react";
import PageHeadings from "../Components/PageHeadings";
import { Container } from "semantic-ui-react";
import VolunteerCard from "./Components/VolunteerCard";
import { SearchNotFound, SearchBar } from "../Components/SearchBar";

const _struct = {
  type: "Medical Assistance",
  status: "Available",
  updated: "24/08/20",
  location: "Home services",
  contact: {
    name: "Mohammed Yazbek",
    phones: ["70362055", ],
  },
  serviceType: "Physiotherapy",
  social: [
    // {
    //   type: "facebook",
    //   src: "https://facebook.com",
    // },
    {
      type: "instagram",
      src: "https://www.instagram.com/hope_lebanon/",
    },
  ],
  description: `No description`,
  labels: ["Free"],
  meta: {
    by: "Helb",
    date: "24/08/20",
    cardId: 1,
  },
};

export default function HealthCarePage() {
  const [result, setResults] = useState([]);
  const [noresult, setNoResults] = useState(false);

  useEffect(() => {
  }, []);

  const Render = () => {
    return noresult ? (
      <SearchNotFound />
    ) : (
      <VolunteerCard {..._struct}/>
    );
  };

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Volunteers - Health Care"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.`}
      />

      <SearchBar source={result} _setResults={setResults} setNoResults={setNoResults} />

      <Render />

    </Container>
  );
}
