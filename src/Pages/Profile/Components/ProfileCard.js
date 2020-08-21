import React from "react";
import { Icon, Button, Card } from "semantic-ui-react";

export default function ProfileCard({ name, email, accType, contributions }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{accType}</Card.Meta>
        <Card.Description>
          <div>
            <Icon name="clipboard outline" />
            {contributions} Contributions
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <Icon name="mail" />
          Email
        </Card.Meta>
        <a href={`mailto:${email}`}>{email}</a>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <Icon name="phone" /> Phone
        </Card.Meta>
        <a href={`tel:+961709451`}>70945150</a>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <Icon name="map marker alternate" /> Location
        </Card.Meta>
        Lebanon
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="blue">
            Edit
          </Button>
          <Button basic color="blue">
            Contact Us
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
