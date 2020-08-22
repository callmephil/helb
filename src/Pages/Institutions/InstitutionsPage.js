import _ from "lodash";
import React from "react";
import { Container, Card } from "semantic-ui-react";
import InstitutionCard from "./Components/InstitutionCard";
import { makeKeyOfObject } from "../../Utils/ComponentHelpers";
import PageHeadings from "../Components/PageHeadings";

const staticCards = [
  {
    image: {
      src: "https://offrejoie.org/wp-content/uploads/2020/08/offrejoie-logo.png",
      backgroundColor: "image-bg-blue",
    },
    institutionName: "Offre Joie",
    description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of young
        Red Cross volunteers worked together to help the injured. Alleviating human suffering
        transcended any differences between them.`,
    links: [
      {
        src: "/offre-joie.com/donate",
        icon: "money bill alternate outline",
        text: "Donate",
      },
      {
        src: "/offre-joie.com/volunteer",
        icon: "handshake outline",
        text: "Volunteer",
      },
    ],
    labels: ["shelters", "rebuilt", "something else"],
    meta: {
      by: "Helb",
      date: "20/08/20",
      cardId: 1,
    },
  },
  {
    image: {
      src: "https://www.caritas.org/wordpress/wp-content/uploads/2017/04/logo_large-1.png",
      backgroundColor: "image-bg-red",
    },
    institutionName: "Caritas",
    description: `Caritas Internationalis reflects the social mission and core values of the Catholic Church. We believe in dignity, solidarity and stewardship on behalf of the world’s most vulnerable people.`,
    links: [
      {
        src: "/offre-joie.com/donate",
        icon: "money bill alternate outline",
        text: "Donate",
      },
      {
        src: "/offre-joie.com/volunteer",
        icon: "handshake outline",
        text: "Volunteer",
      },
    ],
    labels: ["shelters", "rebuilt"],
    meta: {
      by: "Helb",
      date: "20/08/20",
      cardId: 1,
    },
  },
];

export default function InstitutionsPage() {
  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Raise Funding"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}
      />

      <Card.Group stackable doubling itemsPerRow={3}>
        {_.map(staticCards, (card) => (
          <InstitutionCard key={makeKeyOfObject(card)} cardContent={card} />
        ))}
      </Card.Group>
    </Container>
  );
}
