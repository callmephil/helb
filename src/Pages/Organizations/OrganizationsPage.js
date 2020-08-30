import _ from "lodash";
import React from "react";
import { Container, Card } from "semantic-ui-react";
import OrganizationCard from "./Components/OrganizationCard";
import { makeKeyOfObject } from "../../Utils/ComponentHelpers";
import PageHeadings from "../Components/PageHeadings";

const staticCards = [
  {
    image: {
      src: "https://offrejoie.org/wp-content/uploads/2020/08/offrejoie-logo.png",
      backgroundColor: "image-bg-blue",
    },
    name: "Offre Joie",
    description: `Offrejoie was born in the midst of a raging civil war in Lebanon in 1985. A group of young
        Red Cross volunteers worked together to help the injured. Alleviating human suffering
        transcended any differences between them.`,
    website: "https://offrejoie.org/",
    location: "Lebanon",
    extra: [
      {
        type: 0,
        src: "https://offrejoie.org/donate/",
      }, 
      {
        type: 1,
        src: "https://offrejoie.org/contact-us/",
      },
    ],
    labels: ["Housing", "Looking for volunteers", ],
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
    name: "Caritas",
    description: `Caritas Internationalis reflects the social mission and core values of the Catholic Church. We believe in dignity, solidarity and stewardship on behalf of the world’s most vulnerable people.`,
    website: "http://www.caritas.org.lb",
    location: "Lebanon",
    extra: [
      {
        type: 0,
        src: "http://www.caritas.org.lb/get_involved/donate",
      }, 
      {
        type: 1,
        src: "http://www.caritas.org.lb/contact_us",
      },
    ],
    labels: ["Food", "Housing", "Health", "Looking for volunteers"],
    meta: {
      by: "Helb",
      date: "20/08/20",
      cardId: 1,
    },
  },
];

export default function OrganizationsPage() {
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

      <Card.Group stackable doubling itemsPerRow={3}>
        {_.map(staticCards, (card) => (
          <OrganizationCard key={makeKeyOfObject(card)} cardContent={card} />
        ))}
      </Card.Group>
    </Container>
  );
}
